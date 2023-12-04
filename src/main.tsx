import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Header from './Header'
import Welcome from './Wecome'
import LearningEnviroment from './LearningEviroment'
import Footer from './Footer'
import Steps from './Steps'
import MeetOurTeachers from './MeetOurTeachers'
import OurPreschoolPhoto from './OurPreschoolPhoto'
import ContactUs from './ContactUs'
import FastAnswerQuestions from './FastAnswerQuestions'
import OneIcons from "./assets/1-icons.svg";
import {Helmet} from "react-helmet";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Helmet>
      <link rel="icon" type="image/svg+xml" href={OneIcons} />
      <title>Preshool</title>
    </Helmet>
    <Header/>
    <Welcome/>
    <LearningEnviroment/>
    <Steps/>
    <MeetOurTeachers/>
    <OurPreschoolPhoto/>
    <ContactUs/>
    <FastAnswerQuestions/>
    <Footer/> 
  </React.StrictMode>,
)
