package app.audiobook.api.content.service;

import app.audiobook.api.content.model.Chapter;

import java.util.List;
import java.util.Optional;

public interface ChapterService {

    public Chapter save(Chapter chapter);
    public Chapter update(Chapter chapter);
    public boolean existsById(String id);
    public boolean deleteChapter(String id);
    public List<Chapter> findAll();
    public Chapter findChapterById(String id);




}
