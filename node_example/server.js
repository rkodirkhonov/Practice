// const http = require("http");
// const server = http.createServer(function(req, res) {
//     console.log(`user visited ${req.url}`);
//     res.end("hello!");
// });

// console.log("listening on http://localhost:3000");
// server.listen(3000);

const express = require("express");
const path = require("path");
const complements = [
    "You look nice today",
    "That dress looks nice on you",
    "Have you ever been working out?",
    "You can do hard things",
    "You are programming! How cool is that?",
    "I'm really proud of you",
    "You made this"
];
function getRandomComplement() {
    const randomIndex = Math.floor(Math.random() * complements.length);
    return complements[randomIndex];
}

const app = express();
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/complement", function(req, res) {
    res
        .json({
            complement: getRandomComplement()
        })
        .end();
});

app.use("/", express.static("./"));
app.listen(3000);
console.log("listening on http://localhost:3000");
