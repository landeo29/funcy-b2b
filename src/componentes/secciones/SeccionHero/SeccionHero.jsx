import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import BotonesHero from './BotonesHero'
import { Brain, Zap, Shield, TrendingUp } from 'lucide-react'
import portadaImg from '../../../utilidades/assets/img/hero/portada.png';


const SeccionHero = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src={portadaImg}
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-violet-900/90 via-purple-900/85 to-indigo-900/90" />

                <div className="absolute inset-0 opacity-20"
                     style={{
                         backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
                         backgroundSize: '40px 40px'
                     }}
                />
            </div>

            <div className="absolute inset-0 z-0">
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, 0]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-20 left-10 text-violet-400/20"
                >
                    <Brain size={80} />
                </motion.div>

                <motion.div
                    animate={{
                        y: [0, 20, 0],
                        rotate: [0, -5, 0]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute bottom-20 right-10 text-purple-400/20"
                >
                    <Zap size={60} />
                </motion.div>
            </div>

            <div className="relative z-10 container mx-auto px-4 py-20">
                <div className="max-w-5xl mx-auto">

                    {/* Badge Tech */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center mb-6"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            <span className="text-white/90 text-sm font-medium">
                Plataforma basada en psicología y neurociencia aplicada
              </span>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-center mb-6 leading-tight"
                    >
                        Reduce el estrés de tus
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
              colaboradores
            </span>
                        y mejora su bienestar laboral
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-lg md:text-xl text-white/80 text-center mb-10 max-w-3xl mx-auto leading-relaxed"
                    >
                        Con FunCy, tus equipos aprenden a manejar la presión diaria,
                        transformar pensamientos negativos en soluciones positivas
                        y mantener el equilibrio mental para rendir mejor.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <BotonesHero />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/10"
                    >
                        {[
                            { icon: Shield, label: "Reducción de estrés", value: "95%" },
                            { icon: TrendingUp, label: "Más productividad", value: "90%" },
                            { icon: Brain, label: "Mejor enfoque", value: "90%" },
                            { icon: Zap, label: "Empresas activas", value: "50+" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="inline-flex items-center justify-center w-12 h-12 mb-3 rounded-lg bg-white/10 backdrop-blur-sm">
                                    <stat.icon className="w-6 h-6 text-violet-400" />
                                </div>
                                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-xs text-white/60">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>

                </div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/40"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
            </motion.div>
        </section>
    )
}

export default SeccionHero