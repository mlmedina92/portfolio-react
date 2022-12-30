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
            <section className='inicio mb-5'>
                <Presentation />
            </section>

            <section>
                <FullWidhtContainer id="sobre-mi" title="Sobre mi">
                    <SobreMi />
                </FullWidhtContainer>
            </section>

            <section className='services' >
                <FullWidhtContainer title="Mis servicios" id="services" className="section">
                    <ServicesContainer />
                </FullWidhtContainer>
            </section>
            
            <WhatsApp />
            {/* <section>
                <Certification/>
            </section> */}

        </div>
    )
}

export default Home