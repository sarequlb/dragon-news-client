import {createBrowserRouter} from 'react-router-dom'
import Main from '../../layout/Main'
import Home from '../../Pages/Home/Home/Home'
import Category from '../../Pages/Category/Category/Category'
import News from '../../Pages/News/News/News'
import Login from '../../Pages/Login/Login/Login'
import Register from '../../Pages/Login/Register/Register'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import Terms from '../../Pages/Others/Terms/Terms'
import Profile from '../../Pages/Others/Profile/Profile'
export const routes = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path: '/',
                loader:() =>fetch(`http://localhost:5000/news`),
                element:<Home></Home>
            },
            {
                path: '/category/:id',
                loader: ({params}) =>  fetch(`http://localhost:5000/category/${params.id}`),
                element:<Category></Category>
            },
            {
                path: '/news/:id',
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`),
                element:<PrivateRoute><News></News></PrivateRoute>
            },
            {
                path: '/login',
                element:<Login></Login>,
            },
            {
                path: '/register',
                element:<Register></Register>,
            },
            {
                path: '/terms',
                element:<Terms></Terms>,
            },
            {
                path: '/profile',
                element:<PrivateRoute><Profile></Profile></PrivateRoute>,
            }
        ]
    }
])