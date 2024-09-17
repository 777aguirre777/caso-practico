package com.java.wslibro;

import com.java.model.entities.Libro;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient(name = "java-libros")
public interface LibroFeignClient {
    @GetMapping("/listarLibros")
    public List<Libro> getLibros();
    @GetMapping("/libro/{id}")
    public Libro getLibro(@PathVariable Long id);
    @PutMapping("/libro/actualizar")
    public Libro actualizarLibro(@RequestBody Libro libro);
}
