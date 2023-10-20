import { DataTypes,Sequelize } from "sequelize";
import db from "../database/conn.js";

const TabelUser = db.define('user',{
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
    nama: {
        type: DataTypes.STRING
        
      },
    username:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    role:{
        type: DataTypes.STRING,
        defaultValue : "warga"
    },

},{
    freezeTableName: true
}

)

TabelUser.sync();

export default TabelUser;