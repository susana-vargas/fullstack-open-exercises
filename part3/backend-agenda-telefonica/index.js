const express = require('express')
const app = express()
app.use(express.json())
const morgan = require('morgan')

app.use(morgan('dev'));
app.use(morgan((tokens, req, res) => {
  return `${JSON.stringify(req.body)}, esto es lo que mandan`
}));




// const requestLogger = (request, response, next) => {
  //   console.log('Method:', request.method)
  //   console.log('Path:  ', request.path)
  //   console.log('Body:  ', request.body)
  //   console.log('---')
  //   next()
  // }
  // const unknownEndpoint = (request, response) => {
    //   response.status(404).send({ error: 'unknown endpoint' })
    // }
    // app.use(requestLogger)
    
    let persons = [
      { 
        "id": 1,
        "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    },
    { 
      "id": 5,
      "name": "Nieves", 
      "number": "39-23-6423122"
    },
    { 
      "id": 6,
      "name": "Ganjah", 
      "number": "39-23-6423122"
    },
    { 
      "id": 7,
      "name": "Pochita", 
      "number": "39-23-6423122"
    }
    
  ]

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/api/info', (req, res) => {
  const personsCount = persons.length
  const now = new Date();
  const offsetMinutes = -360; 
  const gmtMinus6Date = new Date(now.getTime() + offsetMinutes * 60000); 
  console.log(gmtMinus6Date)
  res.send(`<p> ponebook has info for ${personsCount.toString()} people </p>
  <p>${gmtMinus6Date}</p>`)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(person => person.id === id)
  
  if (person) {
    res.json(person)
  } else {
    res.status(404).end()
  }
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const personToDelete = persons.find(person => person.id === id)
  if(personToDelete) {
    persons = persons.filter(person => person.id !== id)
    return res.status(204).end()
  }

  return res.status(404).end()
})

const generateId = () => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(p => p.id))
    : 0
  return maxId + 1
}

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name || !body.number) {
    return response.status(400).json({ 
      error: 'Missing name and number' 
    })
  }
  const existingName = persons.find(person => person.name === body.name)

  console.log(existingName);//

  if(existingName){
    return response.status(400).json({
      error: 'the name already exists'
    })
  }

  const person = {
    id: generateId(),
    name: body.name,
    number: body.number,
  }

  persons = persons.concat(person)

  response.json(person)
})

//app.use(unknownEndpoint)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})