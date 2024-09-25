const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

// Sample data
const books = [
    { 
      id: 1,
      title: 'Harry Potter and the Philosopher\'s Stone', 
      author: 'J.K. Rowling', 
      genre: 'Fantasy',
      shelfnumber : 'A12'
    },
    { 
      id: 2, 
      title: 'The Lord of the Rings', 
      author: 'J.R.R. Tolkien', 
      genre: 'Adventure',
      shelfnumber : 'B01' 
    },
    { 
      id: 3, 
      title: 'A Game of Thrones', 
      author: 'George R.R. Martin', 
      genre: 'Science Fiction', 
      shelfnumber : 'C12'
    },
    { 
      id: 4, 
      title: 'To Kill a Mockingbird', 
      author: 'Harper Lee', 
      genre: 'Classic' ,
      shelfnumber : 'D02'
    },
    { 
      id: 5, 
      title: 'Pride and Prejudice', 
      author: 'Jane Austen', 
      genre: 'Romance',
      shelfnumber : 'E03' 
    },
    { 
      id: 6, 
      title: 'The Hunger Games', 
      author: 'Suzanne Collins', 
      genre: 'Dystopian',
      shelfnumber : 'F09' 
    },
    
    {
      id : 7,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Fiction",
      shelfNumber: "1A"
    },
    {
      id : 8,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      shelfNumber: "1B"
    },
    {
      id:9,
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      shelfNumber: "2A"
    },
    {
      id:10,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Fiction",
      shelfNumber: "1C"
    },
    {
      id:11,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      shelfNumber: "3A"
    },
    {
      id:12,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romance",
      shelfNumber: "2B"
    },
    {
      id:13,
      title: "Moby-Dick",
      author: "Herman Melville",
      genre: "Adventure",
      shelfNumber: "4A"
    },
    {
      id:14,
      title: "The Alchemist",
      author: "Paulo Coelho",
      genre: "Fiction",
      shelfNumber: "2C"
    },
    {
      id:15,
      title: "The Da Vinci Code",
      author: "Dan Brown",
      genre: "Thriller",
      shelfNumber: "5A"
    },
    {
      id:16,
      title: "Brave New World",
      author: "Aldous Huxley",
      genre: "Dystopian",
      shelfNumber: "3B"
    }
  ];

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value.trim().toLowerCase();
  const filteredBooks = books.filter(book => {
    return book.title.toLowerCase().includes(searchTerm) || book.author.toLowerCase().includes(searchTerm) || book.genre.toLowerCase().includes(searchTerm) || book.shelfnumber.toLowerCase().includes(searchTerm);
  });

  const resultsHtml = filteredBooks.map(book => {
    return `
      <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.genre}</td>
        <td>${book.shelfnumber}</td>
      </tr>
    `;
  }).join('');

  searchResults.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Genre</th>
          <th>Shelf Number</th>
        </tr>
      </thead>
      <tbody>
        ${resultsHtml}
      </tbody>
    </table>
  `;
});
fetch('books.json')
  .then(response => response.json())
  .then(data => {
    const books = data;
    const tableBody = document.getElementById('book-table-body');

    books.forEach(book => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.genre}</td>
      `;
      tableBody.appendChild(row);
    });
  })
  .catch(error => console.error(error));

