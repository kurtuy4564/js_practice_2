const findCategory = (name, tree) => {
  if (tree.name === name) {
    return tree
  }

  for (let category of tree.subcategories) {
    const found = findCategory(name, category)
    if (found !== null) {
      return found
    }
  }

  return null
}

async function main() {
  const categories = {
    name: 'Electronics',
    subcategories: [
      {
        name: 'Phones',
        subcategories: [
          { name: 'Smartphones', subcategories: [] },
          { name: 'Feature Phones', subcategories: [] },
        ],
      },
      {
        name: 'Computers',
        subcategories: [
          { name: 'Laptops', subcategories: [] },
          { name: 'Desktops', subcategories: [] },
        ],
      },
    ],
  }

  const res = findCategory('Phones', categories)
  console.log(res)
}

main().catch(console.error)
