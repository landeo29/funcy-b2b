import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowRight, Clock, X } from 'lucide-react'
import { useState } from 'react'

const TarjetaPaso = ({ paso, index, isActive, onActivate }) => {
    const { numero, titulo, descripcion, icono: Icono, duracion, caracteristicas, color, imagen } = paso
    const [showModal, setShowModal] = useState(false)

    const colorClasses = {
        violet: {
            bg: 'bg-violet-50',
            border: 'border-violet-200',
            icon: 'from-violet-500 to-violet-600',
            text: 'text-violet-600',
            hover: 'hover:border-violet-300'
        },
        purple: {
            bg: 'bg-purple-50',
            border: 'border-purple-200',
            icon: 'from-purple-500 to-purple-600',
            text: 'text-purple-600',
            hover: 'hover:border-purple-300'
        },
        indigo: {
            bg: 'bg-indigo-50',
            border: 'border-indigo-200',
            icon: 'from-indigo-500 to-indigo-600',
            text: 'text-indigo-600',
            hover: 'hover:border-indigo-300'
        }
    }

    const colors = colorClasses[color]

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onClick={onActivate}
                className="relative cursor-pointer group"
            >
                <div className={`
          relative h-full p-6 rounded-2xl border-2 transition-all duration-300
          ${isActive
                    ? `${colors.bg} ${colors.border} shadow-2xl scale-[1.02]`
                    : 'bg-white border-gray-200 hover:shadow-xl'
                }
          ${colors.hover}
        `}>
                    <div className="absolute -top-3 -right-3 w-16 h-16 z-10">
                        <div className={`
              absolute inset-0 rounded-full bg-gradient-to-br ${colors.icon}
              opacity-10 group-hover:opacity-20 transition-opacity
            `} />
                        <div className="absolute inset-2 rounded-full bg-white shadow-md flex items-center justify-center">
              <span className={`text-lg font-bold ${colors.text}`}>
                {numero}
              </span>
                        </div>
                    </div>

                    <div className={`
            w-14 h-14 rounded-xl bg-gradient-to-br ${colors.icon}
            flex items-center justify-center mb-4 shadow-lg
            transform transition-all duration-300
            ${isActive ? 'scale-110 rotate-3' : 'group-hover:scale-105'}
          `}>
                        <Icono className="w-7 h-7 text-white" />
                    </div>

                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-white rounded-full border border-gray-200 mb-4">
                        <Clock className="w-3 h-3 text-gray-500" />
                        <span className="text-xs font-medium text-gray-600">
              {duracion}
            </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                        {titulo}
                    </h3>

                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                        {descripcion}
                    </p>

                    <div className="space-y-2 mb-4">
                        {caracteristicas.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{
                                    opacity: isActive ? 1 : 0.8,
                                    x: 0
                                }}
                                transition={{ delay: 0.3 + (idx * 0.1) }}
                                className="flex items-center gap-2"
                            >
                                <div className={`
                  w-5 h-5 rounded-full flex items-center justify-center
                  ${isActive ? `bg-gradient-to-br ${colors.icon}` : 'bg-gray-200'}
                `}>
                                    <Check className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-sm text-gray-700">
                  {item}
                </span>
                            </motion.div>
                        ))}
                    </div>

                    <motion.button
                        onClick={(e) => {
                            e.stopPropagation()
                            setShowModal(true)
                        }}
                        animate={{ x: isActive ? 5 : 0 }}
                        className={`
              relative z-20 flex items-center gap-2 text-sm font-semibold
              ${colors.text} opacity-80 group-hover:opacity-100
              transition-all duration-300 hover:underline
            `}
                    >
                        <span>Ver detalles</span>
                        <ArrowRight className="w-4 h-4" />
                    </motion.button>

                    <div className={`
            absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
            bg-gradient-to-br ${colors.icon} transition-opacity duration-500 pointer-events-none
          `} style={{ opacity: 0.02 }} />
                </div>

                {isActive && (
                    <motion.div
                        layoutId="activeIndicator"
                        className={`
              absolute -bottom-2 left-1/2 transform -translate-x-1/2
              px-3 py-1 bg-gradient-to-r ${colors.icon}
              text-white text-xs font-semibold rounded-full shadow-lg z-10
            `}
                    >
                        Paso activo
                    </motion.div>
                )}
            </motion.div>

            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
                        onClick={() => setShowModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="relative max-w-5xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute -top-12 right-0 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors z-10"
                            >
                                <X className="w-5 h-5 text-gray-700" />
                            </button>

                            <div className="relative w-full h-[90vh] rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                                {imagen ? (
                                    <img
                                        src={imagen}
                                        alt={titulo}
                                        className="w-full h-full object-contain"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-96">
                                        <div className="text-center">
                                            <Icono className={`w-20 h-20 mx-auto mb-4 text-white opacity-50`} />
                                            <p className="text-white">Imagen no disponible</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default TarjetaPaso