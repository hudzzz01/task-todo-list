import TabelType from "../DBconnection/model/TabelType.js";

class Type {
    constructor(nama,idTodo){
        this.nama = nama;
        this.idTodo = idTodo;
    }

    static async createType(req){
        try {
            let data = req.body

            const typeInstance = await TabelType.create({
                name : data.nama,
                todoId : data.idTodo,
            })

            console.log(typeInstance);
            return typeInstance
            
            
        } catch (error) {
            console.log(error)
            return "err kesalahan mengambil data List" ;
        }
    }

    static async readType(){
        try {
            return await TabelType.findAll();    
            
        } catch (error) {
            console.log(error)
            return "err kesalahan mengambil data List";    
            
        }

    }

    
    static async updateType(req){
        try {
            let data = req.body
            //console.log(data)
            //const todo = new Todo(data.id,data.title,data.description,data.type);
            
            const updateTypeInstance = await TabelType.update({ 
                name : data.name,
                todoId : data.description,
             }, {
                where: {
                  id: data.id
                }
              });

            console.log(updateTypeInstance);
            return updateTypeInstance
            
            
        } catch (error) {
            console.log(error)
            return "err kesalahan mengambil data List" ;
        }

    }


    static async deleteTodo(req){
        try {
            let data = req.body;
            const deleteType = await TabelType.destroy({
                where: {
                  id: data.id                }
              });
            
            //console.log(deleteList);
            return deleteType;
            
        } catch (error) {
            console.log(error)
            return "err kesalahan mengambil data List" ;
        }
    }

}

export default Type;