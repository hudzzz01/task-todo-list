import Type from "../model/Type.js";
import responView from "../view/reponView.js";

class ControllerType{
    static async readType(req,res){
        const data = await Type.readType()
        res.json({data : data});
    }

    static async createType(req,res){
        try {
            const data = await Type.createType(req);
            if(data.length >0 && data.slice(0,3) == "err"){
                console.log(data.slice(0,3))
                return responView.err(res,data);
            }
            responView.ok(res,data);
        } catch (error) {
            console.log(error)
            responView.err(res,error);
        }      
    }


    static async readTodo(req,res){
        try {
            const data = await Type.readType()
            console.log(data.slice(0,3))
            if(data.length >0 && data.slice(0,3) == "err"){
                return responView.err(res,data);
            }
            responView.ok(res,data);
        } catch (error) {
            responView.err(res,error);
        }
    }

    static async updateType(req,res){
        try {
            const data = await Type.updateType(req);
            if(data.length >0 && data[0] < 1){
                
                return responView.err(res,"gagal update data");
            }
            responView.ok(res,data);
        } catch (error) {
            console.log(error)
            responView.err(res,error);
        }    
    }

    static async deleteType(req,res){
        try{
            const data = await Type.deleteTodo(req);
            if( data < 1){
                console.log(data)
                return responView.err(res,data);
            }
            responView.ok(res,data);
        } catch (error) {
            console.log(error)
            responView.err(res,error);
        }    
    }
}

export default ControllerType;