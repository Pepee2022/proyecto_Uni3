const { VENTAS_TABLE, VentasSchema, Ventas} = require('./ventas.model');

function setupModels(sequelize) {
    Ventas.init(VentasSchema, Ventas.config(sequelize));
}

module.exports = setupModels;
