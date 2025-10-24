import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'

const BotonWhatsApp = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [showTooltip, setShowTooltip] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    const numeroWhatsApp = '51948330613' // Sin el +
    const mensaje = '¡Hola! Me gustaría solicitar información sobre FunCy para mi empresa.'

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, 2000)

        const tooltipTimer = setTimeout(() => {
            setShowTooltip(true)
            setTimeout(() => setShowTooltip(false), 5000)
        }, 5000)

        return () => {
            clearTimeout(timer)
            clearTimeout(tooltipTimer)
        }
    }, [])

    const handleClick = () => {
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`
        window.open(url, '_blank')
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    <AnimatePresence>
                        {(showTooltip || isHovered) && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.8, x: 20 }}
                                className="fixed bottom-[88px] right-8 z-40 pointer-events-none"
                            >
                                <div className="bg-white rounded-lg shadow-2xl p-4 relative max-w-[240px] border border-gray-100">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            setShowTooltip(false)
                                        }}
                                        className="absolute -top-2 -right-2 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors pointer-events-auto"
                                    >
                                        <X className="w-3 h-3 text-gray-600" />
                                    </button>

                                    <p className="text-sm font-medium text-gray-800 mb-1">
                                        💬 ¿Necesitas ayuda?
                                    </p>
                                    <p className="text-xs text-gray-600">
                                        Chatea con nosotros por WhatsApp. ¡Respuesta inmediata!
                                    </p>

                                    <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-gray-100 transform rotate-45" />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <motion.button
                        initial={{ scale: 0, opacity: 0, rotate: -180 }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                            rotate: 0,
                        }}
                        exit={{ scale: 0, opacity: 0, rotate: 180 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                        }}
                        onClick={handleClick}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className="fixed bottom-8 right-8 z-50 group"
                        aria-label="Contactar por WhatsApp"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25" />

                            <div className="relative w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center">
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-white fill-white"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                </svg>
                            </div>

                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5 }}
                                className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"
                            />
                        </div>
                    </motion.button>

                    <AnimatePresence>
                        {isHovered && (
                            <motion.div
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                className="fixed bottom-11 right-24 z-40 pointer-events-none"
                            >
                                <div className="bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap">
                                    Chatea con nosotros
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </>
            )}
        </AnimatePresence>
    )
}

export default BotonWhatsApp