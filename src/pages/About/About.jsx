import React from "react";
import './About.css';
import AboutMe from "../../components/AboutMe/AboutMe";
import AboutProject from "../../components/AboutProject/AboutProject";
import Promo from "../../components/Promo/Promo";
import Techs from "../../components/Techs/Techs";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";


function About() {
    return (
        <div className="about">
            <Promo/>
            <SectionWrapper idNav={"aboutProject"} title={"О проекте"} children={<AboutProject/>}/>
            <SectionWrapper idNav={"techs"} kind={"gray"} title={"Технологии"} children={<Techs/>}/>
            <SectionWrapper idNav={"aboutMe"} kind={"wide"} title={"Студент"} children={<AboutMe/>}/>
        </div>
    )
}

export default About;
