import {React} from "react";
import './form.css';

const Form = ({data, setData}) => {

    return (
        <div className="form">
            <div className="title container">
                <label htmlFor="title">Titulo</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={data.title}
                    onChange={(e) => setData({...data, title: e.target.value})}
                    placeholder="Ej. Mascarilla quirúrgica"
                />
            </div>
            <div className="info container">
                <label htmlFor="info">Información adicional</label>
                <textarea
                    id="info"
                    name="info"
                    value={data.info}
                    onChange={(e) => setData({...data, info: e.target.value})}
                    placeholder="(Opcional) Ej. Variantes en colores, tamaños, tipo etc."
                >
                </textarea>
            </div>
            <div className="price container">
                <label htmlFor="price">Precio</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    value={data.price}
                    onChange={(e) => setData({...data, price: e.target.value})}
                    placeholder="Ej. 3.00"
                />
            </div>
            <div className="promo container">
                <label htmlFor="promo">Promoción</label>
                <input
                    type="text"
                    id="promo"
                    name="promo"
                    value={data.promo}
                    onChange={(e) => setData({...data, promo: e.target.value})}
                    placeholder="(Opcional) Ej. De 2 cajas en adelante $2.50"
                />
            </div>
            <div className="hashtag container">
                <label htmlFor="promo">Hashtags</label>
                <input
                    type="text"
                    id="hashtag"
                    name="hashtag"
                    value={data.hashtag}
                    onChange={(e) => setData({...data, hashtag: e.target.value})}
                    placeholder="(Opcional) Ej. Mascarillas, Salud"
                />
            </div>
        </div>
    );
};

export default Form;
