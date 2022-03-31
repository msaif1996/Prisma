const express = require('express')
const app = express();

app.use(express.json())

const ArticleRoute = require('./route/article')
app.use('/article', ArticleRoute)


const PORT = process.env.PORT||'5000';

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}!`)
});

app.get("/", (req, res) => { res.send("Welcome to Omerald Backend")})
