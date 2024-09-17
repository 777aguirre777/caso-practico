package com.java.service;

import com.java.model.entities.Venta;
import com.java.model.repositories.VentaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VentaServiceImpl implements VentaService {

    @Autowired
    VentaRepository ventaRepository;

    @Override
    public void registrarVenta(Venta venta) {
        ventaRepository.save(venta);
    }

}
