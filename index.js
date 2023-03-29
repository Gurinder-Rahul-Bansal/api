const express = require("express");

const app = express();

app.listen(4000);

app.use(express.json());

app.post("/bfhl", (req, res) => {
    
});

app.use((req, res) => {
    res.status(404).send();
});
