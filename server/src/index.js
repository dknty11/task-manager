const app = require('./app')
const port = process.env.PORT

// Remember to set this route for calling index hbs template
app.get('', (req, res) => {
    res.render('index', { user: req.user })
})

app.get('/signup', (req, res) => {
    res.render('signup')
})

app.listen(port, () => {
    console.log('Server is up on port '+ port)
})