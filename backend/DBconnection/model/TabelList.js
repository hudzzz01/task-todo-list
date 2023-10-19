import { DataTypes,Sequelize } from "sequelize";
import db from "../database/conn.js";

const TabelList = db.define('list',{
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
    title: {
        type: DataTypes.STRING
      },
    description:{
        type: DataTypes.STRING
    },
    idUser: {
       type : DataTypes.STRING,
    }

},{
    freezeTableName: true
}

)

TabelList.sync();

export default TabelList;