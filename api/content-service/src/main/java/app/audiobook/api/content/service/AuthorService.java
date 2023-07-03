package app.audiobook.api.content.service;

import app.audiobook.api.content.model.Author;

import java.util.List;

public interface AuthorService {
    public Author saveAuthor(Author author);
    public Author updateAuthor(Author author);
    public boolean existsById(String id);
    public boolean deleteAuthor(String id);
    public List<Author> getAllAuthors();
    public Author findAuthorById(String id);
}
