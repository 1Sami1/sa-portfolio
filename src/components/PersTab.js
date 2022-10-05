import ProjectCard from "./FilmfanCard"
import PortfolioCard from "./PortfolioCard"
import PassGenCard from "./PassGenCard"
import { AnimationOnScroll } from 'react-animation-on-scroll'


const PersonalTab = () => {
    return(
        <div className="pers-tab">
            <AnimationOnScroll animateIn='animate__bounceInUp' initiallyVisible='true' animateOnce='true'>
                <PassGenCard />
            </AnimationOnScroll>
                


        </div>
    )
}

export default PersonalTab