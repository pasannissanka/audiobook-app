package app.audiobook.api.content.service.impl;

import app.audiobook.api.content.model.Chapter;
import app.audiobook.api.content.repository.ChapterRepository;
import app.audiobook.api.content.service.ChapterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ChapterServiceImpl implements ChapterService {

    private final ChapterRepository chapterRepository;

    @Autowired
    public ChapterServiceImpl(ChapterRepository chapterRepository) {
        this.chapterRepository = chapterRepository;
    }

    @Override
    public Chapter save(Chapter chapter) {
        return chapterRepository.save(chapter);
    }

    @Override
    public Chapter update(Chapter chapter) {
        return chapterRepository.save(chapter);
    }


    @Override
    public boolean existsById(String id) {
        return chapterRepository.existsById(id);
    }

    @Override
    public boolean deleteChapter(String id) {
        if(chapterRepository.existsById(id)){
            chapterRepository.deleteById(id);
            return true;
        }
        return false;
    }
    @Override
    public List<Chapter> getAllChapters() {
        return chapterRepository.findAll();
    }

    @Override
    public Chapter findChapterById(String id) {
        return  chapterRepository.findById(id).orElse(null);
    }

}
