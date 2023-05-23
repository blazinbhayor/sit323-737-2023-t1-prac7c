const { json } = require('express');
const express = require('express');
const app = express();

// Need to import Express libraries to read POST body data (e.g. req.body)
app.use(express.json());
app.use(express.urlencoded());


app.get('/', (req, res) => {
    res.json("Welcome to Docker Network");
});

const cheekyTexts = [
  "I'm not a photographer, but I can definitely picture us together.",
  "Is your name Google? Because you have everything I've been searching for.",
  "Excuse me, but I think you dropped something: my jaw.",
  "Are you a magician? Because whenever I look at you, everyone else disappears.",
  "Is your dad a baker? Because you're a cutie pie!",
  "Do you believe in love at first sight, or should I walk by again?",
];

function getRandomCheekyText() {
  const randomIndex = Math.floor(Math.random() * cheekyTexts.length);
  return cheekyTexts[randomIndex];
}

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
  console.log("Cheeky Text of the Day:");
  console.log(getRandomCheekyText());
});


