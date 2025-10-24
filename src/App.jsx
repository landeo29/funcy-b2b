import SeccionHero from './componentes/secciones/SeccionHero'
import SeccionBeneficios from './componentes/secciones/SeccionBeneficios'
import SeccionPorQueElegir from './componentes/secciones/SeccionPorQueElegir'
import SeccionComoFunciona from './componentes/secciones/SeccionComoFunciona'
import SeccionEmpresas from './componentes/secciones/SeccionEmpresas'
import SeccionResultados from './componentes/secciones/SeccionResultados'
import SeccionTestimonios from './componentes/secciones/SeccionTestimonios'
import SeccionCTA from './componentes/secciones/SeccionCTA'
import Footer from './componentes/secciones/Footer'
import BotonWhatsApp from './componentes/comunes/BotonWhatsApp'


function App() {
    return (
        <div className="min-h-screen bg-gray-50">
            <SeccionHero />
            <SeccionBeneficios />
            <SeccionPorQueElegir />
            <SeccionComoFunciona />
            <SeccionEmpresas />
            <SeccionResultados />
            <SeccionCTA />
            <SeccionTestimonios />
            <Footer />
            <BotonWhatsApp />
        </div>
    )
}

export default App