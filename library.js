class Book{
    constructor(bookName,bookAuthor,bookISBN){
        this.bookName = bookName;
        this.bookAuthor = bookAuthor;
        this.bookISBN = bookISBN 
    }
}

class UI{

    addBook(book){
        const row = document.getElementById("bookList");
        const newBook = document.createElement("tr");
        newBook.innerHTML= `

            <td>${book.bookName}</td>
            <td>${book.bookAuthor}</td>
            <td>${book.bookISBN}</td>
            <td><a href="#" class="delete">X</td>

        `
        ;
        
        row.appendChild(newBook)
    }

}

document.getElementById("formBook").addEventListener("submit", e =>{

    const bookName = document.getElementById('bookName').value
    const bookAuthor = document.getElementById('bookAuthor').value
    const bookISBN = document.getElementById('bookISBN').value;

    const book = new Book(bookName, bookAuthor, bookISBN)

    const ui = new UI();

    if(!bookName == '' || !bookAuthor == '' || !bookISBN == '') {
        ui.addBook(book);
      } 


    e.preventDefault()
})