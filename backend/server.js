const app = require("./app");
require('dotenv').config();

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
    console.log("Server is listening on port:", PORT)
})
