const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json([
        { id: 1, name: "anil2", age: 29 },
        { id: 2, name: "hansraj2", age: 30 },
        { id: 3, name: "jadeja2", age: 31 },
    ])
});

app.listen(5000, () => {
    console.log("app is running on 5000 port");
})

// C:\Users\hansr\Desktop\Programming Files\Docker Tut code_step_by_step\Basic_App\index.js
// \Users\hansr\Desktop\Programming Files\Docker Tut code_step_by_step\Basic_App => we have to right click on index.js file and than we have to choose option copy path 
// we will use this path during creating an container and volume