import {RouterProvider} from 'react-router';
import router from './router/routes';
import './index.css';

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
