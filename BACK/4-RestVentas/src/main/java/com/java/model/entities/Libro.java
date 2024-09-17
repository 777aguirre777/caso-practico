package com.java.model.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;

import java.util.Date;

public class Libro {
    private Long id;
    private String nombre;
    private String codigoLibro;
    private String isbn;
    private Double price;
    private Integer stock;
    private Date fechaRegistro;
    public Libro() {
    }

    public Libro(Long id, String nombre, String codigoLibro, String isbn, Double price, Integer stock, Date fechaRegistro) {
        this.id = id;
        this.nombre = nombre;
        this.codigoLibro = codigoLibro;
        this.isbn = isbn;
        this.price = price;
        this.stock = stock;
        this.fechaRegistro = fechaRegistro;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCodigoLibro() {
        return codigoLibro;
    }

    public void setCodigoLibro(String codigoLibro) {
        this.codigoLibro = codigoLibro;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getStock() {
        return stock;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }

    public Date getFechaRegistro() {
        return fechaRegistro;
    }

    public void setFechaRegistro(Date fechaRegistro) {
        this.fechaRegistro = fechaRegistro;
    }
}
