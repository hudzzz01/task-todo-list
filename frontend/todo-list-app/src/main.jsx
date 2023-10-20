import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from './component/pages/Login.jsx';
import TodoPage from './component/pages/Todo';
import CreateTodoPage from './component/pages/CreateTodoPage';
import EditTodoPage from './component/pages/EditTodoPage';
import UserRegisPage from './component/pages/UserRegisPage';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Login/>,
  },
  {
    path:"/todo",
    element: <TodoPage/>,
  },
  {
    path:"/create-todo",
    element: <CreateTodoPage/>
  },
  {
    path:"/edit-todo",
    element: <EditTodoPage/>
  },
  {
    path:"/regis",
    element: <UserRegisPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
