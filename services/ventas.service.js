const { rejects } = require('assert');
const crypto = require('crypto'); //para crear codigos UUID
const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');

class ventaService {

  constructor() {
    this.ventas = [];
    this.generate(10);
  }

  generate(limite) {
    for (let index = 0; index < limite; index++) {
      this.ventas.push({
        id: crypto.randomUUID(), //da el ID
        nombre: 'Venta n°' + index, //genera los nombres
        // cantidad: 1 + Math.floor(Math.random()*190),
        estaBloqueado: Math.random() < 0.25 //valor boolean
      }); //genera DNI aleatorios entre 0 y 1
    }
  }

  async create (data) {
    const nuevaventa = {
      id: crypto.randomUUID(), //creo productos y le coloco us ID
      ...data //desempaquetado
    };
    const salida = await models.Venta.create(nuevaventa);
    return salida; // devuelvo el nuevo producto en el metodo create
  }

  async find() {
    const salida = await models.Venta.findAll();
    return salida;
  }

  async findOne(id) {
    const vent = await models.Venta.findByPk(id);
    if (!vent) {
      throw boom.notFound('Producto no encontrado');
    }
    // const vent =  this.ventas.find(venta => {
    //   return venta.id === id;
    // });
    // if (!vent) {
    //   throw boom.notFound('Producto no encontrado');
    // }
    return vent;
  }

  async update(id , changes) {
    const vent = await this.findOne(id);
    const salida = await vent.update(changes);
    return salida;
    // const index = this.ventas.findIndex(venta =>{
    //   return venta.id === id;
    // });
    // if (index === -1) {
    //   throw boom.notFound('Producto no encontrado');
    // }
    // const venta = this.ventas[index];
    // this.ventas[index] = {
    //   ...venta,
    //   ...changes
    // };
    // return this.ventas[index];
  }

  async delete(id) {
    const vent = await this.findOne(id);
    await vent.destroy();
    return { id };
    // const index = this.ventas.findIndex(venta =>{
    //   return venta.id === id;
    // });
    // if (index === -1) {
    //   throw boom.notFound('Producto no encontrado');
    // }
    // this.ventas.splice(index, 1);
    // return { id };
  }
}

module.exports = ventaService
