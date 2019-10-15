const { 
    PORT, 
    API, 
    CONNECTION_STRING,
    CLIENT_ID,
    CLIENT_SECRET,
    JWT_SECRET
} = process.env

module.exports = { 
    port: PORT,
    api: API,
    connection_string: CONNECTION_STRING,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    jwt_secret: JWT_SECRET
}