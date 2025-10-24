import { motion } from 'framer-motion'
import {
    Mail,
    Phone,
    Globe,
    Linkedin,
    Instagram,
    Youtube,
    Brain,
    Heart,
    Sparkles,
    ChevronUp,
    MapPin
} from 'lucide-react'
import { useState, useEffect } from 'react'

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [showScrollTop, setShowScrollTop] = useState(false)

    useEffect(() => {
        setIsVisible(true)

        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const contactInfo = [
        {
            icono: Mail,
            label: 'Email',
            valor: 'contacto@fnldigital.com',
            link: 'mailto:contacto@fnldigital.com'
        },
        {
            icono: Phone,
            label: 'Teléfono',
            valor: '+51 949 807 696',
            link: 'tel:+51949807696'
        },
        {
            icono: Globe,
            label: 'Web',
            valor: 'www.fnldigital.com',
            link: 'https://www.fnldigital.com'
        }
    ]

    const redesSociales = [
        {
            nombre: 'LinkedIn',
            icono: Linkedin,
            link: 'https://linkedin.com/company/funcy',
            color: 'hover:text-blue-600'
        },
        {
            nombre: 'Instagram',
            icono: Instagram,
            link: 'https://instagram.com/funcy',
            color: 'hover:text-pink-600'
        },
        {
            nombre: 'YouTube',
            icono: Youtube,
            link: 'https://youtube.com/@funcy',
            color: 'hover:text-red-600'
        }
    ]

    return (
        <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
                        backgroundSize: '30px 30px'
                    }}
                />
            </div>

            <div className="container mx-auto px-4 py-12 lg:py-16 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-1"
                        >
                            <div className="mb-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg">
                                        <Brain className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold">
                                        FunCy
                                    </h3>
                                </div>
                                <p className="text-violet-400 font-semibold flex items-center gap-2">
                                    <Sparkles className="w-4 h-4" />
                                    Entrena la mente. Mejora el bienestar.
                                    <Sparkles className="w-4 h-4" />
                                </p>
                            </div>

                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                Desarrollado por especialistas en psicología, neurociencia y comportamiento humano.
                            </p>

                            <div className="inline-flex items-center gap-2 px-3 py-2 bg-violet-900/30 rounded-lg border border-violet-700/30">
                                <Heart className="w-4 h-4 text-violet-400" />
                                <span className="text-xs text-violet-300">
                  Plataforma certificada en bienestar laboral
                </span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="lg:col-span-1"
                        >
                            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-violet-400" />
                                Contacto
                            </h4>

                            <div className="space-y-4">
                                {contactInfo.map((info, index) => (
                                    <motion.a
                                        key={index}
                                        href={info.link}
                                        target={info.icono === Globe ? '_blank' : undefined}
                                        rel={info.icono === Globe ? 'noopener noreferrer' : undefined}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                                        transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                                        className="flex items-center gap-3 text-gray-300 hover:text-violet-400 transition-colors group"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-gray-800 group-hover:bg-violet-900/30 flex items-center justify-center transition-colors">
                                            <info.icono className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">{info.label}</p>
                                            <p className="text-sm font-medium">{info.valor}</p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-1"
                        >
                            <h4 className="text-lg font-semibold mb-6">
                                Síguenos
                            </h4>

                            <div className="flex gap-3 mb-8">
                                {redesSociales.map((red, index) => (
                                    <motion.a
                                        key={index}
                                        href={red.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
                                        transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className={`
                      w-12 h-12 rounded-xl bg-gray-800 hover:bg-gray-700
                      flex items-center justify-center transition-all duration-300
                      text-gray-400 ${red.color} group
                    `}
                                        aria-label={red.nombre}
                                    >
                                        <red.icono className="w-6 h-6" />
                                    </motion.a>
                                ))}
                            </div>

                        </motion.div>
                    </div>

                    <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8" />

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isVisible ? 1 : 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="text-center md:text-left"
                        >
                            <p className="text-sm text-gray-400">
                                © 2025 FunCy - Funcional Neuro Laboral. Todos los derechos reservados.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                    opacity: showScrollTop ? 1 : 0,
                    scale: showScrollTop ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center z-50 group"
                aria-label="Volver arriba"
            >
                <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
        </footer>
    )
}


export default Footer;