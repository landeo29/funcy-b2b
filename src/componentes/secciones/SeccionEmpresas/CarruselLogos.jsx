import { motion } from 'framer-motion'
import { useState } from 'react'

const CarruselLogos = ({ empresas }) => {
    const [isPaused, setIsPaused] = useState(false)

    const logosExtendidos = [...empresas, ...empresas]

    return (
        <div
            className="relative overflow-hidden py-8 mb-12"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <motion.div
                className="flex gap-12"
                animate={{
                    x: isPaused ? 0 : '-50%'
                }}
                transition={{
                    x: {
                        duration: 30,
                        repeat: Infinity,
                        ease: 'linear',
                        repeatType: 'loop'
                    }
                }}
            >
                {logosExtendidos.map((empresa, index) => (
                    <div
                        key={`${empresa.id}-${index}`}
                        className="flex-shrink-0 w-48 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 px-6 border border-gray-100 grayscale hover:grayscale-0"
                    >
                        <img
                            src={empresa.logo}
                            alt={empresa.nombre}
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default CarruselLogos