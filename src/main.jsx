import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './routes/App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home.jsx'
import CreatePost from './components/CreatePost.jsx'
import Bookmarks from './components/Bookmarks.jsx'
import Profile from './components/Profile.jsx'
import Explore from './components/Explore.jsx'

const router = createBrowserRouter([
  {path:"/", element: <App/>, children:[
    {path:"/", element: <Home/>},
    {path:"/create-post", element: <CreatePost />},
    {path:"/bookmarks", element: <Bookmarks/>},
    {path:"/profile", element: <Profile/>},
    {path:"/explore", element: <Explore/>},
  ]}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
