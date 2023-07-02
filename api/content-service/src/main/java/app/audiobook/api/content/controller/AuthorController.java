package app.audiobook.api.content.controller;

import app.audiobook.api.content.model.Author;
import app.audiobook.api.content.model.Book;
import app.audiobook.api.content.service.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/authors")
public class AuthorController {
    private final AuthorService authorService;

    @Autowired
    public AuthorController(AuthorService authorService) {
        this.authorService = authorService;
    }

    @PostMapping
    public Author saveAuthor(@RequestBody Author author){
        return authorService.saveAuthor(author);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Author> updateAuthor(@PathVariable String id,
                                               @RequestBody Author author){
        if(!authorService.existsById(id)){
            return ResponseEntity.notFound().build();
        }
        author.setId(id);
        Author updatedAuthor = authorService.updateAuthor(author);
        return ResponseEntity.ok(updatedAuthor);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAuthor(@PathVariable String id){
        if(!authorService.existsById(id)){
            return ResponseEntity.notFound().build();
        }
        authorService.deleteAuthor(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public List<Author> getAllAuthors(){
        return authorService.getAllAuthors();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Author> getAuthorById(@PathVariable("id") String id){
        Author author = authorService.findAuthorById(id);
        if(author != null){
            return ResponseEntity.ok(author);
        }else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{id}/books")
    public ResponseEntity<List<Book>> getAuthorBooks(@PathVariable("id") String id){
        Author author = authorService.findAuthorById(id);
        if(author != null){
            List<Book> books = author.getBooks();
            return ResponseEntity.ok(books);
        }else {
            return ResponseEntity.notFound().build();
        }
    }
}
