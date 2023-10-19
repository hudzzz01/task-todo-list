import Todo from "../model/Todo.js";
import responView from "../view/reponView.js";
import Token from "../auth/jwt.js";
class ControllerTodo{

    static async createTodo(req,res){
        if(!req.headers.authorization){
            return responView.err(res,"token tidak ditemukan");
        }
        const bearer = req.headers.authorization.split("Bearer ")[1];
        const resultAuth = await Token.decodeToken(bearer);
        console.log(resultAuth,bearer)
        if(resultAuth == undefined){
            return responView.err(res,"token tidak ditemukan");
        }
        try {
            const data = await Todo.createTodo(req,resultAuth);
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
        if(!req.headers.authorization){
            return responView.err(res,"token tidak ditemukan");
        }
        const bearer = req.headers.authorization.split("Bearer ")[1];
        const resultAuth = await Token.decodeToken(bearer);
        console.log(resultAuth,bearer)
        if(resultAuth == undefined){
            return responView.err(res,"token tidak ditemukan");
        }
        try {
            const data = await Todo.readTodo()
            console.log(data.slice(0,3))
            if(data.length >0 && data.slice(0,3) == "err"){
                return responView.err(res,data);
            }
            responView.ok(res,data);
        } catch (error) {
            responView.err(res,error);
        }
    }

    static async readUserTodo(req,res){
        if(!req.headers.authorization){
            return responView.err(res,"token tidak ditemukan");
        }
        const bearer = req.headers.authorization.split("Bearer ")[1];
        const resultAuth = await Token.decodeToken(bearer);
        console.log(resultAuth,bearer)
        if(resultAuth == undefined){
            return responView.err(res,"token tidak ditemukan");
        }
        try {
            const data = await Todo.readUserTodo(req)
            console.log(data)

            if(data == null){
                return responView.err(res,data);
            }
            responView.ok(res,data);
        } catch (error) {
            responView.err(res,error);
        }
    }

    static async updateTodo(req,res){
        if(!req.headers.authorization){
            return responView.err(res,"token tidak ditemukan");
        }
        const bearer = req.headers.authorization.split("Bearer ")[1];
        const resultAuth = await Token.decodeToken(bearer);
        console.log(resultAuth,bearer)
        if(resultAuth == undefined){
            return responView.err(res,"token tidak ditemukan");
        }
        try {
            const data = await Todo.updateTodo(req,resultAuth);
            if(data.length >0 && data[0] < 1){
                
                return responView.err(res,"gagal update data");
            }
            responView.ok(res,data);
        } catch (error) {
            console.log(error)
            responView.err(res,error);
        }    
    }

    static async deleteTodo(req,res){
        if(!req.headers.authorization){
            return responView.err(res,"token tidak ditemukan");
        }
        const bearer = req.headers.authorization.split("Bearer ")[1];
        const resultAuth = await Token.decodeToken(bearer);
        console.log(resultAuth,bearer)
        if(resultAuth == undefined){
            return responView.err(res,"token tidak ditemukan");
        }
        try{
            const data = await Todo.deleteTodo(req);
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

export default ControllerTodo;