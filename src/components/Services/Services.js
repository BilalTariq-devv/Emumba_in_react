import React from 'react'
import "../Services/services.scss";

const services = [
    { heading: 'Gen AI', desc: 'Develop conversational applications using Generative AI', img: '/images/genAI.png' },
    { heading: 'Cloud & Devops', desc: 'Modernize Cloud applications, infrastructure and operations.', img: '/images/clouddevops.png' },
    { heading: 'Web Applications', desc: 'Build highly interactive and scalable web applications.', img: '/images/webapplication.png' },
    { heading: 'Network Applications', desc: 'Configure, troubleshoot and monitor enterprise networks.', img: '/images/network applications.png' },
    { heading: 'Design, UX', desc: 'Design products intuitively with a simplified user experience.', img: '/images/design uiux.png' },
    { heading: 'Quality Assurance', desc: 'Ensure quality with effective QA services and test automation.', img: '/images/quality assurance.png' },
]

function Services() {


    return (
        <section className="about-services">
            <h2>Services</h2>
            <article className="services-container">
                { services.map((service) => (
                    <div className="services-description">
                        <img className="service-logo" src={service.img} alt="" />
                        <h3>{service.heading}</h3><br />
                        <p>{service.desc}</p>
                    </div>
                )) }
            </article>
      </section>
    )
}

export default Services
