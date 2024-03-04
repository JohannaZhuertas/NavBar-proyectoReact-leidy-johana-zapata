import Cardwidgets from '../Cardwidgets/Cardwidgets'
import './NavBar.css'

export default function NavBar() {
  return (
    <>

      <nav className='navbar'>
        <h3 className='item' >Roblox </h3>

      
          <a class="active" href="#">Inicio</a>
          <a href="#">Servicios</a>
          <a href="#">Acerca de</a>
          <a href="#">Contacto</a>
     
     <Cardwidgets />
     
     </nav>

    
     
    </>
  )
} 