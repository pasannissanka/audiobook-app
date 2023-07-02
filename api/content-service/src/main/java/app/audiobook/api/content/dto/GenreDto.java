package app.audiobook.api.content.dto;

import app.audiobook.api.content.model.Book;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.DBRef;

import java.util.List;
@Data
@Builder
public class GenreDto {

    private String id;
    private String name;
    private List<BookDto> books;
}
