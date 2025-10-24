import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import TarjetaEstadistica from './TarjetaEstadistica'
import {
    TrendingDown,
    Brain,
    Battery,
    ChartBar,
    Clock,
    Users,
    Award,
    CheckCircle,
    Activity,
    Target,
    Sparkles,
    FileText
} from 'lucide-react'

const SeccionResultados = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [selectedMetric, setSelectedMetric] = useState(null)

    const resultadosPrincipales = [
        {
            id: 1,
            valor: 95,
            simbolo: '%',
            titulo: 'menos estrés percibido',
            descripcion: 'en 4 semanas',
            icono: TrendingDown,
            color: 'green',
            grafico: [85, 78, 70, 62, 58, 53],

        },
        {
            id: 2,
            valor: 90,
            simbolo: '%',
            titulo: 'más concentración y energía laboral',
            descripcion: 'mejora continua',
            icono: Brain,
            color: 'purple',
            grafico: [40, 48, 55, 62, 70, 85],

        },
        {
            id: 3,
            valor: 95,
            simbolo: '%',
            titulo: 'reportan bienestar emocionalr',
            descripcion: 'calidad de vida',
            icono: Battery,
            color: 'blue',
            grafico: [30, 38, 45, 58, 68, 78],

        }
    ]

    const metricasSecundarias = [
        { icono: Users, valor: '95%', texto: 'satisfacción del equipo' },
        { icono: Clock, valor: '5-10', texto: 'minutos por ejercicio' },
        { icono: Target, valor: '3x', texto: 'ROI en productividad' },
        { icono: Award, valor: 'A+', texto: 'certificación bienestar' }
    ]

    const timeline = [
        { semana: 'Semana 1', cambio: 'Primeros signos de mejora' },
        { semana: 'Semana 2', cambio: 'Reducción notable del estrés' },
        { semana: 'Semana 3', cambio: 'Mejor comunicación en equipos' },
        { semana: 'Semana 4', cambio: 'Resultados consolidados' }
    ]

    return (
        <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-20" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20" />

            <div className="absolute inset-0 opacity-[0.02]">
                <svg className="w-full h-full">
                    <pattern id="grid-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M0 40L40 0M0 0L40 40" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-6">
                        <ChartBar className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">
              Métricas validadas científicamente
            </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Resultados que se pueden{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              medir
            </span>
                    </h2>

                    <p className="text-lg text-gray-600 leading-relaxed">
                        Los programas de bienestar implementados con FunCy muestran
                        mejoras reales en pocas semanas.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
                    {resultadosPrincipales.map((resultado, index) => (
                        <TarjetaEstadistica
                            key={resultado.id}
                            resultado={resultado}
                            index={index}
                            isSelected={selectedMetric === resultado.id}
                            onSelect={() => setSelectedMetric(resultado.id === selectedMetric ? null : resultado.id)}
                        />
                    ))}
                </div>


                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="max-w-5xl mx-auto mb-12"
                >
                    <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-3xl p-8">
                        <h3 className="text-xl font-bold text-center mb-8">
                            Evolución semana a semana
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4, delay: 0.7 + (index * 0.1) }}
                                    className="relative"
                                >
                                    {index < timeline.length - 1 && (
                                        <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-violet-300 to-purple-300" />
                                    )}

                                    <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold">
                                                {index + 1}
                                            </div>
                                            <div className="text-sm font-semibold text-violet-700">
                                                {item.semana}
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            {item.cambio}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
                >
                    {metricasSecundarias.map((metrica, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4, delay: 0.9 + (index * 0.1) }}
                            whileHover={{ scale: 1.05 }}
                            className="text-center group cursor-pointer"
                        >
                            <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                                <metrica.icono className="w-7 h-7 text-violet-600" />
                            </div>
                            <div className="text-2xl font-bold text-gray-900 mb-1">
                                {metrica.valor}
                            </div>
                            <div className="text-xs text-gray-600">
                                {metrica.texto}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="bg-white rounded-2xl shadow-lg p-6 max-w-3xl mx-auto border border-gray-100"
                >
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                            <FileText className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                                Datos verificados y auditados
                            </h3>
                            <p className="text-sm text-gray-600 mb-3">
                <span className="inline-flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Datos obtenidos en pilotos con empresas peruanas del sector servicios e industria.
                </span>
                            </p>
                            <p className="text-sm text-gray-600">
                                Metodología validada por especialistas en psicología organizacional y neurociencia aplicada.
                                Mediciones realizadas con instrumentos estandarizados internacionalmente.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default SeccionResultados

