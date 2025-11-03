const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

//HTML Response 
/*app.get("/users" , (req , res) => {
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
});*/



// JSON Response

// List all users:
app.get("/api/users" , (req, res) =>{
    return res.json(users);
});

// Get a single user by ID, update a user, delete a user
app
   .route("/api/users/:id")
   .get( (req, res) => {
    const id = Number(req.params.id);
    const user = users.find ((user) => user.id === id);
    return res.json (user);
})
.patch( (req, res) => {})
.delete( (req, res) => {});





app.listen(PORT, () => {
     console.log(`Server is running on ${PORT}`);
    });