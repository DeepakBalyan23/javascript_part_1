function Book(title, author, alreadyRead){
  this.title = title;
  this.author = author;
  this.alreadyRead = alreadyRead;
}
var booksArray = [new Book("On the origin of species", "Charles Darwin", false), new Book("Walden", "Henry David Thoreau", false), new Book("The Discovery of India", "Jawaharlal Nehru", true), new Book("Two Lives", "Vikram Seth", true), new Book("Geetanjali", "Rabindranath Tagore", false)];
for(var i=0; i<booksArray.length; i++){
  if(booksArray[i].alreadyRead)
    var readText = "You already read";
  else
    var readText = "You still need to read";
console.log(readText +' "'+ booksArray[i].title + '" ' + 'by ' +booksArray[i].author);
}