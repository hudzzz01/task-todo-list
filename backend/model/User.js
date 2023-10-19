import CryptoJS from "crypto-js";
import TabelUser from "../DBconnection/model/TabelUser.js";

class User {
    constructor(nama,username,password){
        this.nama = nama;
        this.username = username;
        this.password = password;
    }

   
    static async createUser(req){
        try {
            let data = req.body

            //hasing password
            let password = CryptoJS.SHA256(data.password+"salt HuDzAiFah").toString();

            const userInstance = await TabelUser.create({
                nama : data.nama,
                username : data.username,
                password : password,
                role : data.role
            })

            console.log(userInstance);
            return userInstance
            
            
        } catch (error) {
            console.log(error)
            return "err kesalahan mengambil data List" ;
        }
    }

    static async readUser(){
        try {
            return await TabelUser.findAll();    
            
        } catch (error) {
            console.log(error)
            return "err kesalahan mengambil data user";    
            
        }

    }

    
    static async updateUser(req){
        try {
            let data = req.body
            //console.log(data)
            //const todo = new Todo(data.id,data.title,data.description,data.type);
            
            const updateUserInstance = await TabelUser.update({ 
                nama : data.nama,
                username : data.username,
                password : data.password
             }, {
                where: {
                  id: data.id
                }
              });

            console.log(updateUserInstance);
            return updateUserInstance
            
            
        } catch (error) {
            console.log(error)
            return "err kesalahan mengambil data List" ;
        }

    }

    
    static async deleteUser(req){
        try {
            let data = req.body;
            const deleteUser = await TabelUser.destroy({
                where: {
                  id: data.id                }
              });
            
            //console.log(deleteList);
            return deleteUser;
            
        } catch (error) {
            console.log(error)
            return "err kesalahan mengambil data User" ;
        }
    }



}

export default User;