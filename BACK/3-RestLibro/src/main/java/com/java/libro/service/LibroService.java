package com.java.libro.service;

import com.java.libro.model.entities.Libro;

import java.util.List;

public interface LibroService {
    public List<Libro> listarLibros();
    public Libro buscarLibro(Long id);
    Libro actualizarLibro(Libro libro);
}
