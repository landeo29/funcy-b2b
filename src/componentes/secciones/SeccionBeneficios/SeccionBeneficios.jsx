import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import TarjetaBeneficio from './TarjetaBeneficio'
import {
    TrendingUp,
    Heart,
    Brain,
    Sparkles
} from 'lucide-react'

import pausasImg from '../../../utilidades/assets/img/beneficios/benf1.png'
import energiaImg from '../../../utilidades/assets/img/beneficios/benf2.png'
import pensamientoImg from '../../../utilidades/assets/img/beneficios/benf3.png'

const SeccionBeneficios = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const beneficios = [
        {
            id: 1,
            titulo: "Pausas funcionales",
            descripcion: "Ejercicios breves que reducen la tensión y reactivan el foco en minutos.",
            imagen: pausasImg,
            color: "violet",
            metricas: "5-10 min",
            efectos: ["Reduce tensión", "Mejora postura", "Reactiva energía"]
        },
        {
            id: 2,
            titulo: "Más energía mental",
            descripcion: "Rutinas sencillas que ayudan a mantener la claridad y evitar la fatiga.",
            imagen: energiaImg,
            color: "purple",
            metricas: "3x más focus",
            efectos: ["Claridad mental", "Menos fatiga", "Mayor resistencia"]
        },
        {
            id: 3,
            titulo: "Pensamiento positivo",
            descripcion: "Entrenamientos que ayudan a cambiar pensamientos negativos por soluciones efectivas y realistas.",
            imagen: pensamientoImg,
            color: "indigo",
            metricas: "78% mejora",
            efectos: ["Resiliencia", "Soluciones prácticas", "Bienestar emocional"]
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    return (
        <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-72 h-72 bg-violet-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 rounded-full mb-6">
                        <Sparkles className="w-4 h-4 text-violet-600" />
                        <span className="text-sm font-semibold text-violet-700">
                            Beneficios comprobados
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Entrena la mente de tus equipos.
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600 mt-2">
                            Transforma su bienestar.
                        </span>
                    </h2>

                    <p className="text-lg text-gray-600 leading-relaxed">
                        FunCy ayuda a tus colaboradores a mantenerse enfocados, reducir el estrés
                        y mejorar su energía mental durante el día con microentrenamientos simples y prácticos.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto overflow-visible"
                >
                    {beneficios.map((beneficio, index) => (
                        <TarjetaBeneficio
                            key={beneficio.id}
                            beneficio={beneficio}
                            index={index}
                        />
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                >
                    {[
                        { icon: TrendingUp, valor: "95%", texto: "menos estrés" },
                        { icon: Heart, valor: "90%", texto: "mejor clima laboral" },
                        { icon: Brain, valor: "90%", texto: "mayor concentración" },
                        { icon: Sparkles, valor: "500+", texto: "usuarios activos" }
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-violet-100 to-purple-100 mb-2">
                                <stat.icon className="w-5 h-5 text-violet-600" />
                            </div>
                            <div className="text-2xl font-bold text-gray-900">{stat.valor}</div>
                            <div className="text-sm text-gray-600">{stat.texto}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default SeccionBeneficios