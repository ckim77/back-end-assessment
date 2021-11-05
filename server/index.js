const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

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

app.get("/api/compliment/fortune", (req, res) => {
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



app.listen(4000, () => console.log("Server running on 4000"));
