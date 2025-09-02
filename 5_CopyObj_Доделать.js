const deepClone = obj => {
  return { ...obj }
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
  console.log(original.settings.languages) // ["en", "ru"]
}

main().catch(console.error)
