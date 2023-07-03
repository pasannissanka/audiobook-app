package app.audiobook.api.content.service;

import app.audiobook.api.content.model.Genre;

import java.util.List;

public interface GenreService {
    public Genre saveGenre(Genre genre);
    public Genre updateGenre(Genre genre);
    public boolean existsById(String id);
    public boolean deleteGenre(String id);
    public List<Genre> getAllGenres();
    public Genre findGenreById(String id);
}
