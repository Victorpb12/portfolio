import { DiReact } from 'react-icons/di';

import { BiLogoPostgresql } from "react-icons/bi";

import { 
    SiDelphi,
    SiFlutter 
} from "react-icons/si";

import TechReact from '../components/Technologies/TechReact';
import TechPostgre from './Technologies/TechPostgre';
import TechDelphi from './Technologies/TechDelphi';
import TechFlutter from './Technologies/TechFlutter';

import '../styles/components/technologiescontainer.sass';

const technologies = [
    { id: "react", name:"React", icon: <DiReact/>, description: <TechReact/> },
    { id: "postgre", name:"PostgreSQL", icon: <BiLogoPostgresql />, description: <TechPostgre/>},
    { id: "flutter", name:"Flutter", icon: <SiFlutter/>, description: <TechFlutter/> },
    { id: "delphi", name:"Delphi", icon: <SiDelphi/>, description: <TechDelphi/> },
];

const TechnologiesContainer = () => {
    return (
    <section className='technologies-container'>
        <h2>Tecnologias</h2>
        <div className='technologies-grid'>
            {technologies.map((tech) => (
                <div className='technology-card' id={tech.id} key={tech.id}>
                    
                    <div className='technology-info'>
                        <div className='technology-icon'>
                            {tech.icon}
                        </div>
                        <h3>{tech.name}</h3>
                        <p>{tech.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
    );
};

export default TechnologiesContainer