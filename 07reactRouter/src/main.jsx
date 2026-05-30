import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
import Contect from './components/contect/contect.jsx'
import Layout from './Layout.jsx'
import Github, { GithubInfo } from './components/Github/Github.jsx'
import User from './components/user/user.jsx'
import Meme, { MemeInfo } from './components/Meme/Meme.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children : [
//       {
//         path: '',
//         element: <Home/>
//       },
//       {
//         path: 'about',
//         element: <About/>
//       },
//       {
//         path: 'contect',
//         element: <Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contect' element={<Contect />} />
      <Route 
      loader={GithubInfo} 
      path='github' element={<Github />} />

      <Route path='use/:useid' element={<User/>}/>
      <Route 
      loader={MemeInfo}
      path='meme' element={<Meme/>}/>

    </Route>
    
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
