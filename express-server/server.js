const express = require("express")
const app = express()
require("dotenv").config()

app.use(express.json())

/* 
{
        title: "Hello world",
        text: "This is some text",
        id: "xd"
}
*/
let notes = [
]

app.get("/Note", (req, res) => {
    console.log("Received GET request")
    res.send(JSON.stringify(notes))
})

app.post("/Note", (req, res) => {
    console.log("Received post request")
    let info = req.body
    console.log(info)
    notes.push({
        "title": info.title,
        "text": info.text,
        "id": info.id
    })
    res.sendStatus(201)
})

app.patch("/Note", (req, res) => {
    console.log("Received PATCH request")
    let info = req.body
    let object = notes.find(o => o.id === info.id)
    if (object !== null) {
        object.title = info.title
        object.text = info.text
        notes = notes.filter(o => o.id !== info.id)
        notes = [...notes, object]
        res.sendStatus(201)
    } else {
        res.sendStatus(401)
    }
})

app.delete("/Note", (req, res) => {
    console.log("Received delete request")
    info = req.body
    if (notes.find(o => o.id === info.id)) {
        notes = notes.filter(o => o.id !== info.id)
        res.sendStatus(200)
    } else {
        res.sendStatus(401)
    }
})


app.listen(4000, () => {
    console.log("Listening on port 4000")
})