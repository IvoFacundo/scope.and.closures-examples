const person = () => {
  var saveName = 'Name'
  return {
    getName: () => saveName,
    setName: name => {
      saveName = name
    }
  }
}

const newPerson = person()
console.log(newPerson.getName())
newPerson.setName('Ivo')
console.log(newPerson.getName())
