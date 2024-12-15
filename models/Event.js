class Event {
    constructor(nombre, descripcion, fecha, ubicacion, tipoDeporte, organizador) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.ubicacion = ubicacion;
        this.tipoDeporte = tipoDeporte;
        this.organizador = organizador;
    }
}

module.exports = Event;
