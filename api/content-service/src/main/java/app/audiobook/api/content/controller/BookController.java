package app.audiobook.api.content.controller;

import app.audiobook.api.content.dto.BookDto;
import app.audiobook.api.content.dto.ChapterDto;
import app.audiobook.api.content.model.Book;
import app.audiobook.api.content.model.Chapter;
import app.audiobook.api.content.service.BookService;
import app.audiobook.api.content.service.ChapterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {
    private final BookService bookService;
    private final ChapterService chapterService;

    @Autowired
    public BookController(BookService bookService, ChapterService chapterService) {
        this.bookService = bookService;
        this.chapterService = chapterService;
    }

    @PostMapping
    public Book saveBook(@RequestBody BookDto book) {
        return bookService.saveBook(book);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable String id,
                                           @RequestBody Book book) {
        if (!bookService.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        book.setId(id);
        Book updatedBook = bookService.updateBook(book);
        return ResponseEntity.ok(updatedBook);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBook(@PathVariable String id) {
        if (!bookService.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        bookService.deleteBook(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public List<Book> getAllBooks() {
        return bookService.getAllBooks();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable("id") String id) {
        Book book = bookService.findBookById(id);
        if (book != null) {
            return ResponseEntity.ok(book);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{id}/chapters")
    public ResponseEntity<List<Chapter>> getBookChapters(@PathVariable("id") String id) {
        Book book = bookService.findBookById(id);
        if (book != null) {
            List<Chapter> chapters = book.getChapters();
            return ResponseEntity.ok(chapters);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/{id}/chapters")
    public ResponseEntity<Book> saveChaptersToBook(@PathVariable("id") String id, @RequestBody List<ChapterDto> chapters) {
        Book book = bookService.findBookById(id);
        if (book != null) {
            List<Chapter> newChapters = chapters.stream().map(chapterDto -> chapterService.save(Chapter.builder()
                    .name(chapterDto.getName())
                    .section(chapterDto.getSection())
                    .time(chapterDto.getTime())
                    .audio_urls(chapterDto.getAudio_urls())
                    .images_s3(chapterDto.getImages_s3())
                    .build())).toList();
            List<Chapter> updatedChapters = book.getChapters();
            updatedChapters.addAll(newChapters);
            book.setChapters(updatedChapters);
            Book newBook = bookService.updateBook(book);
            return ResponseEntity.ok(newBook);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @PutMapping("/{bookId}/chapters/{chapterId}")
    public ResponseEntity<Book> updatedChapterInBook(@PathVariable("bookId") String bookId,
                                                     @PathVariable("chapterId") String chapterId,
                                                     @RequestBody Chapter chapter){
        Book book = bookService.findBookById(bookId);
        if(book != null) {
            List<Chapter> chapters = book.getChapters();
            for (Chapter existingChapter : chapters) {
                if (existingChapter.getId().equals(chapterId)) {
                    chapter.setId(chapterId);
                    chapters.set(chapters.indexOf(existingChapter), chapter);
                    Book updatedBook = bookService.updateBook(book);
                    return ResponseEntity.ok(updatedBook);
                }
            }
        }
        return ResponseEntity.notFound().build();

    }
    @DeleteMapping("/{bookId}/chapters/{chapterId}")
    public ResponseEntity<Book> deleteChapterFromBook(@PathVariable("bookId") String bookId,
                                                      @PathVariable("chapterId") String chapterId){
        Book book = bookService.findBookById(bookId);
        if(book != null){
            List<Chapter> chapters = book.getChapters();
            for(Chapter chapter : chapters){
                if(chapter.getId().equals(chapterId)){
                    chapters.remove(chapter);
                    Book updatedBook = bookService.updateBook(book);
                    return ResponseEntity.ok(updatedBook);
                }
            }
        }
        return ResponseEntity.notFound().build();
    }

}
