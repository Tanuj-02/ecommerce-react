import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Productbycategory from './pages/Productbycategory'
import Details from './pages/Details'
import Search from './pages/Search'
import Cart from './pages/Cart'


function App() {
  const router = createBrowserRouter([
    {
      path:"/" , element:<div><Navbar/><Home/></div>
    },
    {
      path:"/:category", element:<div><Navbar/><Productbycategory/></div>, 
    },
    {
      path:"/:category/:id" , element:<div><Navbar/><Details/></div>
    },
    {
      path:"/search/:term", element: <div><Navbar/><Search/></div>
    },
    {
      path:"/cart", element:<div><Navbar/><Cart/></div>
    }
  ])

  return (
    <div>
        <RouterProvider router = {router} />
    </div>
  )
}

export default App
