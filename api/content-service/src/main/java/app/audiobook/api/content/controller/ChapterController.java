package app.audiobook.api.content.controller;

import app.audiobook.api.content.model.Chapter;
import app.audiobook.api.content.service.ChapterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/chapters")
public class ChapterController {

    @Autowired
    private final ChapterService chapterService;

    public ChapterController(ChapterService chapterService) {
        this.chapterService = chapterService;
    }

    @PostMapping
    public Chapter saveChapter(@RequestBody Chapter chapter){
        return chapterService.save(chapter);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Chapter> updateChapter(@PathVariable String id,
                                                 @RequestBody Chapter chapter){
        if(!chapterService.existsById(id)){
            return ResponseEntity.notFound().build();
        }

        chapter.setId(id);
        Chapter updatedChapter = chapterService.update(chapter);
        return ResponseEntity.ok(updatedChapter);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Chapter> getChapterById(@PathVariable("id") String id){
        Chapter chapter = chapterService.findChapterById(id);
        if(chapter != null){
            return ResponseEntity.ok(chapter);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping
    public List<Chapter> getAllChapters(){
        return chapterService.getAllChapters();
    }



    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteChapter(@PathVariable String id){
        if(!chapterService.existsById(id)){
            return ResponseEntity.notFound().build();
        }

        chapterService.deleteChapter(id);
        return  ResponseEntity.ok().build();
    }


}
