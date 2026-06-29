import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import TitleHeader from "../components/TitleHeader.jsx";
import { asset } from "../utils/paths.js";

const Contact = () => {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await emailjs.sendForm(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            );
            setForm({ name: "", email: "", message: "" });
            setSuccess(true);
            setTimeout(() => setSuccess(false), 4000);
        } catch (error) {
            console.error("EmailJS Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="section-padding w-full">
            <div className="w-full md:px-20 px-5">
                <TitleHeader
                    title="Me contacter"
                    sub="💬 Une question ou une opportunité ? Écrivez-moi !"
                />

                <div className="mt-16 flex justify-center">
                    <div className="w-full max-w-2xl card-border rounded-xl p-8 md:p-12">
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="w-full flex flex-col gap-6"
                        >
                            <div>
                                <label htmlFor="name">Votre nom</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Comment vous appelez-vous ?"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Votre email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Votre adresse email"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message">Votre message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Comment puis-je vous aider ?"
                                    rows="6"
                                    required
                                />
                            </div>

                            {success && (
                                <p className="text-green-400 text-sm text-center">
                                    ✅ Message envoyé avec succès !
                                </p>
                            )}

                            <button type="submit" className="cta-wrapper w-full">
                                <div className="cta-button group">
                                    <div className="bg-circle" />
                                    <p className="text">
                                        {loading ? "Envoi en cours..." : "Envoyer le message"}
                                    </p>
                                    <div className="arrow-wrapper">
                                        <img src={asset("/images/arrow-down.svg")} alt="arrow" />
                                    </div>
                                </div>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
