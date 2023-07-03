package app.audiobook.api.content.repository;

import app.audiobook.api.content.model.Chapter;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChapterRepository extends MongoRepository<Chapter, String> {
}
