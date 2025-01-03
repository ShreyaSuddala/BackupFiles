package com.testing;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.testing.Entity.Book;
import com.testing.Repository.BookRepo;
import com.testing.controller.BookController;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import java.util.Arrays;
import java.util.Optional;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(BookController.class)
@ExtendWith(MockitoExtension.class)
public class BookControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private BookRepo bookRepo;

    @Autowired
    private ObjectMapper objectMapper;

    private Book book;

    @BeforeEach
    public void setUp() {
        book = new Book();
        book.setBookId(1L);
        book.setBookName("Test Book");
        book.setSummary("This is a test book summary.");
        book.setRating(4);
    }

    @Test
    public void testGetAllBookRecords() throws Exception {
        when(bookRepo.findAll()).thenReturn(Arrays.asList(book));

        mockMvc.perform(get("/books"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].bookName").value(book.getBookName()));
    }

    @Test
    public void testGetBookById() throws Exception {
        when(bookRepo.findById(1L)).thenReturn(Optional.of(book));

        mockMvc.perform(get("/books/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.bookName").value(book.getBookName()));
    }

    @Test
    public void testGetBookById_NotFound() throws Exception {
        when(bookRepo.findById(1L)).thenReturn(Optional.empty());

        mockMvc.perform(get("/books/1"))
                .andExpect(status().isNotFound());
    }

    @Test
    public void testCreateBookRecord() throws Exception {
        when(bookRepo.save(any(Book.class))).thenReturn(book);

        mockMvc.perform(post("/books")
                        .contentType("application/json")
                        .content(objectMapper.writeValueAsString(book)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.bookName").value(book.getBookName()));
    }

    @Test
    public void testUpdateBookRecord() throws Exception {
        when(bookRepo.findById(book.getBookId())).thenReturn(Optional.of(book));
        when(bookRepo.save(any(Book.class))).thenReturn(book);

        book.setBookName("Updated Book Name");

        mockMvc.perform(put("/books")
                        .contentType("application/json")
                        .content(objectMapper.writeValueAsString(book)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.bookName").value(book.getBookName()));
    }

    @Test
    public void testUpdateBookRecord_NotFound() throws Exception {
        when(bookRepo.findById(book.getBookId())).thenReturn(Optional.empty());

        mockMvc.perform(put("/books")
                        .contentType("application/json")
                        .content(objectMapper.writeValueAsString(book)))
                .andExpect(status().isNotFound());
    }
}
