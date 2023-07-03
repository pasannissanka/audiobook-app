package app.audiobook.api.content.service.impl;

import app.audiobook.api.content.model.Genre;
import app.audiobook.api.content.repository.GenreRepository;
import app.audiobook.api.content.service.GenreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GenreServiceImpl implements GenreService {
    private final GenreRepository genreRepository;

    @Autowired
    public GenreServiceImpl(GenreRepository genreRepository) {
        this.genreRepository = genreRepository;
    }

    @Override
    public Genre saveGenre(Genre genre) {
        return genreRepository.save(genre);
    }

    @Override
    public Genre updateGenre(Genre genre) {
        return genreRepository.save(genre);
    }

    @Override
    public boolean existsById(String id) {
        return genreRepository.existsById(id);
    }

    @Override
    public boolean deleteGenre(String id) {
        if(genreRepository.existsById(id)){
            genreRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public List<Genre> getAllGenres() {
        return genreRepository.findAll();
    }

    @Override
    public Genre findGenreById(String id) {
        return genreRepository.findById(id).orElse(null);
    }
}
