import { words } from "../constants";
import Button from "../components/button.jsx";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter.jsx";
import { asset } from "../utils/paths.js";

const Hero = () => {
    useGSAP(() => {
        gsap.fromTo(
            ".hero-text h1",
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
        );
    });

    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src={asset("/images/bg.png")} alt="background" />
            </div>

            <div className="hero-layout">
                {/* Gauche : texte */}
                <header className="flex flex-col justify-center md:w-1/2 w-screen md:px-20 px-5 z-10">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>
                                Transformer
                                <span className="slide">
                                <span className="wrapper">
                                    {words.map((word, index) => (
                                        <span key={index} className="flex items-center md:gap-3 gap-1 pb-2">
                                            <img src={word.imgPath} alt="person"
                                                 className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50" />
                                            <span>{word.text}</span>
                                        </span>
                                    ))}
                                </span>
                            </span>
                            </h1>
                            <h1>en projets concrets</h1>
                            <h1>qui délivrent des résultats</h1>
                        </div>
                        <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                            Bonjour, Je m'appele Oshadha, Je suis étudiant à l'école de l'IPSSI en BTS SIO Option SISR
                        </p>
                        <Button text="See My Work" className="md:w-80 md:h-16 w-60 h-12" id="button" />
                    </div>
                </header>

                {/* Droite : modèle 3D */}
                <figure className="md:w-1/2 w-full h-[50vh] md:h-full">
                    <HeroExperience />
                </figure>
            </div>

            <AnimatedCounter />
        </section>
    )
}
export default Hero
