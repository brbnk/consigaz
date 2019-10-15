module.exports = app => { 
    app.listen(3000, () => { 
        console.log(`Server is listenning on port ${ 3000 }`)
    })
}