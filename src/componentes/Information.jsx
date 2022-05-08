import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Autoplay, Navigation, Pagination } from "swiper";
import orna1 from '../images/orna1.jpg'
import orna2 from '../images/orna2.jpeg'
import orna3 from '../images/orna3.jpeg'
import work1 from '../images/inforworksimage1.jpeg'
import work2 from '../images/inforworksimage2.jpeg'

import '../styles/Information.scss'
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Information = () => {
  return (
    <div className='conteiner-info'>
        <h1>Ornamentación Vanegas</h1>
            <ul>
            <Link to='/'>
            <li className='our-works'>
                <p>Nuestros Trabajos</p>
            </li>
            </Link>
            <Link to='contact-us'>
                <li className='contacts'>
                    <p>Comunícate con Nosotros</p>
                </li>
            </Link>
                
        </ul>
        <div className="conteiner-works">
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                centeredSlides={true}
                loop={true}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={orna1} alt='imagenes' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={orna2} alt='imagenes' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={orna3} alt='imagenes' />
                </SwiperSlide>
                
            </Swiper>
        </div>
        <div className='conteiner-infoworks'>
            <h1>Ornamentación y Fachadas</h1>
            <div className='conteiner-infoworks_todo'>
                <ul>
                    <li>Domos</li>
                    <li>Portones y Rejas</li>
                    <li>En Forja</li>
                    <li>Envejecidos</li>
                    <li>Pueras y Ventajas</li>
                    <li>Canales</li>
                    <li>Soldadura</li>
                    <li>Y Mas...</li>
                </ul>
                <div className='conteiner-infoworks_works'>
                    <h1>Juan Carlos Vanegas</h1>
                    <img src={work1} alt="work1" />
                    <img src={work2} alt="work2" />
                    <p>Realizamos todo de tipo de estructuras en metal</p>
                    <p>Reparamos y fabricamos...</p>
                </div>    
            </div>
            
        </div>
    </div>
  )
}

export { Information };