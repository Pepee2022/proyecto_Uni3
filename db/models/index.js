const { VENTAS_TABLE, ventasSchema, Ventas} = require('./ventas.model');
const { TIPOVENTA_TABLE, tipoVentaSchema, TipoVenta} = require('./tipoVenta.model');

function setupModels(sequelize) {
    Ventas.init(ventasSchema, Ventas.config(sequelize));
    TipoVenta.init(tipoVentaSchema, TipoVenta.config(sequelize));
    Ventas.associate(sequelize.models);
}

module.exports = setupModels;
