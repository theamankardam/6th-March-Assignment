let bookList = [
    { title: 'The Lord of the Rings', AuthorName: 'J.R.R.Tolkien', publish: '1954' },
    { title: "Harry Potter and the Philosopher's", AuthorName: 'J.K.Rowling', publish: '1997' },
    { title: 'Twilight', AuthorName: 'Stephenie Meyer', publish: '2005' },
    { title: 'Half Girlfriend', AuthorName: 'Chetan Bhagat', publish: '2014' },
    { title: 'The Magic of Lost Temple', AuthorName: 'Sudha Murty', publish: '2012' },
]


const remainBooks = bookList.filter((book) => book.publish <= 2010);
for (let i = 0; i < remainBooks.length; i++) {
    remainBooks[i].AuthorName = remainBooks[i].AuthorName.toUpperCase();
}
console.log(`\n Books Before 2010`);
console.log(remainBooks);




const afterBooks = bookList.filter((book) => book.publish >= 2010);
for (let i = 0; i < afterBooks.length; i++) {
    afterBooks[i].AuthorName = afterBooks[i].AuthorName.toUpperCase();
}
console.log(`\n Books After 2010`);
console.log(afterBooks);