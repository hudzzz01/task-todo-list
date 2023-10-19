import User from "../model/User.js";
import responView from "../view/reponView.js";
import Token from "../auth/jwt.js";
class ControllerUser{

    static async createUser(req,res){
        try {
            const data = await User.createUser(req);
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


    static async readUser(req,res){
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
            const data = await User.readUser()
            console.log(data.slice(0,3))
            if(data.length >0 && data.slice(0,3) == "err"){
                return responView.err(res,data);
            }
            responView.ok(res,data);
        } catch (error) {
            responView.err(res,error);
        }
    }

    static async updateUser(req,res){
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
            const data = await User.updateUser(req);
            if(data.length >0 && data[0] < 1){
                
                return responView.err(res,"gagal update data");
            }
            responView.ok(res,data);
        } catch (error) {
            console.log(error)
            responView.err(res,error);
        }    
    }

    static async deleteUser(req,res){
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
            const data = await User.deleteUser(req);
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



export default ControllerUser;