const express = require('express')
const app = express()
const port = 3333
app.use(express.json())

let std = [
    {id: 1, name: "Thitipat"},
    {id: 2, name: "Techavit"}
]

app.get('/', (req,res) => {
    res.send("Hello")
})

app.get('/std', (req,res) => {
    res.json(std)
})

app.get('/std/:id', (req,res) => {
    let date = std.find(i => i.id == req.params.id)
    if (date != undefined) res.json(date)
    else res.json({message: "Can't find"})
})
app.post('/std',(req,res) => {
    let stdID =std[std.length-1].id + 1
    let stdName = req.body.name
    std = [...std, {id: stdID, name: stdName }]
    res.json(std)
})
app.put('/std/:id', (req, res) => {
    let date = std.find(i => i.id == req .params.id)
    if (date == undefined) res.json('ไม่มีนะ')
    else date.name = req.body.name
    std.map((i) => {
        if (i.id == date.id) i.name == date.name;
    })
    res.json(std)
})

app.delete('/std/:id', (req, res) => {
    std =std.filter(i => i.id != req.params.id)
    res.json(std)
})

app.listen(port, () => {
    console.log(`Example app listening at http://lochost:${port}`)
})