import { motion } from 'framer-motion'
import { useState } from 'react'
import {
    Quote,
    Star,
    Building2,
    TrendingDown,
    Heart,
    ChevronRight
} from 'lucide-react'

const TarjetaTestimonio = ({ testimonio, index }) => {
    const [isHovered, setIsHovered] = useState(false)
    const { nombre, cargo, empresa, testimonio: texto, avatar, color, metricas } = testimonio

    const colorClasses = {
        violet: {
            bg: 'from-violet-50 to-purple-50',
            border: 'border-violet-200',
            avatar: 'from-violet-500 to-violet-600',
            text: 'text-violet-600',
            quote: 'text-violet-400'
        },
        purple: {
            bg: 'from-purple-50 to-violet-50',
            border: 'border-purple-200',
            avatar: 'from-purple-500 to-purple-600',
            text: 'text-purple-600',
            quote: 'text-purple-400'
        }
    }

    const colors = colorClasses[color]

    return (
        <motion.div
            initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + (index * 0.2) }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative"
        >
            <div className={`
        relative h-full p-8 rounded-2xl border-2 ${colors.border}
        bg-gradient-to-br ${colors.bg}
        transition-all duration-300 hover:shadow-2xl
        ${isHovered ? 'scale-[1.02]' : ''}
      `}>
                <Quote className={`absolute top-4 right-4 w-12 h-12 ${colors.quote} opacity-20 rotate-180`} />

                <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.5 + (i * 0.1) }}
                        >
                            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        </motion.div>
                    ))}
                </div>

                <blockquote className="mb-6">
                    <p className="text-lg text-gray-700 leading-relaxed italic">
                        "{texto}"
                    </p>
                </blockquote>

                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-white/50 rounded-xl">
                    <div className="flex items-center gap-2">
                        <TrendingDown className={`w-4 h-4 ${colors.text}`} />
                        <div>
                            <div className="text-sm font-bold text-gray-900">
                                {metricas.reduccionEstres}
                            </div>
                            <div className="text-xs text-gray-600">
                                menos estrés
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Heart className={`w-4 h-4 ${colors.text}`} />
                        <div>
                            <div className="text-sm font-bold text-gray-900">
                                {metricas.satisfaccion}
                            </div>
                            <div className="text-xs text-gray-600">
                                satisfacción
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className={`
            w-14 h-14 rounded-full bg-gradient-to-br ${colors.avatar}
            flex items-center justify-center text-white font-bold text-lg
            shadow-lg transform transition-transform duration-300
            ${isHovered ? 'scale-110 rotate-3' : ''}
          `}>
                        {avatar}
                    </div>

                    <div className="flex-1">
                        <h4 className="font-bold text-gray-900">
                            {nombre}
                        </h4>
                        <p className="text-sm text-gray-600">
                            {cargo}
                        </p>
                        <div className="flex items-center gap-1 mt-1">
                            <Building2 className="w-3 h-3 text-gray-500" />
                            <span className={`text-sm font-semibold ${colors.text}`}>
                {empresa}
              </span>
                        </div>
                    </div>

                    <motion.div
                        animate={{ x: isHovered ? 5 : 0 }}
                        className={`${colors.text} opacity-50`}
                    >
                        <ChevronRight className="w-5 h-5" />
                    </motion.div>
                </div>

                <div className="absolute -top-3 left-8">
                    <div className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg flex items-center gap-1">
                        ✓ Testimonio verificado
                    </div>
                </div>

                <div className={`
          absolute inset-0 rounded-2xl opacity-0
          bg-gradient-to-br from-white/20 to-transparent
          transition-opacity duration-500
          ${isHovered ? 'opacity-100' : ''}
        `} />
            </div>
        </motion.div>
    )
}

export default TarjetaTestimonio