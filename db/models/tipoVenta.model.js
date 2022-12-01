const { Model, DataTypes, Sequelize } = require('sequelize');

const TIPOVENTA_TABLE = 'tipoventa';

const tipoVentaSchema = {
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

class TipoVenta extends Model {
    static associate() {
        
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: TIPOVENTA_TABLE,
            modelName: 'TipoVenta',
            timestamps: false
        };
    }
}

module.exports = { TIPOVENTA_TABLE, tipoVentaSchema, TipoVenta};