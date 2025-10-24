import { motion } from 'framer-motion'
import logo from '../../../utilidades/assets/img/logo/logo.png'
import {
    Mail,
    Phone,
    Globe,
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
                    {/* Grid principal - 2 columnas */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">

                        {/* Columna 1: Logo y descripción */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col"
                        >
                            <div className="mb-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <img
                                        src={logo}
                                        alt="FunCy Logo"
                                        className="object-contain"
                                        style={{ height: '75px', width: 'auto' }}
                                    />
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

                            <div className="inline-flex items-center gap-2 px-3 py-2 bg-violet-900/30 rounded-lg border border-violet-700/30 w-fit">
                                <Heart className="w-4 h-4 text-violet-400" />
                                <span className="text-xs text-violet-300">
                                    Plataforma certificada en bienestar laboral
                                </span>
                            </div>
                        </motion.div>

                        {/* Columna 2: Información de contacto */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="flex flex-col"
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
                    </div>

                    {/* Línea divisoria */}
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8" />

                    {/* Footer bottom */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isVisible ? 1 : 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="text-center"
                        >
                            <p className="text-sm text-gray-400">
                                © 2025 FunCy - Funcional Neuro Laboral. Todos los derechos reservados.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Botón scroll to top */}
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

export default Footer