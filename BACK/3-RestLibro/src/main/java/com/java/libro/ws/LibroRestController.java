package com.java.libro.ws;

import com.java.libro.model.entities.Libro;
import com.java.libro.service.LibroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class LibroRestController {

    @Autowired
    LibroService libroService;

    @GetMapping(value = "/healthcheckLibro", produces = "application/json; charset=utf-8")
    public String getHealthCheck()
    {
        return "{ \"todoOk\" : true }";
    }

    @GetMapping("/listarLibros")
    public List<Libro> getLibros(){
        List<Libro> lista = libroService.listarLibros();
        return lista;
    }

    @GetMapping("/libro/{id}")
    public Libro getLibro(@PathVariable Long id) {
//        Cliente cliente = clienteService.buscarCliente(id);
        return libroService.buscarLibro(id);
    }

    @PutMapping("/libro/actualizar")
    public Libro actualizarLibro(@RequestBody Libro libro) {
        return  libroService.actualizarLibro(libro);
    }
}
