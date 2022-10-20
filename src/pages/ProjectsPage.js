
import react, { useState, useEffect } from 'react';
import Loader from '../components/Loader';
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

          <Tabs tabs={tabs} className='tabs-wrapper'/>

      </section>
      
    </div>
    
    )}

    </>
  )
}

export default ProjectsPage