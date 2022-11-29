const { Model, DataTypes, Sequelize } = require('sequelize');

const VENTAS_TABLE = 'tVentas';

const VentasSchema = {
    id: {
        primaryKey: true,
        type: DataTypes.UUID
    },
    nombre: {
        allowNull: false,
        type: DataTypes.STRING
    },
    createdAt: {
        allowNUll: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
    }
};

class Ventas extends Model {
    static associate() {

    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: VENTAS_TABLE,
            modelName: 'Venta',
            timestamps: false
        };
    }
}

module.exports = { VENTAS_TABLE, VentasSchema, Ventas};