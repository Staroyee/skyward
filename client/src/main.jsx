import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import App from './App.jsx';
import Error from './pages/Error.jsx'
import Home from './pages/Home';
import LoginSignup from './pages/LoginSignup';
import Profile from './pages/Profile';
import Launch from './pages/Launch';
import SavedLaunches from './pages/SavedLaunches.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <Error />,
    children: [
      {
        index: true, 
        element: <Home />
      }, {
        path: '/login-signup',
        element: <LoginSignup />
      }, {
        path: '/profile',
        element: <Profile />
      }, {
        path: '/launches',
        element: <Launch />
      }, {
        path: '/saved-launches',
        element: <SavedLaunches />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
