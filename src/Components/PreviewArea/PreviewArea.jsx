import React from "react";
import Swal from 'sweetalert2'
import './previewArea.css';

const PreviewArea = ({data, setData}) => {
    const hashtagsArray = data.hashtag.replace(/\s+/g, '').split(',');
    const newHashtags = hashtagsArray.map(hashtag => `#${hashtag}`).join(' ');
    return (
        <section>
            <span className="division"></span>
            <div className="info container">
                <label htmlFor="info">Previsualización de descripción</label>
                <textarea
                className="preview"
                readOnly={true}
                value={
                    `✅ ${data.title}`+
                    (data.info && `\n✨ ${data.info}`) +
                    `\n💵 $${data.price}\n` +
                    (data.promo && `\n🔥PROMOCIÓN\n ${data.promo}\n`) +
                    "\n🤳 Pedidos por dm o a nuestro Whatsapp 6436-3746" +
                    "\n🚚 Entregas en San Salvador" +
                    "\n😉 Si desea más información, ¡estamos a la orden!" +
                    "\n." +
                    "\n." +
                    "\n." +
                    `\n#ElSalvador #sivar #promociones ${newHashtags}`
                }
                >
                </textarea>
            </div>
            <div className="preview-controls">
                <button
                    className="clear button"
                    onClick={()=>setData({title: "",info:"",price: "",promo: "", hashtag: ""})}
                >
                    Limpiar
                </button>
                <button
                    className="copy button"
                    onClick={()=>{
                        if(data.title === "" ||data.price === ""){
                            Swal.fire({
                                icon: 'error',
                                title: 'Descripción no copiada',
                                text: 'Por favor, complete todos los campos requeridos',
                                showConfirmButton: false,
                                timer: 2500,
                                background: '#3a3b3c',
                                color: '#E4E6EB'
                            })
                        }else{
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
                        }
                    }}
                >
                    Copiar
                </button>
            </div>
        </section>
    );
};

export default PreviewArea;
