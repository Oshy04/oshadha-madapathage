import { asset } from "../utils/paths.js";

export const navLinks = [
    { name: "Projets", link: "#work" },
    { name: "Expériences", link: "#experience" },
    { name: "Compétences", link: "#skills" },
    { name: "Synthèse", link: "#synthese" },
];

export const words = [
    { text: "des idées", imgPath: asset("/images/ideas.svg") },
    { text: "une Sécurité", imgPath: asset("/images/concepts.svg") },
    { text: "une Infrastructure", imgPath: asset("/images/designs.svg") },
    { text: "du Code", imgPath: asset("/images/code.svg") },
    { text: "des Idées", imgPath: asset("/images/ideas.svg") },
    { text: "une Sécurité", imgPath: asset("/images/concepts.svg") },
    { text: "une Infrastructure", imgPath: asset("/images/designs.svg") },
    { text: "du Code", imgPath: asset("/images/code.svg") },
];

export const counterItems = [
    { value: 3, suffix: "+", label: "Ans d'Expérience Pro" },
    { value: 2, label: "Certification" },
    { value: 3, suffix: "+", label: "Projets Concrets" },
    { value: 10, suffix: "+", label: "Logiciel Maîtrisées" },
];

export const logoIconsList = [
    { name: "logo-1", imgPath: asset("/images/logos/company-logo-1.png") },
    { name: "logo-2", imgPath: asset("/images/logos/company-logo-2.png") },
    { name: "logo-3", imgPath: asset("/images/logos/company-logo-3.png") },
    { name: "logo-4", imgPath: asset("/images/logos/company-logo-4.png") },
    { name: "logo-5", imgPath: asset("/images/logos/company-logo-5.png") },
    { name: "logo-6", imgPath: asset("/images/logos/company-logo-6.png") },
    { name: "logo-7", imgPath: asset("/images/logos/company-logo-7.png") },
    { name: "logo-8", imgPath: asset("/images/logos/company-logo-8.png") },
    { name: "logo-9", imgPath: asset("/images/logos/company-logo-9.png") },
    { name: "logo-10", imgPath: asset("/images/logos/company-logo-10.png") },
    { name: "logo-11", imgPath: asset("/images/logos/company-logo-11.png") },
];

export const abilities = [
    {
        imgPath: asset("/images/seo.png"),
        title: "Rigueur & Qualité Technique",
        desc: "la performance, la sécurité et la stabilité des infrastructures réseaux (Cisco, Proxmox, Windows Server) avec un esprit d'analyse rigoureux.",
    },
    {
        imgPath: asset("/images/chat.png"),
        title: "Sens du Service & Communication",
        desc: "Assure un support utilisateur transparent, fiable et de qualité, fort d'une solide expérience en relation client.",
    },
    {
        imgPath: asset("/images/time.png"),
        title: "Respect des Engagements & Ponctualité",
        desc: "Mene à bien les projets d'infrastructure et de développement dans les délais impartis, avec sérieux et ponctualité.",
    },
];

export const techStackImgs = [
    { name: "ANSSI", imgPath: asset("/images/logos/ANSSI.svg") },
    { name: "CNIL", imgPath: asset("/images/logos/Cnil.svg") },
    { name: "HTML", imgPath: asset("/images/logos/HTML5.png") },
    { name: "Javascript", imgPath: asset("/images/logos/JS.png") },
    { name: "PHP", imgPath: asset("/images/logos/PHP.svg") },
    { name: "Proxmox", imgPath: asset("/images/logos/Proxmox.png") },
];

export const techStackIcons = [
    { name: "Cisco Packet Tracer", modelPath: asset("/models/cisco_logo-transformed.glb"), scale: 1, rotation: [0, 0, 0] },
    { name: "Windows", modelPath: asset("/models/windows_logo-transformed.glb"), scale: 0.4, rotation: [0, 0, 0] },
    { name: "Linux", modelPath: asset("/models/tux.glb"), scale: 0.04, rotation: [0, 0, 0], position: [0, 0, 0] },
    { name: "Git", modelPath: asset("/models/git-svg-transformed.glb"), scale: 0.05, rotation: [0, -Math.PI / 4, 0] },
];

export const expCards = [
    {
        review: "",
        imgPath: asset("/images/exp1.png"),
        logoPath: asset("/images/logo1.png"),
        title: "Stagiaire Technicien Informatique",
        date: "Avril 2026 - Juin 2026",
        responsibilities: [
            "Administration de serveurs via Proxmox et déploiement de VMs pour équipes développeurs",
            "Conception d'une architecture réseau segmentée par VLANs pour isoler les flux du laboratoire.",
            "Mise en place du routage inter-VLAN, plan d'adressage IP et configuration DHCP.",
            "Administration des accès aux équipements réseau (switchs, routeurs) et sécurisation",
            "Installation, mise à jour Windows/BIOS, montage et réparation matérielle PC portables",
        ],
    },
    {
        review: "",
        imgPath: asset("/images/exp2.png"),
        logoPath: asset("/images/logo2.png"),
        title: "Employé polyvalent (Caissier)",
        date: "Févirer 2023 - Actuellement",
        responsibilities: [
            "La gestion de la caisse et de la relation client.",
            "La logistique et la tenue des rayons.",
            "La rigueur et le respect des procédures.",
        ],
    },
];

export const socialImgs = [
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/oshadha-madapathage-b752a938b/",
        imgPath: asset("/images/linkedin.png"),
    },
];