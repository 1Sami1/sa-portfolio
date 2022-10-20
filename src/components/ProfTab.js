import ProjectCard from "./FilmfanCard"
import PortfolioCard from "./PortfolioCard"
import CapstoneCard from "./CapstoneCard"
import Fade from 'react-reveal/Bounce';

const ProfessionalTab = () => {
    return(
        <div className="prof-tab">
            <Fade>
                <ProjectCard /> 
            </Fade>

            <Fade>
                <PortfolioCard />
            </Fade>
            
            <Fade>
                <CapstoneCard />
            </Fade>
            


        </div>
    )
}

export default ProfessionalTab