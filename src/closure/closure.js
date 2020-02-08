const moneyBox = () => {
  var savedMoney = 0
  const countMoney = money => {
    savedMoney += money
    console.log(`MoneyBox: $${savedMoney}`)
  }
  return countMoney
}

let myMoneyBox = moneyBox()
myMoneyBox(100) // 100
myMoneyBox(50) // 150
myMoneyBox(30) // 180
