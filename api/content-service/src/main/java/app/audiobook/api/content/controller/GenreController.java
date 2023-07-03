package app.audiobook.api.content.controller;

import app.audiobook.api.content.model.Book;
import app.audiobook.api.content.model.Genre;
import app.audiobook.api.content.service.BookService;
import app.audiobook.api.content.service.GenreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/genres")
public class GenreController {
    private final GenreService genreService;
    private final BookService bookService;

    @Autowired
    public GenreController(GenreService genreService, BookService bookService) {

        this.genreService = genreService;
        this.bookService = bookService;
    }

    @PostMapping
    public Genre saveGenre(@RequestBody Genre genre){
        return  genreService.saveGenre(genre);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Genre> updateGenre(@PathVariable String id,
                                             @RequestBody Genre genre){
        if(!genreService.existsById(id)){
            return ResponseEntity.notFound().build();
        }
        genre.setId(id);
        Genre updatedGenre = genreService.updateGenre(genre);
        return ResponseEntity.ok(updatedGenre);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGenre(@PathVariable String id){
        if(!genreService.existsById(id)){
            return ResponseEntity.notFound().build();
        }
        genreService.deleteGenre(id);
        return  ResponseEntity.ok().build();
    }

    @GetMapping
    public List<Genre> getAllGenres(){
        return genreService.getAllGenres();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Genre> getGenreById(@PathVariable("id") String id) {
        Genre genre = genreService.findGenreById(id);
        if (genre != null) {
            return ResponseEntity.ok(genre);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{id}/books")
    public ResponseEntity<List<Book>> getBooksByGenre(@PathVariable("id") String id){
        Genre genre = genreService.findGenreById(id);
        if(genre != null){
            List<Book> books = bookService.getBooksByGenre(id);
            return ResponseEntity.ok(books);
        }else {
            return ResponseEntity.notFound().build();
        }
    }

}
