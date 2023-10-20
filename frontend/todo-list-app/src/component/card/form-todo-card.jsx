import "../../style/Style.css"
import { useState } from "react";
import axios from "axios";
export default function FormTodoCard(){
    const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: '',
    
  });

  const handleKembali = ()=>{
    window.location.href = "/todo"
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5hbWEiOiJpZmFoIiwidXNlcm5hbWUiOiJodWR6YSIsInJvbGUiOiJhZG1pbiIsImlkIjoiNWZhNDc2ZDYtMGEzNi00Y2RhLWE0ZTItYmFhNjUzY2I0MTU2In0sImlhdCI6MTY5Nzc2NjcwNiwiZXhwIjoxNjk3NzcwMzA2fQ.GZ-GeMaORGG_LyhKxZc9hrOTamrawwM4-YdaHkvJdCo";

        const response = await axios.post('http://localhost:5000/todo-list', formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      console.log('Response from server:', response.data);
      if(response.data.status == "ok"){
        alert("data berhasil di tambahkan");
        window.location.href = "/todo"
        
      }else{
        alert("data gagal di tambahkan");
        window.location.href = "/create-todo"
      }



      // Lakukan sesuatu dengan respons, seperti menampilkan pesan sukses kepada pengguna.
    } catch (error) {
      console.error('Error:', error);
      // Tangani kesalahan, seperti menampilkan pesan kesalahan kepada pengguna.
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Isi</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="type">type</label>
          <input
            type="text"
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Kirim</button>
        <button onClick={handleKembali}>Kembali</button>
      </form>
    </div>
  );
}

