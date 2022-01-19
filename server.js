// Step 1 - Install express
// Run with: npx nodemon + file name
const patients = require("./patients")

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

//send a list of all patients
app.get("/patients", (request, response) => {
  response.send(patients)
})

//send a patient by id
app.get("/patient/:id", (request, response) => {
  const id = request.params.id
  const patientById = patients.find(patient => patient.id === parseInt(id))
  response.send(patientById)
})

//send patient by gender
app.get("/gender/:gender", (request, response) => {
  const gender = request.params.gender
  const patientsByGender = patients.filter(patient => patient.gender === gender)
  response.send(patientsByGender)
})

// Step 5 - Start listening
//takes two arguments: port and callback 
app.listen(port, () => console.log(`Listening on ${port}`)) 

