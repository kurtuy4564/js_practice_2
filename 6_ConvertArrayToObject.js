const array = [
  { name: 'width', value: 123 },
  { name: 'height', value: 222 },
]
let obj = {}

for (let i = 0; i < array.length; i++) {
  obj[array[i].name] = array[i].value
}

console.log(obj)
