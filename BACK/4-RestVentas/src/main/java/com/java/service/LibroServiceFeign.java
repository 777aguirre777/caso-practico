package com.java.service;

import com.java.model.entities.Libro;
import com.java.wslibro.LibroFeignClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LibroServiceFeign implements LibroService{

    @Autowired
    LibroFeignClient libroFeignClient;

    @Override
    public List<Libro> listarLibros() {
        return (List<Libro>)libroFeignClient.getLibros();
    }

    @Override
    public Libro buscarLibro(Long id) {
        return libroFeignClient.getLibro(id);
    }

    @Override
    public Libro actualizarLibro(Libro libro) {
        libroFeignClient.actualizarLibro(libro);
        return libro;
    }
}
