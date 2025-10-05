import { PrismaClient } from "@prisma/client";
import cors from "cors";
import express from "express";

const app = express();

const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🎯 Server is on!")
});

//----------------------------------------------------------------

//GET
app.get("/profiles", async (req, res) => {
  try{
    const profiles = await prisma.profile.findMany()

    res.status(200).json(profiles)

  } catch(error) {
    res.status(500).json({error: "Error fetching profiles"})
  }
})

//POST
app.post("/profiles", async (req, res) => {
    try{
    const {name, username, bio, profession, online} = req.body;
    const newProfile = await prisma.profile.create({
      data: {name, username, bio, profession, online}
    })
    res.status(201).json({ message: "User created successfully! 👨🏻‍💻", profile: newProfile });

    } catch(error) {
      res.status(500).json("Error creating user! 👾")
    }
})

//PUT
app.put("/profiles/:id", async (req, res) => {
    try{
    const {id} = req.params;
    const {name, username, bio, profession, online} = req.body;

    const updated = await prisma.profile.update({
      where: {id: Number(id)},
      data: {name, username, bio, profession, online}
    })

    res.status(201).json("User updated successfully! ✔️")

    } catch(error) {
      res.status(500).json("Error updating user! ⛔")
    }
});


//DELETE
app.delete("/profiles/:id", async (req, res) => {
  try{
    const {id} = req.params;

    const updated = await prisma.profile.delete({
    where: {id: Number(id)}
  })

  res.status(200).json("User deleted successfully! ☠︎", updated)
  } catch(erorr) {
    res.status(500).json("User survive! Error deleting... 𓆩🖤𓆪")
  }
})



//----------------------------------------------------------------

app.listen(3000, () => {
  console.log("🎯 Server is on! http://localhost:3000")
})