import React from 'react';
import "./Home.css";
import WorksCard from '../components/WorksCard';
import { IoMailOutline } from "react-icons/io5";


function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero__container">
          <h1 className="hero__heading">Hi, I'm Javier Olivares - Frontend Developer.</h1>
        </div>
      </section>

      <section className="works">
        <div className="works__container">
          <div className="works__col__left">
            <h2 className="works__heading">Recent works</h2>
            <WorksCard
              path="https://agencia8px.netlify.app/"
              src="./images/agencia8px.png"
              alt="Agencia8px"
              title="Agencia8px"
              copy="Project designed for a Web Design and Development Agency. Fully responsive. Developed in HTML, CSS and JS."
            />
            <WorksCard
              path="https://omnifood-code-projects.netlify.app/"
              src="./images/omnifood.png"
              alt="Omnifood"
              title="Omnifood"
              copy="Project designed for a Healthy Food Application. Developed in HTML, CSS and JS. Fully responsive. Tested with the Lighthouse development tool."
            />
            <WorksCard
              path="https://id-studio.netlify.app/"
              src="./images/idstudio.png"
              alt="idStudio"
              title="idStudio"
              copy="Project inspired by the Interior Design industry. Fully responsive. Developed in HTML, CSS and JS."
            />
          </div>

          <div className="works__col__right">
            <WorksCard
              path="https://react-responsivewebsite-trvl.netlify.app/"
              src="./images/trvl.png"
              alt="Travel"
              title="TRVL"
              copy="Project inspired by a Travel Agency. Fully responsive. Developed in React."
            />
            <WorksCard
              path="https://ventura-site.netlify.app/"
              src="./images/ventura.png"
              alt="Ventura"
              title="Ventura"
              copy="Project designed for the promotion of Financial Applications. Fully responsive. Developed in React."
            />
            <WorksCard
              path="https://id-studio.netlify.app/"
              src="./images/fintech.png"
              alt="Fintech"
              title="Fintech"
              copy="Project designed for the Financial Industry. Fully responsive. Developed in React."
            />

          </div>
        </div>
      </section>

      <section className="contact">
        <div className="contact__container">
          <div className="contact__texts">
            <div className="contact__heading">Get in touch</div>
            <div className="contact__copy">
              You can write to me at the email indicated below. I will contact you as soon as possible. Thanks.
            </div>
          </div>
          <div className="contact__email">
            <div className="contact__email__top">
              <IoMailOutline className='email__icon' />
              <span className='email__text'>EMAIL</span>
            </div>
            <p className="contact__email__down">javierolivares@gmail.com</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home