import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import CarruselLogos from './CarruselLogos'
import emp1 from '../../../utilidades/assets/img/empresas/novotel.png';
import emp2 from '../../../utilidades/assets/img/empresas/edo.png';
import emp3 from '../../../utilidades/assets/img/empresas/roker.png';
import emp4 from '../../../utilidades/assets/img/empresas/esan.png';

import {
    Award,
    Users,
    Building2,
    TrendingUp,
    Star,
    CheckCircle,
    Globe,
    Briefcase
} from 'lucide-react'

const SeccionEmpresas = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const empresas = [
        {
            id: 1,
            nombre: 'Novotel',
            logo: emp1,
            industria: 'Hotelería',
            empleados: '150+',
            testimonial: 'FunCy transformó nuestro ambiente laboral'
        },
        {
            id: 2,
            nombre: 'Grupo EDO',
            logo: emp2,
            industria: 'Restaurantes',
            empleados: '200+',
            testimonial: 'Reducción significativa del estrés en el equipo'
        },
        {
            id: 3,
            nombre: 'Roker',
            logo: emp3,
            industria: 'Farmaceutica',
            empleados: '100+',
            testimonial: 'Mejor comunicación entre departamentos'
        },
        {
            id: 4,
            nombre: 'Innova ESAN',
            logo: emp4,
            industria: 'Educación',
            empleados: '50+',
            testimonial: 'Herramienta clave para el bienestar docente'
        }
    ]

    const estadisticas = [
        { icono: Building2, valor: '50+', label: 'Empresas activas' },
        { icono: Users, valor: '1000+', label: 'Colaboradores beneficiados' },
        { icono: Globe, valor: '8', label: 'Países' },
        { icono: Star, valor: '5', label: 'Satisfacción' }
    ]

    const industrias = [
        'Restaurantes', 'Hotelería', 'Farmaceutica', 'Educación',
        'Finanzas', 'Salud', 'Manufactura', 'Servicios'
    ]

    return (
        <section ref={ref} className="py-20 lg:py-32 bg-white relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-50/50 via-white to-purple-50/50" />
                <div
                    className="absolute inset-0 opacity-[0.015]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full mb-6">
                        <Award className="w-4 h-4 text-violet-600" />
                        <span className="text-sm font-semibold text-violet-700">
              Confianza empresarial
            </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Empresas que confían en{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
              FunCy
            </span>
                        <span className="block mt-2">para cuidar el bienestar de su gente</span>
                    </h2>

                    <p className="text-lg text-gray-600 leading-relaxed">
                        Organizaciones de distintos sectores ya utilizan FunCy para fortalecer
                        el bienestar y la productividad de sus colaboradores.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16"
                >
                    {estadisticas.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                            className="text-center group cursor-pointer"
                        >
                            <div className="relative">
                                <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                                    <stat.icono className="w-8 h-8 text-violet-600" />
                                </div>
                                {index === 3 && (
                                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                                        <Star className="w-3 h-3 text-white fill-white" />
                                    </div>
                                )}
                            </div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                            >
                                <div className="text-3xl font-bold text-gray-900 mb-1">
                                    {stat.valor}
                                </div>
                                <div className="text-sm text-gray-600">
                                    {stat.label}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                <CarruselLogos empresas={empresas} />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12"
                >
                    {empresas.map((empresa, index) => (
                        <motion.div
                            key={empresa.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
                            whileHover={{ scale: 1.05 }}
                            className="group relative"
                        >
                            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-violet-200">
                                <div className="h-20 flex items-center justify-center mb-4 grayscale group-hover:grayscale-0 transition-all duration-300">
                                    <img
                                        src={empresa.logo}
                                        alt={empresa.nombre}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>

                                <div className="text-center">
                                    <div className="text-xs text-gray-500 mb-1">
                                        {empresa.industria}
                                    </div>
                                    <div className="flex items-center justify-center gap-1 text-violet-600">
                                        <Users className="w-3 h-3" />
                                        <span className="text-xs font-semibold">
                      {empresa.empleados}
                    </span>
                                    </div>
                                </div>

                                <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 -top-14 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap transition-all duration-300 z-10">
                                    "{empresa.testimonial}"
                                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-8 max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full mb-4 shadow-lg">
                        <TrendingUp className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        Más de 500 colaboradores ya han reducido su estrés y mejorado su enfoque
                    </h3>

                    <p className="text-gray-600 mb-6">
                        Únete a las empresas líderes que están transformando su cultura organizacional
                    </p>

                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                        {industrias.map((industria, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3, delay: 0.9 + (index * 0.05) }}
                                className="inline-flex items-center gap-1 px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-600 shadow-sm"
                            >
                                <CheckCircle className="w-3 h-3 text-green-500" />
                                {industria}
                            </motion.span>
                        ))}
                    </div>

                </motion.div>
            </div>
        </section>
    )
}

export default SeccionEmpresas