package app.audiobook.api.content.dto;

import app.audiobook.api.content.model.Author;
import app.audiobook.api.content.model.Chapter;
import app.audiobook.api.content.model.Genre;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Builder;
import lombok.Data;



import java.util.List;
@Data
@Builder
public class BookDto {


    private String id;
    private String name;
    private String language;
    private String description;
    private List<String> covers_s3;
    private List<AuthorDto> authors;
    private List<GenreDto> genres;
    private List<ChapterDto> chapters;

}
