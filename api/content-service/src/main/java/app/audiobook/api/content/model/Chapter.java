package app.audiobook.api.content.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Document(collation = "chapters")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Chapter {
    @Id
    private String id;
    @DBRef
    private Book book;
    private String name;
    private String section;
    private LocalDateTime time;
    private List<String> audio_urls;
    private List<String> images_s3;

}
