import express from 'express'

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

app.get('/', (req, res) => {
    res.render('index', {
        title: 'My website',
        message: 'hello from ejs',
        people: ['john', 'jan', 'jack']
    })
})


app.listen(8000, () => console.log('server started'))