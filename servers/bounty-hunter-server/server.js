const express = require("express")
const app = express()
const uuid = require("uuid/v4")

const bounties = [
    {
        fName: "Allayah",
        lName: "Cross",
        isLiving: true,
        bounty: 4300,
        type: "Jedi",
        _id: uuid()
    }, {
        fName: "Jonah",
        lName: "Sayaan",
        isLiving: true,
        bounty: 127,
        type: "Jedi",
        _id: uuid()
    }, {
        fName: "Keiko",
        lName: "Mayers",
        isLiving: true,
        bounty: 1950,
        type: "Sith",
        _id: uuid()
    }
]

app.use(express.json())

app.get("/bounty", (req, res) => {
    res.send(bounties)
})

app.get("/bounty/:_id", (req, res) => {
    const bountyId = req.params._id
    const specificBounty = bounties.find(bounty => bounty._id === bountyId)
    res.send(specificBounty)
})

app.post("/bounty", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuid()
    bounties.push(newBounty)
    res.send(newBounty)
})

app.delete("/bounty/:_id", (req, res) => {
    const bountyId = req.params._id
    const indexToDel = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(indexToDel, 1)
    res.send("Bounty Deleted")
})

app.put("/bounty/:_id", (req, res) => {
    const bountyId = req.params._id
    const bountyToUpdate = bounties.find(bounty => bounty._id === bountyId)
    const indexToUpdate = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bountyToUpdate, req.body)
    bounties.splice(indexToUpdate, 1, updatedBounty)
    res.send(updatedBounty)
})


app.listen(5683, () => {
    console.log("Server running on 5683")
})