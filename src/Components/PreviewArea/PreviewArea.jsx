import React from "react";
import Swal from 'sweetalert2'
import './previewArea.css';

const PreviewArea = ({data, setData}) => {
    console.log(data.title);
    return (
        <section>
            <span className="division"></span>
            <div class="info container">
                <label for="info">Previsualización de descripción</label>
                <textarea
                class="preview"
                readonly={true}
                value={
                    "✅" +
                    data.title +
                    (data.info && "\n") +
                    data.info +
                    "\nPrecio: $" +
                    data.price +
                    (data.promo && "\nPromoción: ") +
                    data.promo +
                    "\n🤳Pedidos por dm o a nuestro Whatsapp 6436-3746" +
                    "\n🚚Entregas en San Salvador" +
                    "\n😉Si desea más información, ¡estamos a la orden!" +
                    "\n." +
                    "\n." +
                    "\n." +
                    "\n#ElSalvador #sivar #mascarillas #promociones."
                }
                >
                </textarea>
            </div>
            <div class="preview-controls">
                <button
                    class="clear button"
                    onClick={()=>setData({title: "",info:"",price: "",promo: ""})}
                >
                    Limpiar
                </button>
                <button
                    class="copy button"
                    onClick={()=>{
                        const description = document.querySelector(".preview");
                        navigator.clipboard.writeText(description.value);
                        Swal.fire({
                            icon: 'success',
                            title: 'Descripción copiada',
                            showConfirmButton: false,
                            timer: 2000,
                            background: '#3a3b3c',
                            color: '#E4E6EB'
                        })
                    }}
                >
                    Copiar
                </button>
            </div>
        </section>
    );
};

export default PreviewArea;
