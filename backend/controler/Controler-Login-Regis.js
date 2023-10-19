import LoginRegis from "../model/LoginRegis.js";
import responView from "../view/reponView.js";
import Token from "../auth/jwt.js";
class ControllerLoginRegis{

    static async login(req,res){
        try {
            const data = await LoginRegis.login(req);
            if(data == null){
                return responView.err(res,"username atau password salah")
            }
            //create token login
            const token = Token.createToken(data)

            responView.ok(res,token)
        } catch (error) {
            console.log(error);
            responView.err(res,error);
        }
    }

    static async checkUsername(req,res){
        try {
            const data = await LoginRegis.chekUsername(req);
            if(data != null){
                return responView.err(res,"Username telah digunakan");
            }
            responView.ok(res,`username tersedia`)
        } catch (error) {
            console.log(error);
            responView.err(res,error);
        }
    }

}

export default ControllerLoginRegis;