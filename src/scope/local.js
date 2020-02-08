var hello = 'Global Hello'
const helloWorld = () => {
  var hello = 'Local Hello'
  console.log(hello)
}
helloWorld()
console.log(hello)

var apple = 'red'
let apple = 'yellow'
console.log(apple)
