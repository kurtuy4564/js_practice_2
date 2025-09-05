const countByCategory = products => {
  const arrCategory = []
  const resObj = {}

  products
    .map(el => el.category)
    .forEach(el => {
      if (!arrCategory.includes(el)) {
        arrCategory.push(el)
      }
    })

  for (let i = 0; i < arrCategory.length; i++) {
    let productsWithCategory = products.filter(el => el.category === arrCategory[i])
    resObj[arrCategory[i]] = productsWithCategory.length
  }
  return resObj
}

async function main() {
  const products = [
    { name: 'Phone', category: 'Electronics' },
    { name: 'TV', category: 'Electronics' },
    { name: 'Jeans', category: 'Clothing' },
    { name: 'T-shirt', category: 'Clothing' },
    { name: 'Blender', category: 'Home' },
  ]

  const res = countByCategory(products)
  console.log(res)
}

main().catch(console.error)
