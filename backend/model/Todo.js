import TabelList from "../DBconnection/model/TabelList.js";

class Todo {
    constructor(title,description,type){
        this.title = title;
        this.description = description;
        this.type = type;
    }

    static async createTodo(req,auth){
        try {
            let data = req.body
            //console.log(data)
            const todo = new Todo(data.title,data.description,data.type,data.idUser);


            const listInstace = await TabelList.create({
                title: data.title,
                description : data.description,
                type : data.type,
                idUser : auth.data.id
            })

          

            console.log(listInstace);
            return listInstace
            
            
        } catch (error) {
            console.log(error)
            return "err kesalahan mengambil data List" ;
        }

        

    }

    static async readTodo(){
        try {
            return await TabelList.findAll();    
            
        } catch (error) {
            console.log(error)
            return "err kesalahan mengambil data List";
            
        }

        
    }

    static async readUserTodo(req){
        try {
            const data = req.body
            return await TabelList.findByPk(data.id)    
            
        } catch (error) {
            console.log(error)
            return "err kesalahan mengambil data List";
            
        }

        
    }

    static async updateTodo(req,auth){
        try {
            let data = req.body
            //console.log(data)
            //const todo = new Todo(data.id,data.title,data.description,data.type);
            
            const updateListInstance = await TabelList.update({ 
                title : data.title,
                description : data.description,
                type : data.type,
                idUser : auth.data.id
             }, {
                where: {
                  id: data.id
                }
              });

            console.log(updateListInstance);
            return updateListInstance
            
            
        } catch (error) {
            console.log(error)
            return "err kesalahan mengambil data List" ;
        }

    }

    static async deleteTodo(req){
        try {
            let data = req.body;
            const deleteList = await TabelList.destroy({
                where: {
                  id: data.id                }
              });
            
            //console.log(deleteList);
            return deleteList;
            
        } catch (error) {
            console.log(error)
            return "err kesalahan mengambil data List" ;
        }
    }

}

export default Todo;