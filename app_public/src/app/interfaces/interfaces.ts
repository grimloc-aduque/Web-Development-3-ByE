export interface Order{
    _id: string;
    fullname: string;
    email: string;
    telefono: number;
    direccion: Direccion;
    productos: Producto[];
    status: string;
    fecha: string;
    __v: number;
}
  
export interface Producto {
    nombre: string;
    cantidad: number;
    _id: string;
}
  
export interface Direccion {
    ciudad: string;
    calle_principal: string;
    calle_secundaria: string;
    numero_casa: string;
    referencia: string;
    _id: string;
}
  