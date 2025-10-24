/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { ArrowRight, Play, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const BotonesHero = () => {
    const [isHoveredDemo, setIsHoveredDemo] = useState(false)
    const [isHoveredVideo, setIsHoveredVideo] = useState(false)

    const handleSolicitarDemo = () => {
        // Abrir Google Play Store
        window.open('https://play.google.com/store/apps/details?id=com.funcionalneurolaboral.fnlapp', '_blank')
    }

    const handleVerVideo = () => {
        // Abrir WhatsApp con el número proporcionado
        const phoneNumber = '51948330613' // Formato internacional sin + ni espacios
        const message = encodeURIComponent('Hola, me gustaría solicitar un demo empresarial de FunCy')
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
    }

    return (
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Botón Principal - Descargar App */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsHoveredDemo(true)}
                onHoverEnd={() => setIsHoveredDemo(false)}
                onClick={handleSolicitarDemo}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
                {/* Efecto de brillo en hover */}
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700`} />

                <Sparkles className="w-5 h-5 mr-2" />
                <span>Descargar App</span>
                <ArrowRight className={`w-5 h-5 ml-2 transition-transform duration-300 ${isHoveredDemo ? 'translate-x-1' : ''}`} />
            </motion.button>

            {/* Botón Secundario - Solicitar Demo */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsHoveredVideo(true)}
                onHoverEnd={() => setIsHoveredVideo(false)}
                onClick={handleVerVideo}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
                <Play className={`w-5 h-5 mr-2 transition-transform duration-300 ${isHoveredVideo ? 'scale-110' : ''}`} />
                <span>Solicita un demo empresarial</span>
            </motion.button>
        </div>
    )
}

export default BotonesHero