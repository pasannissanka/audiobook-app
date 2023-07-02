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
@Document(collection = "genres")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Genre {
    @Id
    private String id;
    private String name;
    @DBRef
    private List<Book> books;
}
