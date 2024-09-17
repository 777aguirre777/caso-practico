package com.java.model.repositories;

import com.java.model.entities.Venta;
import org.springframework.data.repository.CrudRepository;

public interface VentaRepository extends CrudRepository<Venta, String> {
}
