import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Curso = sequelize.define('curso',{
    cursoid:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre:{
        type: Sequelize.STRING(40) 
    },
    precio:{
        type: Sequelize.DECIMAL(10,2)
    },
    duracionsemanas:{
        type: Sequelize.INTEGER
    },
    fechainicio:{
        type: Sequelize.DATE
    },
    fechafin:{
        type: Sequelize.DATE
    }
},
{
    timestamps: false,
    freezeTableName: true,
    allowNull: false
});

export default Curso;