const deepClone = obj => {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  if (Array.isArray(obj)) {
    return obj.map(deepClone)
  }

  const clonedObj = {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key])
    }
  }

  return clonedObj
}

async function main() {
  const original = {
    name: 'Alice',
    settings: {
      theme: 'dark',
      languages: ['en', 'ru'],
    },
  }

  const copy = deepClone(original)

  copy.settings.theme = 'light'
  copy.settings.languages.push('fr')

  console.log(original.settings.theme) // "dark"
  console.log(original.settings.languages) // ["en", "ru"] (без изменений!)
}

main().catch(console.error)
