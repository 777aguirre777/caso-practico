package com.java.service;

import com.java.model.entities.Libro;

import java.util.List;

public interface LibroService {
    public List<Libro> listarLibros();
    public Libro buscarLibro(Long id);
    Libro actualizarLibro(Libro libro);
}
