package app.audiobook.api.content.service.impl;

import app.audiobook.api.content.model.Book;
import app.audiobook.api.content.repository.BookRepository;
import app.audiobook.api.content.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookServiceImpl implements BookService {

    private final BookRepository bookRepository;

    @Autowired
    public BookServiceImpl(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @Override
    public Book saveBook(Book book) {
        return bookRepository.save(book);
    }

    @Override
    public Book updateBook(Book book) {
        return bookRepository.save(book);
    }

    @Override
    public boolean existsById(String id) {
        return bookRepository.existsById(id);
    }

    @Override
    public boolean deleteBook(String id) {
        if(bookRepository.existsById(id)){
            bookRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    @Override
    public Book findBookById(String id) {
        return bookRepository.findById(id).orElse(null);
    }
}
