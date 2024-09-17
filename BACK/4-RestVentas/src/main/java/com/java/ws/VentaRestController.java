package com.java.ws;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.java.model.entities.Libro;
import com.java.model.entities.Venta;
import com.java.service.LibroService;
import com.java.service.VentaService;
import com.java.util.ProductorKafka;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.Random;

@RestController
@CrossOrigin
public class VentaRestController {

    @Autowired
    VentaService ventaService;
    @Autowired
    LibroService libroService;
    @Autowired
    private ProductorKafka productorKafka;

    @GetMapping(value = "/healthcheck", produces = "application/json; charset=utf-8")
    public String getHealthCheck() {
        return "{ \"todoOk\" : true }";
    }

    @PostMapping("/addVenta")
    public Venta addVenta(@RequestBody Venta newVenta) {
        String respuesta = "Proceso exitoso";
        try {
            Libro libro = libroService.buscarLibro(newVenta.getIdLibro());
            if(newVenta.getCantidad() <= libro.getStock())
            {
                Long id = (long) new Random().nextInt();
                Venta venta = new Venta(id, newVenta.getCantidad(), newVenta.getPrecio(), newVenta.getValorVenta(), newVenta.getIdLibro(), new Date());
                ventaService.registrarVenta(venta);
                libro.setStock(libro.getStock()-newVenta.getCantidad());
                libroService.actualizarLibro(libro);
                ObjectMapper mapper = new ObjectMapper();
                String json = mapper.writeValueAsString(venta);
//                productorKafka.send(json);
                return venta;
            } else {
                return new Venta();
            }
        } catch (Exception e) {
            respuesta = "Error desconocido";
            return new Venta();//falta agregar el error
        }
    }
}
