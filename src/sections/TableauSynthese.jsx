const Check = () => (
    <span className="flex items-center justify-center">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="9" cy="9" r="9" fill="#52aeff" fillOpacity="0.2"/>
            <path d="M5 9l3 3 5-5" stroke="#52aeff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </span>
);

const competences = [
    { code: "B1", label: "Gérer le patrimoine informatique" },
    { code: "B2", label: "Répondre aux incidents et aux demandes" },
    { code: "B3", label: "Développer la présence en ligne" },
    { code: "B4", label: "Travailler en mode projet" },
    { code: "B5", label: "Mettre à disposition un service informatique" },
    { code: "B6", label: "Organiser son développement professionnel" },
];

// Formation initiale = cours / projets pédagogiques à l'IPSSI
const formationInitiale = [
    {
        realisation: "Projet SISR — Conception d'une architecture réseau multi-étages avec routage inter-VLAN, plan d'adressage IP, DHCP, NAT et règles de sécurité sur switchs et routeurs (Cisco Packet Tracer)",
        B1: true, B2: false, B3: false, B4: true, B5: true, B6: false,
    },
    {
        realisation: "Travaux pratiques Cisco Packet Tracer : configuration OSPF, RIP, SSH, Port-Security, DHCP Snooping, ACL, VLANs inter-VLAN",
        B1: true, B2: true, B3: false, B4: false, B5: true, B6: false,
    },
    {
        realisation: "Installation et configuration d'un serveur Windows Server en environnement virtualisé : Active Directory, DNS, DHCP, GLPI",
        B1: true, B2: false, B3: false, B4: false, B5: true, B6: false,
    },
    {
        realisation: "Mise en place d'un environnement Linux (Debian/Ubuntu) : gestion des services réseau, utilisateurs et droits d'accès",
        B1: true, B2: false, B3: false, B4: false, B5: true, B6: false,
    },
    {
        realisation: "Projet bibliothèque SLAM — Développement d'un site web (HTML, CSS, PHP/MySQL) : conception, modélisation BDD, interface utilisateur (Oct. 2025 – Jan. 2026)",
        B1: false, B2: false, B3: true, B4: true, B5: true, B6: false,
    },
    {
        realisation: "Certification ANSSI SecNumacadémie et CNIL — Formation en ligne sur la sécurité des réseaux, gestion des incidents et bonnes pratiques cybersécurité",
        B1: false, B2: false, B3: false, B4: false, B5: false, B6: true,
    },
    {
        realisation: "Conception d'une architecture réseau segmentée par VLANs : routage inter-VLAN, plan d'adressage IP, configuration DHCP et règles de sécurité sur switchs et routeurs",
        B1: true, B2: false, B3: false, B4: true, B5: true, B6: false,
    },
];

// Milieu professionnel = uniquement le stage METM
const milieuPro = [
    {
        realisation: "Remplacement et mise à jour d'éléments défectueux ou obsolètes sur le parc informatique (matériel, composants)",
        B1: true, B2: true, B3: false, B4: false, B5: false, B6: false,
    },
    {
        realisation: "Installation Windows, vérification et application des mises à jour système sur postes et serveurs",
        B1: true, B2: true, B3: false, B4: false, B5: true, B6: false,
    },
    {
        realisation: "Mise en place d'un serveur sous Proxmox : déploiement de machines virtuelles pour les équipes",
        B1: true, B2: false, B3: false, B4: false, B5: true, B6: false,
    },
    {
        realisation: "Reconditionnement d'ordinateurs portables : démontage, réparation et réutilisation de pièces détachées informatiques",
        B1: true, B2: true, B3: false, B4: false, B5: false, B6: false,
    },
];

const TableRow = ({ row, isEven }) => (
    <tr className={isEven ? "bg-black-100" : "bg-black-50/10"}>
        <td className="px-4 py-4 text-white-50 text-sm border border-black-50 leading-relaxed">
            {row.realisation}
        </td>
        {["B1","B2","B3","B4","B5","B6"].map((b) => (
            <td key={b} className="px-2 py-4 text-center border border-black-50 min-w-[48px]">
                {row[b] ? <Check /> : null}
            </td>
        ))}
    </tr>
);

const TableauSynthese = () => {
    return (
        <section id="synthese" className="section-padding w-full">
            <div className="w-full md:px-20 px-5">
                {/* Header */}
                <div className="mb-12 text-center">
                    <p className="text-blue-50 text-sm uppercase tracking-widest mb-3">
                        BTS SIO OPTION SISR — SESSION 2026
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Tableau de synthèse E5
                    </h2>
                    <p className="text-white-50 md:text-lg max-w-2xl mx-auto">
                        Réalisations professionnelles et compétences mises en œuvre,
                        en formation initiale et en milieu professionnel.
                    </p>
                </div>

                {/* Légende */}
                <div className="mb-10 card-border rounded-xl p-6">
                    <p className="text-white-50 text-sm font-semibold mb-4 uppercase tracking-wider">
                        Légende des blocs de compétences
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                        {competences.map((c) => (
                            <div key={c.code} className="flex items-start gap-3">
                                <span className="bg-blue-50/20 text-blue-50 font-bold text-xs px-2 py-1 rounded shrink-0">
                                    {c.code}
                                </span>
                                <span className="text-white-50 text-sm">{c.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Formation initiale */}
                <div className="mb-12">
                    <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-3">
                        <span className="w-2 h-6 bg-blue-50 rounded-full inline-block"/>
                        Formation initiale
                    </h3>
                    <p className="text-white-50 text-sm mb-5 ml-5">
                        IPSSI Val d'Europe · Depuis octobre 2025
                    </p>
                    <div className="overflow-x-auto rounded-xl border border-black-50">
                        <table className="w-full min-w-[700px]">
                            <thead>
                            <tr className="bg-black-200">
                                <th className="px-4 py-4 text-left text-white-50 text-sm font-semibold border border-black-50">
                                    Réalisation professionnelle
                                </th>
                                {competences.map((c) => (
                                    <th key={c.code} className="px-3 py-4 text-center text-blue-50 text-sm font-bold border border-black-50 min-w-[48px]">
                                        {c.code}
                                    </th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            {formationInitiale.map((row, i) => (
                                <TableRow key={i} row={row} isEven={i % 2 === 0} />
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Milieu professionnel */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-3">
                        <span className="w-2 h-6 bg-blue-50 rounded-full inline-block"/>
                        Milieu professionnel
                    </h3>
                    <p className="text-white-50 text-sm mb-5 ml-5">
                        Stage — Technicien Informatique · METM · Avril 2026 – Juin 2026 · Rogny-sous-Bois
                    </p>
                    <div className="overflow-x-auto rounded-xl border border-black-50">
                        <table className="w-full min-w-[700px]">
                            <thead>
                            <tr className="bg-black-200">
                                <th className="px-4 py-4 text-left text-white-50 text-sm font-semibold border border-black-50">
                                    Réalisation professionnelle
                                </th>
                                {competences.map((c) => (
                                    <th key={c.code} className="px-3 py-4 text-center text-blue-50 text-sm font-bold border border-black-50 min-w-[48px]">
                                        {c.code}
                                    </th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            {milieuPro.map((row, i) => (
                                <TableRow key={i} row={row} isEven={i % 2 === 0} />
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Note de bas */}
                <p className="text-white-50/50 text-xs text-center mt-8">
                    Oshadha MADAPATHAGE · BTS SIO option SISR · IPSSI Val d'Europe · Session 2026
                </p>
            </div>
        </section>
    );
};

export default TableauSynthese;