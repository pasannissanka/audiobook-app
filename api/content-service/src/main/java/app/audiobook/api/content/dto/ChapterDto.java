package app.audiobook.api.content.dto;

import app.audiobook.api.content.model.Book;
import app.audiobook.api.content.model.Chapter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;
@Data
@Builder
public class ChapterDto {
    private String id;
    private BookDto book;
    private String name;
    private String section;
    private LocalDateTime time;
    private List<String> audio_urls;
    private List<String> images_s3;

//    public static Chapter chapterToChapter(ChapterDto chapterDto){
//
//    }
}
