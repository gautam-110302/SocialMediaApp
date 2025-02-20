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
import Likes from './components/Likes.jsx'
import YourPosts from './components/YourPosts.jsx'

const router = createBrowserRouter([
  {path:"/", element: <App/>, children:[
    {path:"/", element: <Home/>},
    {path:"/create-post", element: <CreatePost />},
    {path:"/explore", element: <Explore/>},
    {path:"/profile", element: <Profile/>, children:[
      {path:"/profile", element: <YourPosts/>},
      {path:"/profile/bookmarks", element: <Bookmarks/>},
      {path:"/profile/likes", element: <Likes/>},
    ]},
    
  ]}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
