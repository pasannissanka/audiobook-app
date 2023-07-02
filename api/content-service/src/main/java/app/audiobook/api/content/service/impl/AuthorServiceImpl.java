package app.audiobook.api.content.service.impl;

import app.audiobook.api.content.model.Author;
import app.audiobook.api.content.repository.AuthorRepository;
import app.audiobook.api.content.service.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthorServiceImpl implements AuthorService {
    private  final AuthorRepository authorRepository;

    @Autowired
    public AuthorServiceImpl(AuthorRepository authorRepository) {
        this.authorRepository = authorRepository;
    }

    @Override
    public Author saveAuthor(Author author) {
        return authorRepository.save(author);
    }

    @Override
    public Author updateAuthor(Author author) {
        return authorRepository.save(author);
    }

    @Override
    public boolean existsById(String id) {
        return authorRepository.existsById(id);
    }

    @Override
    public boolean deleteAuthor(String id) {
        if(authorRepository.existsById(id)){
            authorRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public List<Author> getAllAuthors() {
        return authorRepository.findAll();
    }

    @Override
    public Author findAuthorById(String id) {
        return authorRepository.findById(id).orElse(null);
    }
}
