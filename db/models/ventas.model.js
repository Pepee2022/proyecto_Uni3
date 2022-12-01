const { Model, DataTypes, Sequelize } = require('sequelize');
const { TIPOVENTA_TABLE } = require('./tipoVenta.model');

const VENTAS_TABLE = 'venta';

const ventasSchema = {
    id: {
        primaryKey: true,
        type: DataTypes.UUID
    },
    nombre: {
        allowNull: false,
        type: DataTypes.STRING
    },
    // tipoventaId: {
    //     field: 'tipoventa_id',
    //     allowNull: true,
    //     type: DataTypes.UUID,
    //     references: {
    //         model: TIPOVENTA_TABLE,
    //         key: 'id'
    //     },
    //     onUpdate: 'CASCADE',
    //     onDelete: 'SET NULL'
    // },
    createdAt: {
        allowNUll: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
    }
};

class Ventas extends Model {
    static associate(models) {
        this.belongsTo(models.TipoVenta, { as: 'tipoventa' });
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

module.exports = { VENTAS_TABLE, ventasSchema, Ventas};