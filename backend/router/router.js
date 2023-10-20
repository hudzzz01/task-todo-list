import express from "express";
import ControllerTodo from "../controler/Controller-todo.js";
import ControllerUser from "../controler/Controler-User.js";
import ControllerType from "../controler/Controller-type.js";
import ControllerLoginRegis from "../controler/Controler-Login-Regis.js";
import cors from "cors";
const router = express.Router();
router.use(cors(
    {
        origin:'*'
    }
))
//todo CRUD
router.get("/todo-list",async(req,res)=>{
    ControllerTodo.readTodo(req,res);
})
router.get("/todo-list-id",async(req,res)=>{
    ControllerTodo.readTodoById(req,res);
})
router.get("/todo-list-user",(req,res)=>{
    ControllerTodo.readUserTodo(req,res);
})
router.post("/todo-list",async(req,res)=>{
    ControllerTodo.createTodo(req,res);
})
router.put("/todo-list",async(req,res)=>{
    ControllerTodo.updateTodo(req,res);
})
router.delete("/todo-list",async(req,res)=>{
    ControllerTodo.deleteTodo(req,res);
})


//CRUD users
router.get("/users",(req,res)=>{
    ControllerUser.readUser(req,res);
})
router.post("/user",(req,res)=>{
    ControllerUser.createUser(req,res);
})
router.put("/user",(req,res)=>{
    ControllerUser.updateUser(req,res);
})
router.delete("/user",(req,res)=>{
    ControllerUser.deleteUser(req,res);
})

//CRUD type
router.get("/type",(req,res)=>{
    ControllerType.readType(req,res);
})
router.post("/type",(req,res)=>{
    ControllerType.createType(req,res);
})
router.put("/type",(req,res)=>{
    ControllerType.updateType(req,res);
})
router.delete("/type",(req,res)=>{
    ControllerType.deleteType(req,res);
})

//Login
router.get("/login",(req,res)=>{
    ControllerLoginRegis.login(req,res);
})

//check username
router.get("/checkUsername",(req,res)=>{
    ControllerLoginRegis.checkUsername(req,res);
})



export default router;