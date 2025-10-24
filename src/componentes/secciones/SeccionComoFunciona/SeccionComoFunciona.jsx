import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import TarjetaPaso from './TarjetaPaso'
import fun1 from '../../../utilidades/assets/img/comofunciona/fun1.jpeg';
import fun2 from '../../../utilidades/assets/img/comofunciona/fun2.jpeg';
import fun3 from '../../../utilidades/assets/img/comofunciona/fun3.png';


import {
    ClipboardCheck,
    Sparkles,
    BarChart3,
    ArrowRight,
    CheckCircle,
    Zap,
    Users,
    Calendar,
    Settings
} from 'lucide-react'

const SeccionComoFunciona = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [activeStep, setActiveStep] = useState(1)

    const pasos = [
        {
            id: 1,
            numero: "01",
            titulo: "Evaluamos el nivel de estrés y bienestar actual de tu equipo",
            descripcion: "Realizamos un diagnóstico inicial mediante cuestionarios validados científicamente para entender el estado actual de tus colaboradores.",
            icono: ClipboardCheck,
            duracion: "15 min por persona",
            caracteristicas: [
                "Evaluación confidencial",
                "Métricas basadas en ciencia",
                "Reporte ejecutivo detallado"
            ],
            color: "violet",
            imagen: fun1
        },
        {
            id: 2,
            numero: "02",
            titulo: "Diseñamos un plan digital de microentrenamientos funcionales",
            descripcion: "Creamos un programa personalizado con ejercicios de 5-10 minutos adaptados a las necesidades específicas de tu empresa.",
            icono: Sparkles,
            duracion: "Plan personalizado",
            caracteristicas: [
                "Contenido adaptado",
                "Ejercicios prácticos",
                "Acceso multiplataforma"
            ],
            color: "purple",
            imagen: fun2
        },
        {
            id: 3,
            numero: "03",
            titulo: "Monitoreamos resultados con un dashboard de bienestar corporativo",
            descripcion: "Seguimiento en tiempo real del progreso con métricas claras y reportes automatizados para RR.HH.",
            icono: BarChart3,
            duracion: "Dashboard 24/7",
            caracteristicas: [
                "Métricas en tiempo real",
                "Reportes mensuales",
                "Métricas basadas en Análisis de Datos"
            ],
            color: "indigo",
            imagen: fun3
        }
    ]

    const timeline = [
        { semana: "Semana 1", actividad: "Evaluación inicial", icono: ClipboardCheck },
        { semana: "Semana 2", actividad: "Onboarding digital", icono: Users },
        { semana: "Semana 3", actividad: "Primeros resultados", icono: BarChart3 },
        { semana: "Semana 4 +", actividad: "Optimización continua", icono: Settings }
    ]

    return (
        <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-200 rounded-full blur-3xl opacity-20 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20" />

            <svg className="absolute inset-0 w-full h-full opacity-5" preserveAspectRatio="none">
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full mb-6">
                        <Zap className="w-4 h-4 text-violet-600" />
                        <span className="text-sm font-semibold text-violet-700">
              Implementación simple y rápida
            </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Cómo funciona{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
              FunCy
            </span>
                        {" "}en tu empresa
                    </h2>

                    <p className="text-lg text-gray-600 leading-relaxed">
                        Implementar FunCy es simple y no requiere instalación compleja.
                        Tu equipo empieza a entrenar su bienestar desde el primer día.
                    </p>
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="hidden md:flex items-center justify-center mb-12 px-8"
                    >
                        {pasos.map((paso, index) => (
                            <div key={paso.id} className="flex items-center">
                                <div className="flex flex-col items-center">
                                    <motion.div
                                        animate={{
                                            scale: activeStep === paso.id ? 1.2 : 1,
                                            backgroundColor: activeStep >= paso.id ? '#7c3aed' : '#e9d5ff'
                                        }}
                                        className={`
                      w-12 h-12 rounded-full flex items-center justify-center
                      font-bold text-sm transition-all duration-300 cursor-pointer
                      ${activeStep >= paso.id ? 'text-white shadow-lg' : 'text-violet-600'}
                    `}
                                        onClick={() => setActiveStep(paso.id)}
                                    >
                                        {paso.numero}
                                    </motion.div>
                                    <span className="text-xs text-gray-500 mt-2 text-center max-w-[100px]">
                    Paso {paso.id}
                </span>
                                </div>
                                {index < pasos.length - 1 && (
                                    <div className="w-32 h-1 bg-gray-200 mx-4 relative">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{
                                                width: activeStep > paso.id ? '100%' : '0%'
                                            }}
                                            transition={{ duration: 0.5 }}
                                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-violet-600 to-purple-600"
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                        {pasos.map((paso, index) => (
                            <TarjetaPaso
                                key={paso.id}
                                paso={paso}
                                index={index}
                                isActive={activeStep === paso.id}
                                onActivate={() => setActiveStep(paso.id)}
                            />
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-8 md:p-10"
                    >
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full mb-4">
                                <Calendar className="w-4 h-4 text-violet-600" />
                                <span className="text-sm font-semibold text-violet-700">
                  Timeline de implementación
                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                Tu equipo verá resultados desde la primera semana
                            </h3>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: 0.9 + (index * 0.1) }}
                                    className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center">
                                        <item.icono className="w-5 h-5 text-violet-600" />
                                    </div>
                                    <div className="text-xs font-semibold text-violet-600 mb-1">
                                        {item.semana}
                                    </div>
                                    <div className="text-sm text-gray-700">
                                        {item.actividad}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        className="text-center mt-12"
                    >


                        <p className="mt-4 text-sm text-gray-600">
              <span className="inline-flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Sin instalaciones complejas • Resultados desde el día 1
              </span>
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default SeccionComoFunciona