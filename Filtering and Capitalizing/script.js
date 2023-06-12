// List of books with authors and publication years
var books = [
    {
        title: 'Book 1',
        author: 'author 1',
        year: 2005
    },
    {
        title: 'Book 2',
        author: 'author 2',
        year: 2012
    },
    {
        title: 'Book 3',
        author: 'author 3',
        year: 2008
    },
    {
        title: 'Book 4',
        author: 'author 4',
        year: 2015
    }
];

// Function to filter books published after 2010 and capitalize author names
function filterAndCapitalizeBooks(books) {
    var filteredBooks = [];
    for (var i = 0; i < books.length; i++) {
        var book = books[i];
        if (book.year >= 2010) {
            var capitalizedAuthor = book.author.toUpperCase();
            filteredBooks.push({
                title: book.title,
                author: capitalizedAuthor
            });
        }
    }
    return filteredBooks;
}

// Filter and capitalize books
var filteredBooks = filterAndCapitalizeBooks(books);

// Display the filtered books
console.log(filteredBooks);
