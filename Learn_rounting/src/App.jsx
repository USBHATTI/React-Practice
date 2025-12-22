import './App.css'
import Home from './components/Home.jsx'
import Dashboard from './components/dashboard.jsx'
import About from './components/about.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import ParamsComp from './components/ParamsComp.jsx'
import Stats from './components/stats.jsx'


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: 
      <div>
        <Navbar />
        <Home />
      </div>
    },
    {
      path: '/dashboard',
      element: 
      <div>
        <Navbar />
        <Dashboard />
      </div>,
      children: [
        {
          path: 'stats',
          element: <Stats />
        }
      ]
    },
    {
      path: '/about',
      element: 
      <div>
        <Navbar />
        <About />
      </div>
    },
    {
      path: '/student/:id',
      element: 
      <div>
        <Navbar />
        <ParamsComp />
      </div>
    },
    {
      path: '*',
      element: 
      <div>
        <h1>404 Error Page Not Found</h1>
      </div>
    }
  ]
)

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
