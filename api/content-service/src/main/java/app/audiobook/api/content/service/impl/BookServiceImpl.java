package app.audiobook.api.content.service.impl;

import app.audiobook.api.content.dto.BookDto;
import app.audiobook.api.content.dto.ChapterDto;
import app.audiobook.api.content.model.Author;
import app.audiobook.api.content.model.Book;
import app.audiobook.api.content.model.Chapter;
import app.audiobook.api.content.model.Genre;
import app.audiobook.api.content.repository.BookRepository;
import app.audiobook.api.content.repository.ChapterRepository;
import app.audiobook.api.content.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BookServiceImpl implements BookService {

    private final BookRepository bookRepository;
    private final ChapterRepository chapterRepository;

    @Autowired
    public BookServiceImpl(BookRepository bookRepository, ChapterRepository chapterRepository) {
        this.bookRepository = bookRepository;
        this.chapterRepository = chapterRepository;
    }

    @Override
    public Book saveBook(BookDto book) {
        List<Chapter> newChapters = book.getChapters().stream().map(chapterDto -> chapterRepository.save(Chapter.builder()
                .name(chapterDto.getName())
                .section(chapterDto.getSection())
                .time(chapterDto.getTime())
                .audio_urls(chapterDto.getAudio_urls())
                .images_s3(chapterDto.getImages_s3())
                .build())).toList();
        Book newBook = Book.builder()
                .name(book.getName())
                .language(book.getLanguage())
                .description(book.getDescription())
                .covers_s3(book.getCovers_s3())
                .authors(book.getAuthors().stream().map(authorDto -> Author.builder().id(authorDto.getId()).build()).collect(Collectors.toList()))
                .genres(book.getGenres().stream().map(genreDto -> Genre.builder().id(genreDto.getId()).build()).collect(Collectors.toList()))
                .chapters(newChapters)
                .build();
        return bookRepository.save(newBook);
    }

    @Override
    public Book updateBook(Book book) {
        Book existingBook = bookRepository.findById(book.getId()).orElse(null);
        if(existingBook != null) {
            existingBook.setName(book.getName());
            existingBook.setLanguage(book.getLanguage());
            existingBook.setDescription(book.getDescription());
            existingBook.setCovers_s3(book.getCovers_s3());
            List<Author> authors = book.getAuthors().stream().map(authorDto ->
                    Author.builder()
                            .id(authorDto.getId())
                            .build()).toList();
            existingBook.setAuthors(authors);
            List<Genre> genres = book.getGenres().stream().map(genreDto ->
                    Genre.builder()
                            .id(genreDto.getId())
                            .build()).toList();
            existingBook.setGenres(genres);
            List<Chapter> updatedChapters = book.getChapters().stream()
                    .map(chapterDto -> {
                        Chapter existingChapter = existingBook.getChapters().stream()
                                .filter(chapter -> chapter.getId().equals(chapterDto.getId()))
                                .findFirst().orElse(null);
                        if (existingChapter != null) {
                            existingChapter.setName(chapterDto.getName());
                            existingChapter.setSection(chapterDto.getSection());
                            existingChapter.setTime(chapterDto.getTime());
                            existingChapter.setAudio_urls(chapterDto.getAudio_urls());
                            existingChapter.setImages_s3(chapterDto.getImages_s3());

                            return existingChapter;
                        }else {
                            return chapterRepository.save(Chapter.builder()
                                            .name(chapterDto.getName())
                                            .section(chapterDto.getSection())
                                            .time(chapterDto.getTime())
                                            .audio_urls(chapterDto.getAudio_urls())
                                            .images_s3(chapterDto.getImages_s3())
                                            .build());
                        }

                    }).toList();
            existingBook.setChapters(updatedChapters);
            return bookRepository.save(existingBook);
        }
        return null;
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

    @Override
    public List<Book> getBooksByGenre(String id){
        return bookRepository.findByGenreId(id);
    }


}
