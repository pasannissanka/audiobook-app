package app.audiobook.api.content.service;

import app.audiobook.api.content.dto.BookDto;
import app.audiobook.api.content.model.Book;

import java.util.List;

public interface BookService {
    public Book saveBook(BookDto book);
    public Book updateBook(Book book);
    public boolean existsById(String id);
    public boolean deleteBook(String id);
    public List<Book> getAllBooks();
    public Book findBookById(String id);

}
