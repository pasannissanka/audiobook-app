package app.audiobook.api.content.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document(collection ="books")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Book {
    @Id
    private String id;
    private String name;
    private String language;
    private String description;
    private List<String> covers_s3;
    @DBRef
    private List<Author> authors;
    @DBRef
    private List<Genre> genres;
    @DBRef
    private List<Chapter> chapters;


}
