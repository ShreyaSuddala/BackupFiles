package com.testing.controller;

import com.testing.Entity.Book;
import com.testing.Repository.BookRepo;
import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/books")
public class BookController {

    @Autowired
    private BookRepo bookRepo;

    @GetMapping()
    public List<Book> getAllBookRecords(){
        return bookRepo.findAll();
    }
    @GetMapping(value = "{bookId}")
    public ResponseEntity<Book> getBookById(@PathVariable(value = "bookId") Long bookId) {
        Optional<Book> book = bookRepo.findById(bookId);
        if (book.isPresent()) {
            return ResponseEntity.ok(book.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
    @PostMapping
    public Book createBookRecord(@RequestBody @Valid Book bookRecord){
        return bookRepo.save(bookRecord);
    }

    @PutMapping
    public ResponseEntity<Book> updateBookRecord(@RequestBody @Valid Book bookRecord) {
        if (bookRecord == null || bookRecord.getBookId() == null) {
            throw new EntityNotFoundException("book record or bookId must not be null");
        }
        Optional<Book> optionalBook = bookRepo.findById(bookRecord.getBookId());
        if (!optionalBook.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        Book existingbookRecord = optionalBook.get();
        existingbookRecord.setBookName(bookRecord.getBookName());
        existingbookRecord.setSummary(bookRecord.getSummary());
        existingbookRecord.setRating(bookRecord.getRating());
        return ResponseEntity.ok(bookRepo.save(existingbookRecord));
    }

}
