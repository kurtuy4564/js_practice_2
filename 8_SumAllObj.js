const getTotalSalary = obj => {
  const arr = Object.values(obj)
  return arr.reduce((sum, value) => sum + value, 0)
}

async function main() {
  const salaries = {
    Alice: 500,
    Bob: 700,
    Charlie: 300,
  }

  const res = getTotalSalary(salaries)
  console.log(res)
}

main().catch(console.error)
