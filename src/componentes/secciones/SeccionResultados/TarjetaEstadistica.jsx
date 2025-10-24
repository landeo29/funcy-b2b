import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useState } from 'react'
import { TrendingUp, Info } from 'lucide-react'

const TarjetaEstadistica = ({ resultado, index, isSelected, onSelect }) => {
    const { valor, simbolo, titulo, descripcion, icono: Icono, color, grafico } = resultado
    const [displayValue, setDisplayValue] = useState(0)

    useEffect(() => {
        const controls = animate(0, valor, {
            duration: 2,
            delay: index * 0.2,
            ease: "easeOut",
            onUpdate: (v) => setDisplayValue(Math.round(v))
        })

        return () => controls.stop()
    }, [valor, index])

    const colorClasses = {
        green: {
            bg: 'from-green-500 to-emerald-600',
            light: 'from-green-50 to-emerald-50',
            text: 'text-green-600',
            border: 'border-green-200'
        },
        purple: {
            bg: 'from-purple-500 to-violet-600',
            light: 'from-purple-50 to-violet-50',
            text: 'text-purple-600',
            border: 'border-purple-200'
        },
        blue: {
            bg: 'from-blue-500 to-cyan-600',
            light: 'from-blue-50 to-cyan-50',
            text: 'text-blue-600',
            border: 'border-blue-200'
        }
    }

    const colors = colorClasses[color]

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
            onClick={onSelect}
            className={`
        relative cursor-pointer group
        ${isSelected ? 'z-10' : 'z-0'}
      `}
        >
            <div className={`
        relative h-full p-6 rounded-2xl border-2 transition-all duration-300
        ${isSelected
                ? `bg-gradient-to-br ${colors.light} ${colors.border} shadow-2xl`
                : 'bg-white border-gray-200 hover:shadow-xl'
            }
      `}>
                <div className="absolute top-4 right-4 opacity-10">
                    <svg width="120" height="60" className={colors.text}>
                        <polyline
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            points={grafico.map((val, i) => `${i * 20},${60 - (val * 0.6)}`).join(' ')}
                        />
                        <polyline
                            fill="url(#gradient)"
                            fillOpacity="0.3"
                            points={`0,60 ${grafico.map((val, i) => `${i * 20},${60 - (val * 0.6)}`).join(' ')} ${(grafico.length - 1) * 20},60`}
                        />
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="currentColor" />
                                <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className={`
          w-14 h-14 rounded-xl bg-gradient-to-br ${colors.bg}
          flex items-center justify-center mb-4 shadow-lg
          transform transition-all duration-300
          ${isSelected ? 'scale-110 rotate-3' : 'group-hover:scale-105'}
        `}>
                    <Icono className="w-7 h-7 text-white" />
                </div>

                <div className="mb-2">
                    <span className="text-4xl md:text-5xl font-bold text-gray-900">
                        {displayValue}
                    </span>
                    <span className="text-4xl md:text-5xl font-bold text-gray-900">
                        {simbolo}
                    </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {titulo}
                </h3>

                <p className="text-sm text-gray-600 mb-4">
                    {descripcion}
                </p>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <TrendingUp className={`w-4 h-4 ${colors.text}`} />
                        <span className={`text-xs font-semibold ${colors.text}`}>
              Mejora continua
            </span>
                    </div>

                    <motion.div
                        animate={{ rotate: isSelected ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`
              w-6 h-6 rounded-full flex items-center justify-center
              ${isSelected ? `bg-gradient-to-br ${colors.bg}` : 'bg-gray-200'}
            `}
                    >
                        <Info className={`w-3 h-3 ${isSelected ? 'text-white' : 'text-gray-600'}`} />
                    </motion.div>
                </div>

                <div className="absolute -top-2 -left-2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs px-2 py-1 rounded-full font-semibold shadow-md">
                        Validado
                    </div>
                </div>

                <div className={`
          absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
          bg-gradient-to-br ${colors.bg} transition-opacity duration-500
        `} style={{ opacity: 0.03 }} />
            </div>
        </motion.div>
    )
}

export default TarjetaEstadistica