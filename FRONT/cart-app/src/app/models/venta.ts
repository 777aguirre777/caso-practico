export class Venta {
    id!: number;
    cantidad!: number;
    precio!: number;
    valorVenta!: string;
    idLibro!: number;
    fechaRegistro!: Date;
}

export interface saveVenta{
    cantidad?: number;
    precio?: number;
    valorVenta?: number;
    idLibro?: number;

}

export interface responseVenta {
    id?: number;
    cantidad?: number;
    precio?: number;
    valorVenta?: number;
    idLibro?: number;
    fechaRegistro?: Date;
}
