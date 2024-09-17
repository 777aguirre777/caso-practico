package com.java.libro.model.repositories;

import com.java.libro.model.entities.Libro;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface LibroRepository extends CrudRepository<Libro, String> {

    @Query("select l from Libro l where l.id=?1")
    public Libro buscarLibro(Long id);

    @Query("select l from Libro l where l.stock>0")
    public List<Libro> findAllLibros();
}
