const booksCategory = [
{
category: "Riqueza",
books: [
{title: "Os segredos da mente milionária",
author: "T. Harv Eker",
},
{title: "O homem mais rico da Babilônia",
author: "George S. Clason",
},
{title: "Pai rico, pai pobre",
 author: "Robert T. Kiyosaki e Sharon L. Lechter",
},
],  
}, { category: "Inteligência Emocional",
books: [
{title: "Você é Insubstituível",
author: "Augusto Cury",
},
{title: "Ansiedade - Como enfrentar o mal do século",
author: "Augusto Cury",
},
{title: "Os 7 hábitos das pessoas altamente eficazes",
author: "Stephen R. Covey",
},],},]

const totalCategories = booksCategory.length 
    console.log(`São ${totalCategories} categorias.`)

for(const totalBooks of booksCategory) {
    console.log(`Na categoria ${totalBooks.category} tem ${totalBooks.books.length} livros.`)
}

function Authors() {
let authors = [];
for(let totalAuthors of booksCategory) {
for(let book of totalAuthors.books) {
if(authors.indexOf(book.author) == -1) {
authors.push(book.author)}}}
    console.log(`São ${authors.length} autores.`)
}

Authors();
function augustoBooks() {
const books = [];
const bookauthor = "Augusto Cury";
for(const totalAuthors of booksCategory) {
for(const book of totalAuthors.books) {
if(book.author === bookauthor) {
books.push(book.title)}}}
    console.log(`Os Livros do autor ${bookauthor} são: ${books.join(", ")}`)
}

augustoBooks();
function authorBooks(author) {
const books = [];
for(const totalAuthors of booksCategory) {
for(const book of totalAuthors.books) {
if(book.author === author) {
books.push(book.title)}}}
    console.log(`Alguns dos livros do ${author} são: ${books.join(", ")}`)
}

authorBooks('Robert T. Kiyosaki e Sharon L. Lechter');