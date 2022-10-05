import ProjectCard from "./FilmfanCard"
import PortfolioCard from "./PortfolioCard"
import CapstoneCard from "./CapstoneCard"
import { AnimationOnScroll } from 'react-animation-on-scroll'

const ProfessionalTab = () => {
    return(
        <div className="prof-tab">
            <AnimationOnScroll animateIn='animate__bounceInUp' initiallyVisible='true' animateOnce='true'>
                <ProjectCard /> 
            </AnimationOnScroll>

            <AnimationOnScroll animateIn='animate__bounceInUp' initiallyVisible='true' animateOnce='true'>
                <PortfolioCard />
            </AnimationOnScroll>
            
            <AnimationOnScroll animateIn='animate__bounceInUp' initiallyVisible='true' animateOnce='true'>
                <CapstoneCard />
            </AnimationOnScroll>
            


        </div>
    )
}

export default ProfessionalTab