package com.java.libro.service;

import com.java.libro.model.repositories.LibroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.java.libro.model.entities.Libro;
import java.util.List;

@Service
public class LibroServiceImpl implements LibroService{

    @Autowired
    LibroRepository libroRepository;

    @Override
    public List<Libro> listarLibros() {
        return (List<Libro>)libroRepository.findAllLibros();
    }

    @Override
    public Libro buscarLibro(Long id) {
        return libroRepository.buscarLibro(id);
    }

    @Override
    public Libro actualizarLibro(Libro libro) {
        libroRepository.save(libro);
        return libro;
    }
}
