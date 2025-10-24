import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
    Shield,
    Users,
    Brain,
    TrendingUp,
    Heart,
    Zap,
    CheckCircle,
    ArrowRight,
    Sparkles,
    Activity,
    Target,
    Award
} from 'lucide-react'

const SeccionPorQueElegir = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [hoveredBenefit, setHoveredBenefit] = useState(null)

    const beneficios = [
        {
            id: 1,
            titulo: "Reduce el estrés y el agotamiento emocional",
            descripcion: "Técnicas respaldadas por neurociencia que disminuyen los niveles de estrés y mejoran el bienestar mental de tu equipo.",
            icono: Heart,
            color: "rose",
            estadistica: "95%",
            textoEstadistica: "reducción de estrés",
            imagen: "🧘"
        },
        {
            id: 2,
            titulo: "Mejora el clima laboral y la comunicación interna",
            descripcion: "Fortalece las relaciones interpersonales y crea un ambiente de trabajo más colaborativo y positivo.",
            icono: Users,
            color: "blue",
            estadistica: "90%",
            textoEstadistica: "mejor colaboración",
            imagen: "🤝"
        },
        {
            id: 3,
            titulo: "Previene riesgos psicosociales",
            descripcion: "Identifica y mitiga factores de riesgo antes de que se conviertan en problemas mayores, protegiendo a tu organización.",
            icono: Shield,
            color: "green",
            estadistica: "90%",
            textoEstadistica: "prevención efectiva",
            imagen: "🛡️"
        },
        {
            id: 4,
            titulo: "Aumenta la productividad y el compromiso",
            descripcion: "Colaboradores más enfocados y motivados que entregan mejores resultados y se sienten conectados con la empresa.",
            icono: TrendingUp,
            color: "purple",
            estadistica: "95%",
            textoEstadistica: "más productividad",
            imagen: "📈"
        }
    ]

    const caracteristicas = [
        { texto: "Basado en neurociencia y psicología", icono: Brain },
        { texto: "Resultados medibles desde la primera semana", icono: Activity },
        { texto: "Diagnostica el nivel de estrés de tu colaborador", icono: Zap },
        { texto: "Dashboard de métricas en tiempo real", icono: Target },
        { texto: "Certificaciones de bienestar laboral", icono: Award }
    ]

    const colorClasses = {
        rose: 'from-rose-500 to-pink-600',
        blue: 'from-blue-500 to-cyan-600',
        green: 'from-green-500 to-emerald-600',
        purple: 'from-purple-500 to-violet-600'
    }

    return (
        <section ref={ref} className="py-20 lg:py-32 bg-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full mb-6">
                        <Sparkles className="w-4 h-4 text-violet-600" />
                        <span className="text-sm font-semibold text-violet-700">
              Solución integral empresarial
            </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Por qué elegir{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
              FunCy
            </span>
                        {" "}para tu empresa
                    </h2>

                    <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        FunCy ofrece una forma práctica, científica y humana de cuidar la mente de tus equipos.
                        Combina herramientas digitales, ejercicios de respiración y visualización para fortalecer
                        la calma, la concentración y la motivación laboral.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
                    {beneficios.map((beneficio, index) => (
                        <motion.div
                            key={beneficio.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredBenefit(beneficio.id)}
                            onMouseLeave={() => setHoveredBenefit(null)}
                            className={`
                relative p-6 rounded-2xl border-2 border-gray-200
                transition-all duration-300 cursor-pointer
                ${hoveredBenefit === beneficio.id
                                ? 'shadow-2xl border-violet-300 -translate-y-1 bg-gradient-to-br from-white to-violet-50'
                                : 'shadow-md hover:shadow-lg bg-white'
                            }
              `}
                        >
                            <div className={`
                absolute top-0 right-0 w-24 h-24 opacity-10
                bg-gradient-to-br ${colorClasses[beneficio.color]}
                rounded-bl-full
              `} />

                            <div className="relative z-10">
                                <div className="flex items-start gap-4">
                                    <div className={`
                    w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0
                    bg-gradient-to-br ${colorClasses[beneficio.color]}
                    shadow-lg transform transition-transform duration-300
                    ${hoveredBenefit === beneficio.id ? 'scale-110 rotate-3' : ''}
                  `}>
                                        <beneficio.icono className="w-7 h-7 text-white" />
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                                            {beneficio.titulo}
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-3">
                                            {beneficio.descripcion}
                                        </p>

                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: hoveredBenefit === beneficio.id ? 1 : 0.7 }}
                                            className="flex items-center gap-3"
                                        >
                                            <div className="flex items-baseline gap-1">
                        <span className={`
                          text-2xl font-bold text-transparent bg-clip-text
                          bg-gradient-to-r ${colorClasses[beneficio.color]}
                        `}>
                          {beneficio.estadistica}
                        </span>
                                                <span className="text-xs text-gray-500">
                          {beneficio.textoEstadistica}
                        </span>
                                            </div>
                                            <span className="text-2xl">
                        {beneficio.imagen}
                      </span>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto"
                >
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            Características que marcan la diferencia
                        </h3>
                        <p className="text-gray-600">
                            Tecnología y ciencia al servicio del bienestar corporativo
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {caracteristicas.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: 0.8 + (index * 0.1) }}
                                className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm"
                            >
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center flex-shrink-0">
                                    <item.icono className="w-5 h-5 text-violet-600" />
                                </div>
                                <span className="text-sm font-medium text-gray-700">
                  {item.texto}
                </span>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        className="text-center mt-10"
                    >
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default SeccionPorQueElegir