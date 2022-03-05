import {React} from "react";
import './form.css';

const Form = ({data, setData}) => {

    return (
        <div className="form">
            <div class="title container">
                <label for="title">Titulo</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={data.title}
                    onChange={(e) => setData({...data, title: e.target.value})}
                    placeholder="Ej. Mascarilla quirurgica"
                />
            </div>
            <div class="info container">
                <label for="info">Información adicional</label>
                <textarea
                    id="info"
                    name="info"
                    value={data.info}
                    onChange={(e) => setData({...data, info: e.target.value})}
                    placeholder="(Opcional) Ej. Variantes en colores, tamaños, tipo etc."
                    
                >

                </textarea>
            </div>
            <div class="price container">
                <label for="price">Precio</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    value={data.price}
                    onChange={(e) => setData({...data, price: e.target.value})}
                    placeholder="Ej. 3.00"
                />
            </div>
            <div class="promo container">
                <label for="promo">Promoción</label>
                <input
                    type="text"
                    id="promo"
                    name="promo"
                    value={data.promo}
                    onChange={(e) => setData({...data, promo: e.target.value})}
                    placeholder="(Opcional) Ej. De 2 cajas en adelante $2.50"
                />
            </div>
        </div>
    );
};

export default Form;
