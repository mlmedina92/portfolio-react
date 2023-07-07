import React from 'react'
import FullWidhtContainer from '../components/FullWidhtContainer';
import Presentation from '../components/Presentation'
import ServicesContainer from '../components/ServicesContainer';
import SobreMi from '../components/SobreMi'
import WhatsApp from '../components/WhatsApp';

import '../styles/main.scss';
import '../styles/whatsapp.scss';

const Home = () => {
    return (
        <div>
            <section className='inicio'>
                <Presentation />
            </section>

            <section className='min-vh-100 sobre-mi'>
                <FullWidhtContainer id="sobre-mi" title="Sobre mi" >
                    <SobreMi/>
                </FullWidhtContainer>
            </section>

            <section className='services min-vh-100 d-flex flex-column justify-content-center pt-4 pt-md-0' >
                <FullWidhtContainer title="Mis servicios" id="services" className='mt-5 mt-md-0'>
                    <ServicesContainer />
                </FullWidhtContainer>
            </section>
            
            <WhatsApp />
           
        </div>
    )
}

export default Home