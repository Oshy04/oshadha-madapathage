import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { asset } from "../utils/paths.js";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );

        [project1Ref.current, project2Ref.current, project3Ref.current].forEach((card, index) => {
            gsap.fromTo(
                card,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100'
                    }
                }
            );
        });
    }, []);

    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/* Left */}
                    <div className='first-project-wrapper' ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src={asset("/images/project1.png")} alt="ProjetVlan"
                                 className="w-full h-full object-contain rounded-xl absolute inset-0" />
                        </div>
                        <div className="text-content">
                            <h2>Projet pédagogique mise en place de l'infrastructure réseau du laboratoire GSB</h2>
                            <p className="text-white-50 md:text-xl">
                                Une infrastructure Vlan en 7 étages avec une interconnexion sécurisée avec le réseau public
                            </p>
                        </div>
                    </div>
                    {/* Right */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper">
                                <img src={asset("/images/project2.png")} alt="Projet Bibliothèque" />
                            </div>
                            <h2>Projet pédagogique bibliothèque YomiGarden</h2>
                            <p className="text-white-50 md:text-xl">
                                un projet bibliothèque site web codé en Html, CSS et PHP qui regroupe quelques livres.
                            </p>
                        </div>
                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper">
                                <img src={asset("/images/project3.png")} alt="Proxmox" />
                            </div>
                            <h2>Projet Stage METM Installation Promox</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowcaseSection;