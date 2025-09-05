const findUserById = (users, id) => {
  const selectUser = users.find(user => user.id === id)
  return selectUser ?? null
}

async function main() {
  const users = [
    {
      id: 1,
      name: 'Иван Петров',
      email: 'ivan.petrov@example.com',
    },
    {
      id: 2,
      name: 'Мария Сидорова',
      email: 'maria.sidorova@example.com',
    },
    {
      id: 3,
      name: 'Алексей Козлов',
      email: 'alexey.kozlov@example.com',
    },
    {
      id: 4,
      name: 'Екатерина Новикова',
      email: 'ekaterina.novikova@example.com',
    },
    {
      id: 5,
      name: 'Дмитрий Волков',
      email: 'dmitry.volkov@example.com',
    },
  ]

  const selectUser = findUserById(users, 1)
  console.log(selectUser)
}

main().catch(console.error)
