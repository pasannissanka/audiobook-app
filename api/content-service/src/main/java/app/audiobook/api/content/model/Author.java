package app.audiobook.api.content.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Data
@Document(collection = "authors")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Author {
    @Id
    private String id;
    private String title;
    private String full_name;
    private Date birth_year;
    private Date death_year;
    @DBRef
    private List<Book> books;
}

