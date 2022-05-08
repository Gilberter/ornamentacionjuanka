import React from 'react'
import '../styles/Contact.scss'
import { AiFillPhone } from 'react-icons/ai';
import { TiSocialFacebook, TiSocialInstagram,  } from 'react-icons/ti';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { Link } from 'react-router-dom'



const Contact = () => {
  return (
      <div className='conteiner-contact'>
        
        <ul>
        <Link className='link-back' to='/'><p><RiArrowGoBackFill />Volver a Inicio</p></Link>
          <li>
            <h1>Nuestros Contactos:</h1>
            <p>Llamanos o Escribenos por WhatsApp</p>
            <li className='flex-column'>
              
                <div className='flex-row'><i><AiFillPhone /></i> <p>+57 (315) 3038988</p><p>Juan Carlos Vanegas</p></div>
                
                <div className='flex-row'><i><AiFillPhone /></i> <p>+57 (316) 3038756</p><p>Vidal</p></div>
            </li>
          </li>
          <li>
            <p>Redes Sociales</p>
            <li className='flex-column'>
              <div className='flex-row'>
                <a className='underline' href="https://www.facebook.com/profile.php?id=100081013570608"><i><TiSocialFacebook /></i></a><a className='underline' href="https://www.facebook.com/profile.php?id=100081013570608"><p>Ornamentación Vanegas</p></a></div>
              <div className='flex-row'>
                <a className='underline' href="uw">
                  <i><TiSocialInstagram /></i>
                </a> 
                <a className='underline' href="ywy">
                  <p>Ornamentación Vanegas</p>
                </a>
              </div>
            </li>
          </li>
        
          <li>
            <h1>Cotización</h1>
            <p>La cotizacion se realiza despues de analizar el costo <br /> de los materiales, puedes elegir exactamente el tipo<br />de material que quieres........</p>
          </li>     
         
        </ul>
      </div>
  );
}

export { Contact };