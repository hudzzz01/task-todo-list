import TodoCard from "../card/Todo-Card";
import Button from "../element/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import bubbleSortTitleAZ from "../../service/bubbleShortAZ";
import bubbleSortTitleZA from "../../service/bubbleShortZA";
import Input from "../element/input";

export default function TodoPage(){
    const [todoData,setTodoData] = useState([]);
    const [userData,setUserData] = useState([]);


    async function getDataTodo(token){
        try {
            let data = await axios.request({
                headers: {
                    Authorization: `Bearer ${token}`
                  },
                  method: "get",
                  url: `http://localhost:5000/todo-list-user`
            });
            data = data.data.data.dataTodo

            //merubah type ke bentuk array
            let typeArr = [];
            for(let i=0; i<data.length; i++){
                let temp = "";
                for(let j=0; j<data[i].type.length; j++){
                    temp += data[i].type[j]
                    if(data[i].type[j+1] == ","){
                        typeArr.push(temp);
                        temp = ""
                        j++;
                    }
                    if(j == data[i].type.length-1){
                        typeArr.push(temp);
                    }
                }
                data[i]["type"]=typeArr;
                typeArr=[];
            }
            console.log(data)
            
            
            setTodoData(data);
        } catch (error) {
           console.log(error) 
        }
    }

    async function getDataUser(token){
        try {
            const data = await axios.request({
                headers: {
                    Authorization: `Bearer ${token}`
                  },
                  method: "get",
                  url: `http://localhost:5000/todo-list-user`
            });


            setUserData(data.data.data.dataUser);
        } catch (error) {
           console.log(error) 
        }
    }

    useEffect(()=>{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5hbWEiOiJpZmFoIiwidXNlcm5hbWUiOiJodWR6YSIsInJvbGUiOiJhZG1pbiIsImlkIjoiNWZhNDc2ZDYtMGEzNi00Y2RhLWE0ZTItYmFhNjUzY2I0MTU2In0sImlhdCI6MTY5Nzc2NjcwNiwiZXhwIjoxNjk3NzcwMzA2fQ.GZ-GeMaORGG_LyhKxZc9hrOTamrawwM4-YdaHkvJdCo"
        getDataTodo(token);
        getDataUser(token);

    },[])

    useEffect(()=>{
        setTodoData(todoData)
    },[todoData])


    const handleSortingAZ = ()=>{
        let sorted = bubbleSortTitleAZ(todoData);
        console.log(sorted)
        setTodoData(sorted)
    }

    const handleSortingZA = ()=>{
        let sorted = bubbleSortTitleZA(todoData);
        console.log(sorted)
    }

    const handleFiltering = ()=>{
        let newData = []
        for(let i =0; i<todoData.length; i++){
            for(let j=0; j < todoData[i].type.length; j++){
                if("makan" == todoData[i].type[j]){
                    newData.push(todoData[i])
                }
            }
        }
        console.log(newData)
    }

    const handleCari = ()=>{
        const diCari = "beli";
        const ketemu = [];
        for(let i =0; i<todoData.length; i++){
            const isiJudul = todoData[i].title;
            for(let j=0; j<isiJudul.length; j++){
                let temp = "";
                for(let k=0; k<diCari.length; k++){
                    if(isiJudul[j+k] == undefined){
                        break;
                    }
                    temp += isiJudul[j+k]
                }
                //console.log(temp)
                if(temp == diCari){
                    ketemu.push(todoData[i])
                }
                temp = ""
            }
        }

        console.log(ketemu)

        

    }

    const buatTodo = ()=>{
        window.location.href = "/create-todo"
    }

    return(
        <>
            <div>
                <div> Selamat Datang user @{userData.username}  <Button text="tes filter" click={handleFiltering} /> <Button text="Sorting Title A-Z" click={handleSortingAZ} /> <Button text="Sorting Title Z-A" click={handleSortingZA} /> <Input id="cari" placeHolder="cari di title"/> <Button text="cari" click={handleCari} /> <Button text="buatTodo" click={buatTodo} /> </div>
                <br/>
                <div>Berikut ini adalah list todo kamu</div>
                {todoData.map((todo)=>(
                    <TodoCard key={todo.id} title={todo.title} description={todo.description} type={todo.type} createdAt={todo.createdAt} updatedAt={todo.updatedAt} handleFiltering={handleFiltering} id={todo.id} />
                ))}
            </div>
            
        </>
    )
}