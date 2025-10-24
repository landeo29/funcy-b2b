import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

import imagenCTA from '../../../utilidades/assets/img/cta/ctA.png'
import imagenTestimonial from '../../../utilidades/assets/img/cta/testimonial.png'
import {
    ArrowRight,
    Sparkles,
    Heart,
    Users,
    TrendingUp,
    Shield,
    CheckCircle,
    Calendar,
    Brain,
    Zap,
    Star
} from 'lucide-react'

const SeccionCTA = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [isHovered, setIsHovered] = useState(false)

    const handleSolicitarDemo = () => {
        const phoneNumber = '51948330613'
        const message = encodeURIComponent('Hola, me gustaría solicitar una demo empresarial gratuita de FunCy')
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
    }

    const beneficios = [
        { icono: Heart, texto: 'Bienestar integral' },
        { icono: Brain, texto: 'Basado en neurociencia' },
        { icono: TrendingUp, texto: 'ROI comprobado' },
        { icono: Shield, texto: 'Sin riesgos' }
    ]

    return (
        <section ref={ref} className="py-20 lg:py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600" />

            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
                        backgroundSize: '30px 30px'
                    }}
                />
            </div>

            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        y: [0, -30, 0],
                        rotate: [0, 10, 0]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-20 left-10 text-white/10"
                >
                    <Brain size={100} />
                </motion.div>

                <motion.div
                    animate={{
                        y: [0, 30, 0],
                        rotate: [0, -10, 0]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-20 right-10 text-white/10"
                >
                    <Heart size={80} />
                </motion.div>

                <motion.div
                    animate={{
                        y: [0, 20, 0]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-40 right-20 text-white/10"
                >
                    <Star size={60} />
                </motion.div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-8"
                    >
                        <Sparkles className="w-4 h-4 text-yellow-300" />
                        <span className="text-sm font-semibold text-white">
              Transforma tu cultura organizacional
            </span>
                        <Sparkles className="w-4 h-4 text-yellow-300" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight"
                    >
                        Cuida la mente de tu equipo y{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              mejora los resultados
            </span>
                        {" "}de tu empresa
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto"
                    >
                        Empieza hoy a construir una cultura laboral más sana, enfocada y productiva.
                        Con FunCy, cada pausa se convierte en una oportunidad para pensar mejor,
                        rendir mejor y vivir con equilibrio.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-4 mb-10"
                    >
                        {beneficios.map((beneficio, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full"
                            >
                                <beneficio.icono className="w-4 h-4 text-white" />
                                <span className="text-sm font-medium text-white">
                  {beneficio.texto}
                </span>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mb-6"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            onClick={handleSolicitarDemo}
                            className="group relative inline-flex items-center justify-center px-8 py-5 text-lg font-bold text-violet-700 bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-violet-100 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700`} />

                            <Calendar className="w-6 h-6 mr-3" />
                            <span>Solicita una demo empresarial gratuita</span>
                            <ArrowRight className={`w-6 h-6 ml-3 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white/80 text-sm"
                    >
                        <div className="flex items-center gap-1">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span>Sin compromiso</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Zap className="w-4 h-4 text-yellow-400" />
                            <span>Implementación en 24h</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Users className="w-4 h-4 text-blue-400" />
                            <span>+500 colaboradores felices</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="mt-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 backdrop-blur-sm rounded-full border border-yellow-400/30">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                            <span className="text-sm text-yellow-100 font-medium">
                Agenda disponible limitada para diciembre - Reserva tu demo ahora
              </span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        y: [0, -30, 0],
                        rotate: [0, 10, 0]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-20 left-10 text-white/10"
                >
                    <Brain size={100} />
                </motion.div>

                <motion.div
                    animate={{
                        y: [0, 30, 0],
                        rotate: [0, -10, 0]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-20 right-10 text-white/10"
                >
                    <Heart size={80} />
                </motion.div>

                <motion.div
                    animate={{
                        y: [0, 20, 0]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-40 right-20 text-white/10"
                >
                    <Star size={60} />
                </motion.div>


            </div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        y: [0, -30, 0],
                        rotate: [0, 10, 0]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-20 left-10 text-white/10"
                >
                    <Brain size={100} />
                </motion.div>

                <motion.div
                    animate={{
                        y: [0, 30, 0],
                        rotate: [0, -10, 0]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-20 right-10 text-white/10"
                >
                    <Heart size={80} />
                </motion.div>

                <motion.div
                    animate={{
                        y: [0, 20, 0]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-40 right-20 text-white/10"
                >
                    <Star size={60} />
                </motion.div>

                <motion.div
                    animate={{
                        y: [0, -25, 0],
                        rotate: [0, 5, 0]
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/3 left-1/4 hidden lg:block"
                >
                    <img
                        src={imagenCTA}
                        alt="Meditación"
                        className="w-32 h-32 rounded-full object-cover shadow-2xl opacity-60"
                    />
                </motion.div>

                <motion.div
                    animate={{
                        y: [0, 20, 0],
                        rotate: [0, -5, 0]
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-1/4 right-1/4 hidden lg:block"
                >
                    <img
                        src={imagenTestimonial}
                        alt="Bienestar"
                        className="w-28 h-28 rounded-full object-cover shadow-2xl opacity-60"
                    />
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0">
                <svg className="w-full h-24 fill-white" viewBox="0 0 1440 120" preserveAspectRatio="none">
                    <path d="M0,64 C240,128 480,0 720,64 C960,128 1200,0 1440,64 L1440,120 L0,120 Z" opacity="0.1" />
                    <path d="M0,80 C240,120 480,40 720,80 C960,120 1200,40 1440,80 L1440,120 L0,120 Z" opacity="0.15" />
                    <path d="M0,96 C240,112 480,80 720,96 C960,112 1200,80 1440,96 L1440,120 L0,120 Z" opacity="0.2" />
                </svg>
            </div>
        </section>
    )
}

export default SeccionCTA