// Step 1 - Install express
// Run with: npx nodemon + file name

// Step 2 - Require Express
const express = require("express")

// Step 3 - Assign it to a consntant
const app = express()

// Step 4 - Declare a port
const port = 4000

// Step 6 - Write endpoits
app.get("/", (request, response) => {
  console.log(request.method)
  console.log(request.path)
  response.send("Hello")
})

app.get("/story", (request, response) => {
  response.send("I had a dog and he died")
})

app.get("/me/:name", (request, response) => {
  const name = request.params.name
  console.log(request.params.name)
  response.send(`Hello, ${name}`)
})

// Step 5 - Start listening
//takes two arguments: port and callback 
app.listen(port, () => console.log(`Listening on ${port}`)) 

