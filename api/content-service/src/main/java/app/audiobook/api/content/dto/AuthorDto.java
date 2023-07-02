package app.audiobook.api.content.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Builder;
import lombok.Data;

import java.util.Date;
import java.util.List;
@Data
@Builder
public class AuthorDto {

    private String id;
    private String title;
    private String full_name;
    private Date birth_year;
    private Date death_year;
    private List<BookDto> books;
}
