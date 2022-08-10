export class persona {
    id?: number;
    nombre: string;
    apellido: string;
    img: string;
    descripcion: string;
    puesto: string;

    constructor (nombre: string, apellido: string, img: string, descripcion: string, puesto: string) {
        this.nombre = nombre;
        this.apellido =apellido;
        this.img = img;
        this.descripcion = descripcion;
        this.puesto = puesto;
    }
}