// Task 2 Уявіть, що ви створюєте інтерфейси для веб-сервісу, який надає інформацію про книги. Створіть інтерфейси Book, Author, і BookService, які описують структуру даних книжок, авторів і методи веб-сервісу для отримання інформації про книжки та авторів. Потім створіть об'єкт bookService, який імітує роботу веб-сервісу, і використовуйте інтерфейси для отримання інформації про книги та авторів.

interface IBook {
  id: number;
  title: string;
  authorId: number;
}

interface IAuthor {
  id: number;
  name: string;
  birthYear: number;
}

interface IBookService {
  getBookById(id: number): IBook | null;
  getBooksByAuthorId(authorId: number): IBook[];
  getAuthorById(id: number): IAuthor | null;
}

class Book implements IBook {
  id: number;
  title: string;
  authorId: number;
  constructor(id: number, title: string, authorId: number) {
    this.id = id;
    this.title = title;
    this.authorId = authorId;
  }
}

class Author implements IAuthor {
  id: number;
  name: string;
  birthYear: number;
  constructor(id: number, name: string, birthYear: number) {
    this.id = id;
    this.name = name;
    this.birthYear = birthYear;
  }
}

class BookService implements IBookService {
  private books: IBook[] = [];
  private authors: IAuthor[] = [];

  constructor() {
    this.books.push(new Book(1, 'Book 1', 1));
    this.books.push(new Book(2, 'Book 2', 1));
    this.books.push(new Book(3, 'Book 3', 2));

    this.authors.push(new Author(1, 'Author 1', 1980));
    this.authors.push(new Author(2, 'Author 2', 1990));
  }

  getBookById(id: number): IBook | null {
    return this.books.find(book => book.id === id) ?? null;
  }

  getBooksByAuthorId(authorId: number): IBook[] {
    return this.books.filter(book => book.authorId === authorId);
  }

  getAuthorById(id: number): IAuthor | null {
    return this.authors.find(author => author.id === id) ?? null;
  }
}

const bookService = new BookService();

const bookId = 1;
const authorId = 1;

const book = bookService.getBookById(bookId);
const author = bookService.getAuthorById(authorId);
const booksByAuthor = bookService.getBooksByAuthorId(authorId);

// console.log('Book:', book);
// console.log('Author:', author);
// console.log('Books By author:', booksByAuthor);
