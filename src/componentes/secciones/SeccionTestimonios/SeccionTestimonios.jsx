import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import TarjetaTestimonio from './TarjetaTestimonio'
import {
    Quote,
    Star,
    Users,
    Heart,
    Sparkles
} from 'lucide-react'

const SeccionTestimonios = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const testimonios = [
        {
            id: 1,
            nombre: 'C M',
            cargo: 'Gerente de Personas',
            empresa: 'Grupo EDO',
            testimonio: 'Desde que usamos FunCy, los equipos se sienten más tranquilos y enfocados. Las pausas guiadas han mejorado el ambiente de trabajo.',
            avatar: 'CM',
            color: 'violet',
            metricas: {
                reduccionEstres: '95%',
                satisfaccion: '92%'
            }
        },
        {
            id: 2,
            nombre: 'O L ',
            cargo: 'Directora de RRHH',
            empresa: 'Novotel Perú',
            testimonio: 'La herramienta ayudó a disminuir el agotamiento y aumentar la motivación. Hoy tenemos un equipo más consciente y productivo.',
            avatar: 'OL',
            color: 'purple',
            metricas: {
                reduccionEstres: '95%',
                satisfaccion: '90%'
            }
        }
    ]

    return (
        <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            <div className="absolute top-20 left-0 w-72 h-72 bg-violet-100 rounded-full blur-3xl opacity-20" />
            <div className="absolute bottom-20 right-0 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-20" />

            <div className="absolute inset-0 opacity-[0.02]">
                <svg className="w-full h-full">
                    <pattern id="quotes-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                        <text x="10" y="50" fontSize="40" fill="currentColor">"</text>
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#quotes-pattern)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full mb-6">
                        <Heart className="w-4 h-4 text-violet-600" />
                        <span className="text-sm font-semibold text-violet-700">
              Testimonios reales
            </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Historias que{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
              inspiran
            </span>
                    </h2>

                    <p className="text-lg text-gray-600 leading-relaxed">
                        Escucha lo que dicen los líderes de personas sobre el impacto de FunCy en sus organizaciones.
                    </p>
                </motion.div>

                <div className="max-w-6xl mx-auto relative">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                        {testimonios.map((testimonio, index) => (
                            <TarjetaTestimonio
                                key={testimonio.id}
                                testimonio={testimonio}
                                index={index}
                            />
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-12 max-w-4xl mx-auto"
                >
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-purple-600/20 z-10"></div>
                        <img
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
                            alt="Equipo colaborando"
                            className="w-full h-64 md:h-80 object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            <div className="text-center text-white px-6">
                                <h3 className="text-2xl md:text-3xl font-bold mb-2 drop-shadow-lg">
                                    Transformando equipos cada día
                                </h3>
                                <p className="text-lg drop-shadow-lg opacity-90">
                                    Más de 1000 colaboradores beneficiados
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-12"
                >
                    <div className="inline-flex items-center gap-2 text-violet-600">
                        <Users className="w-5 h-5" />
                        <span className="text-sm font-semibold">
               empresas confían en nosotros
            </span>
                        <Sparkles className="w-5 h-5" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default SeccionTestimonios