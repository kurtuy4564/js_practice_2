const books = [
  {
    title: 'Преступление и наказание',
    author: 'Федор Достоевский',
    genres: ['Классика', 'Психологический роман', 'Драма'],
    isRead: false,
  },
  {
    title: '1984',
    author: 'Джордж Оруэлл',
    genres: ['Антиутопия', 'Научная фантастика', 'Политический роман'],
    isRead: false,
  },
  {
    title: 'Гарри Поттер и философский камень',
    author: 'Джоан Роулинг',
    genres: ['Фэнтези', 'Приключения', 'Детская литература'],
    isRead: false,
  },
  {
    title: 'Мастер и Маргарита',
    author: 'Михаил Булгаков',
    genres: ['Классика', 'Магический реализм', 'Сатара'],
    isRead: false,
  },
  {
    title: 'Три товарища',
    author: 'Эрих Мария Ремарк',
    genres: ['Классика', 'Роман', 'Военная проза'],
    isRead: false,
  },
]

const getBooksByGenre = genre => {
  return books.filter(({ genres }) => genres.includes(genre))
}

const markAsRead = title => {
  const index = books.findIndex(book => book.title === title)
  books[index].isRead = true
}

async function main() {
  const filterBooks = getBooksByGenre('Классика')
  console.log('Книги из выбранной категории:', filterBooks)

  markAsRead('Гарри Поттер и философский камень')
  console.log('Все книги:', books)
}

main().catch(console.error)
