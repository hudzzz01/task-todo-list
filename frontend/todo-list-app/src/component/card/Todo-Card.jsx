import "../../style/Style.css";
import Button from "../element/Button";
import H1 from "../element/Text";
import Type from "../element/Type";
import { useState } from "react";
import axios from "axios";

export default function TodoCard(promp){
    //console.log(promp.type)
    const [formData] = useState({
        id : promp.id,
      });

    const handleEdit = async ()=>{

        
    }

    const handleDelete = async()=>{
        console.log(formData);
        try {
            let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5hbWEiOiJpZmFoIiwidXNlcm5hbWUiOiJodWR6YSIsInJvbGUiOiJhZG1pbiIsImlkIjoiNWZhNDc2ZDYtMGEzNi00Y2RhLWE0ZTItYmFhNjUzY2I0MTU2In0sImlhdCI6MTY5Nzc2ODk1NCwiZXhwIjoxNjk3NzcyNTU0fQ.6e7eyFeItwjtuVuAVrdLkjuFPc34SuX8dHHIBMRl-Ko";
            
            const response = await axios.delete('http://localhost:5000/todo-list', formData, {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });


          console.log('Response from server:', response.data);
          if(response.data.status == "ok"){
            alert("data berhasil di tambahkan");
            window.location.href = "/todo"
            
          }else{
            alert("data gagal di hapus " + response.data.err);
            window.location.href = "/todo"
          }
    
    
    
          // Lakukan sesuatu dengan respons, seperti menampilkan pesan sukses kepada pengguna.
        } catch (error) {
          console.error('Error:', error);
          // Tangani kesalahan, seperti menampilkan pesan kesalahan kepada pengguna.
        }
    }
    
    return(
    <><div id="todo-card"> 
        <input type="hidden" value={promp.id} />
        <div> <H1 text={"Title : " + promp.title}/></div>
        <div> <H1 text={"Deskripsi : " + promp.description}/> </div>
        <div> <H1 text={"Dibuat : " + promp.createdAt}/></div>
        <div> <H1 text={"Diupdate :" + promp.updatedAt}/></div>
        <div id="Type-parent">
            {promp.type.map((type,index)=>(
                <Type key={index} text={type} onClick={promp} />
            ))}
        </div>
        <div>
            <Button text="edit" click={handleEdit}/>
            <Button text="delete" click={handleDelete} />
        </div>
        
    </div>
        
    </>)
}