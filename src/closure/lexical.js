const buildCount = i => {
  let count = i
  const showCount = () => {
    console.log(++count)
  }
  return showCount
}

const myCount = buildCount(10)

myCount()
myCount()
myCount()

const myCount2 = buildCount(10)

myCount2()
myCount2()
myCount2()
