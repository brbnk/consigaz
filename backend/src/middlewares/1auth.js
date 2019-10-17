const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const User = require('../models/User')
const { client_id, client_secret, api, port, jwt_secret } = require('../environment/vars')

// Google Authentication Strategy 
passport.use(new GoogleStrategy({ 
        clientID: client_id,
        clientSecret: client_secret,
        callbackURL: `${api}:${port}/auth/google/callback`
    }, function (accTk, refTk, profile, done) { 
        const { emails, photos, id, displayName } = profile
        const email = emails[0].value
        const photo = photos[0].value

        // make the code asynchronous
        // User.findOne won't fire until we have all our data back from Google
        process.nextTick(function() { 
            User.findOne({ email })
                .then(user => { 
                    if (!user) { 
                        return done(null, false)
                    }

                    if (!user.googleID) { 
                        user.googleID = id
                        user.name = displayName
                        user.createdAt = new Date()
                        user.email = email
                        user.photo = photo

                        user.save()
                        return done(null, user)
                    }

                    return done(null, user)
                })
                .catch(err => done(err))
        })
    })
)

// Jason Web Tokens (JWT) Authentication Strategy
const jwtExtractorFromCookie = (req) => { 
    let token = null

    if (req && req.cookies) { 
        token = req.cookies['jwt']
    }

    return token
} 

const options = { 
    jwtFromRequest: jwtExtractorFromCookie,
    secretOrKey: jwt_secret
}

passport.use(new JwtStrategy(options, (payload, done) => {
    console.log(payload)
    User.findOne({ _id: payload._id }, (err, user) => { 
        if (err) { 
            return done(err, false)
        }

        if (!user) { 
            return done(null, false)
        }

        return done(null, user)
    })
}))

module.exports = app => { 
    app.use(passport.initialize())
}