const products = [
  {
    name: 'iPhone 15 Pro',
    price: 999,
    category: 'Смартфоны',
  },
  {
    name: 'Ноутбук ASUS ROG Strix',
    price: 1499,
    category: 'Компьютеры и ноутбуки',
  },
  {
    name: 'Наушники Sony WH-1000XM5',
    price: 349,
    category: 'Аудиотехника',
  },
  {
    name: 'Фитнес-браслет Xiaomi Mi Band 8',
    price: 59,
    category: 'Спорт и фитнес',
  },
  {
    name: 'Игровая консоль PlayStation 5',
    price: 499,
    category: 'Смартфоны',
  },
]

const getTotalPriceByCategory = category => {
  const filteredProduct = products.filter(product => product.category === category)
  return filteredProduct.reduce((sum, { price }) => sum + price, 0)
}

async function main() {
  const res = getTotalPriceByCategory('Смартфоны')
  console.log(res)
}

main().catch(console.error)
