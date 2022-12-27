import Formulario from "./Formulario"
import Spinner from "./Spinner"
import Resultado from "./Resultado"
import useClima from "../hooks/useClima"
const AppClima = () => {

    const { resultado, cargando, noResultado } = useClima();
    return (
        <>
            <main className="dos-columnas">
                <Formulario />
                {cargando ? <Spinner /> : resultado?.name ? <Resultado /> : noResultado ? <p>{noResultado}</p> : <p>El Clima se va a mostrar aquí</p>}
            </main>
        </>
    )
}

export default AppClima
