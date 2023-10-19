import CryptoJS from "crypto-js";
import TabelUser from "../DBconnection/model/TabelUser.js"
class LoginRegis{
    static async login(req){
        const data = req.body;
        let password = CryptoJS.SHA256(data.password+"salt HuDzAiFah").toString();
        const cekUsernamePassword = await TabelUser.findOne({ 
            where : {
            username : data.username,
            password : password
            }
        })

        const {id,nama,username,role} = cekUsernamePassword

        return {
            nama : nama,
            username : username,
            role : role,
            id : id
        };
    }
    static async chekUsername(req){
        const data = req.body;
        const cekUsername = TabelUser.findOne({
            where:{
                username : data.username
            }
        })

        return cekUsername;
    }
}

export default LoginRegis;