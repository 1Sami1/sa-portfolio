
import ProjectCard from '../components/FilmfanCard'
import PortfolioCard from '../components/PortfolioCard'
import CapstoneCard from '../components/CapstoneCard'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import react, { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import PassGenCard from '../components/PassGenCard'
import { Tabs } from 'react-simple-tabs-component'
import ProfessionalTab from '../components/ProfTab';
import PersonalTab from '../components/PersTab';
import 'react-simple-tabs-component/dist/index.css'

function ProjectsPage() {
  const tabs = [
    {
      label: 'Professional',
      Component: ProfessionalTab
    },
    {
      label: 'Personal',
      Component: PersonalTab
    },
  ]
  // Loading animation
  const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, []);

  return (
    <>
    {loading ? (
        <Loader /> ) : (

    <div className='projects-wrapper'>
      
      <h1 className='projects-h1'>Projects</h1>

      <section className='projects-sec'>

          <Tabs tabs={tabs}/>

        {/* <ProjectCard /> 

        <AnimationOnScroll animateIn='animate__bounceInUp' initiallyVisible='true' animateOnce='true'>
          <PortfolioCard />
        </AnimationOnScroll>
        
        <AnimationOnScroll animateIn='animate__bounceInUp' animateOnce='true'>
        <CapstoneCard />
        </AnimationOnScroll>

        <AnimationOnScroll animateIn='animate__bounceInUp' animateOnce='true'>
        <PassGenCard />
        </AnimationOnScroll> */}

      </section>
      
    </div>
    
    )}

    </>
  )
}

export default ProjectsPage