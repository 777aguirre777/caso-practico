export class Libro {
    id!: number;
    name!: string;
    codigoLibro!: string;
    isbn!: string;
    price!: number;
    stock!: number;
    fechaRegistro!: Date;
}

export interface responseLibros {
    codigoLibro:   string;
    fechaRegistro: Date;
    id:            number;
    isbn:          string;
    nombre:        string;
    price:        number;
    stock:         number;
}
   