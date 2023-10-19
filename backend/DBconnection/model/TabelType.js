import { DataTypes,Sequelize } from "sequelize";
import db from "../database/conn.js";

const TabelType = db.define('type',{
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
    name: {
        type: DataTypes.STRING
        
      },
    todoId: {
        type: DataTypes.STRING
    }

},{
    freezeTableName: true
}

)

TabelType.sync();

export default TabelType;