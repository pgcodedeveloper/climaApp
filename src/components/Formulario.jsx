import { useState } from "react";
import useClima from "../hooks/useClima"

const Formulario = () => {

    const [alerta, setAlerta] = useState('');
    const { busqueda,datosBusqueda,consultarClima } = useClima();
    const {ciudad, pais} = busqueda;

    const handleSubmit = e =>{
        e.preventDefault();

        if(Object.values(busqueda).includes('')){
            setAlerta('Todos los campos son obligatorios');
            return;
        }
        setAlerta('');
        consultarClima(busqueda);
    }
    return (
        <div className='contenedor'>
            {alerta && <p className="alerta">{alerta}</p>}
            <form onSubmit={handleSubmit}>
                <div className="campo">
                    <label htmlFor="pais">País</label>
                    <select name="pais" id="pais" value={pais} onChange={datosBusqueda}>
                        <option value=""> Seleccione un país </option>
                        <option value="US">Estados Unidos</option>
                        <option value="UY">Uruguay</option>
                        <option value="MX">México</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="PE">Perú</option>
                        <option value="ES">España</option>
                    </select>
                </div>

                <div className="campo">
                    <label htmlFor="ciudad">Ciudad</label>
                    <input type="text" id='ciudad' name='ciudad' placeholder='Escribe una ciudad del país' value={ciudad} onChange={datosBusqueda}/>
                </div>

                <input type="submit" value={"Consultar Clima"} />
            </form>
        </div>
    )
}

export default Formulario
