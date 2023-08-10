import NavComponent from './components/NavComponent'
import { Outlet } from 'react-router-dom'

export default function App() {

  return (
    <>
      <NavComponent />
      <Outlet />
      
    </>
  )
}