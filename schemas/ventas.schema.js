const Joi = require('joi');
const id = Joi.string()
              .uuid();
const nombre = Joi.string()
                  .min(8)
                  .max(40);

const createVentaSchema = Joi.object({
  nombre: nombre.required()
});

const updateVentaSchema = Joi.object({
  nombre: nombre,
});

const getVentaSchema = Joi.object({
  id: id.required()
});

module.exports = { createVentaSchema, updateVentaSchema, getVentaSchema };
