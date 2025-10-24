import { motion } from 'framer-motion'
import { useState } from 'react'
import { Check, ArrowRight } from 'lucide-react'

const TarjetaBeneficio = ({ beneficio, index }) => {
    const [isHovered, setIsHovered] = useState(false)

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: index * 0.2
            }
        }
    }

    const colorClasses = {
        violet: {
            bg: 'from-violet-500 to-purple-600',
            border: 'border-violet-200',
            text: 'text-violet-700',
            badge: 'bg-violet-100 text-violet-700'
        },
        purple: {
            bg: 'from-purple-500 to-indigo-600',
            border: 'border-purple-200',
            text: 'text-purple-700',
            badge: 'bg-purple-100 text-purple-700'
        },
        indigo: {
            bg: 'from-indigo-500 to-blue-600',
            border: 'border-indigo-200',
            text: 'text-indigo-700',
            badge: 'bg-indigo-100 text-indigo-700'
        }
    }

    const colors = colorClasses[beneficio.color]

    return (
        <motion.div
            variants={cardVariants}
            className="group relative"
        >
            <div className={`relative bg-white rounded-2xl border-2 ${colors.border} p-8 h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}>
                <div className={`absolute -top-3 -right-3 ${colors.badge} px-4 py-1 rounded-full text-sm font-semibold shadow-lg`}>
                    {beneficio.metricas}
                </div>

                <motion.div
                    animate={{
                        scale: isHovered ? 1.1 : 1
                    }}
                    transition={{ duration: 0.3 }}
                    className="mb-6"
                >
                    <img
                        src={beneficio.imagen}
                        alt={beneficio.titulo}
                        className="w-24 h-24 object-contain"
                    />
                </motion.div>

                <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold mb-4 ${colors.badge}`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                    {beneficio.metricas}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {beneficio.titulo}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                    {beneficio.descripcion}
                </p>

                <div className="space-y-2 mb-6">
                    {beneficio.efectos.map((efecto, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{
                                opacity: isHovered ? 1 : 0.7,
                                x: isHovered ? 0 : -10
                            }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center gap-2 text-sm text-gray-600"
                        >
                            <div className={`flex-shrink-0 w-4 h-4 rounded-full bg-gradient-to-br ${colors.bg} flex items-center justify-center`}>
                                <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                            </div>
                            <span>{efecto}</span>
                        </motion.div>
                    ))}
                </div>

            </div>
        </motion.div>
    )
}

export default TarjetaBeneficio