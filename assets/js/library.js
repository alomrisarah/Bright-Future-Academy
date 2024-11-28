// Array to store book data
const books = [
 { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" },
 { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Drama" },
 { id: 3, title: "1984", author: "George Orwell", genre: "Dystopian" },
 { id: 4, title: "Moby Dick", author: "Herman Melville", genre: "Adventure" },
 { id: 5, title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance" },
 { id: 6, title: "War and Peace", author: "Leo Tolstoy", genre: "Historical" },
 { id: 7, title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Young Adult" },
 { id: 8, title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy" },
 { id: 9, title: "Harry Potter", author: "J.K. Rowling", genre: "Fantasy" },
 { id: 10, title: "The Alchemist", author: "Paulo Coelho", genre: "Philosophical" },
 { id: 11, title: "The Da Vinci Code", author: "Dan Brown", genre: "Thriller" },
 { id: 12, title: "The Road", author: "Cormac McCarthy", genre: "Post-Apocalyptic" },
 { id: 13, title: "Sapiens", author: "Yuval Noah Harari", genre: "Non-Fiction" },
 { id: 14, title: "Becoming", author: "Michelle Obama", genre: "Biography" },
]

function renderBooks(filter = "") {
 const bookList = document.getElementById("book-list")
 bookList.innerHTML = "" // Clear the list

 const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(filter.toLowerCase()))

 filteredBooks.forEach((book) => {
  const bookCard = document.createElement("div")
  bookCard.className = "col-md-4"
  bookCard.innerHTML = `
            <div class="card h-100">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">Author: ${book.author}</p>
                    <p class="card-text">Genre: ${book.genre}</p>
                    <div class="mt-auto">
                        <button class="btn btn-primary" onclick="downloadBook('${book.title}')">
                            Download
                        </button>
                    </div>
                </div>
            </div>
        `
  bookList.appendChild(bookCard)
 })
}

function downloadBook(bookTitle) {
 alert(`You have downloaded "${bookTitle}".`)
}

document.getElementById("search-btn").addEventListener("click", () => {
 const searchBar = document.getElementById("search-bar")
 renderBooks(searchBar.value)
})

renderBooks()
