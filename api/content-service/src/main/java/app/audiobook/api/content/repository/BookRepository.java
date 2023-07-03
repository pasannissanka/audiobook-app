package app.audiobook.api.content.repository;

import app.audiobook.api.content.model.Book;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends MongoRepository<Book, String> {
    @Query(value = "{'genres.$id': {\"$oid\":?0} }")
    List<Book> findByGenreId(String id);

    @Query(value = "{'authors.$id': {\"$oid\":?0} }")
    List<Book> findByAuthorId(String id);
}
