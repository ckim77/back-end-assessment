// SERVER

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json()); 

const tasks = ["meditate", "shower", "make bed", "gym", "read"]

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["Many will travel to hear you speak",
                    "Feeding a cow with roses does not get extra appreciation",
                    "Have a beautiful day",
                    "Don't just think, act!",
                    "Emulate what you respect in your parents",
                    "You are modest and courteous",
];

let randomIndex = Math.floor(Math.random() * fortunes.length);
let randomFortune = fortunes[randomIndex];

res.status(200).send(randomFortune);
                
})

app.get("/api/tasks", (req, res) => {
    res.status(200).send(tasks);
})

app.get("/api/onetask", (req, res) => {
  res.status(200).send(tasks[0]);
})

app.post("/api/addtasks", (req, res) => {
  // console.log(req.body.data);
  if (req.body.data) {
    tasks.push(req.body.data);
    res.status(200).send("Task added!");
  } else {
    res.status(400).send("Please enter a valid entry.");
  }
})

app.delete("/api/delete", (req, res) => {
  tasks.splice(0, 1);
  res.status(200).send("Task deleted! Good job!");
})

app.put("/api/update", (req, res) => {
  let updatedTask = req.body.data;
  if(updatedTask) {
    tasks.splice(0, 1, updatedTask);
    res.status(200).send("First task updated.")
  } else {
    res.status(400).send("Please enter a valid entry.")
  }
})

app.listen(4000, () => console.log("Server running on 4000"));





