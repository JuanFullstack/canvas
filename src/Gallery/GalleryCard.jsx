import './css/GalleryCard.css';
import imgDefault from './img/images.png';
import Swal from 'sweetalert2';
import { FaPaw } from "react-icons/fa";


export default function GalleyCard({item}) {
    // Funcion que llama al sweetalert con la info de la Card
    const handleClick = (params) => {
        Swal.fire({
            customClass: {
                image: 'card-img-top'
            },
            title: params.title,
            imageUrl: params.url,
            showCloseButton: true,
            showConfirmButton: false,
            imageWidth: 400,
            imageHeight: 400
           
        })
    }

    return (
        <div className="card card_w"
        onClick={() => {
            handleClick(item)
        }}
        >
            <img src={item.url} className="card-img-top" alt={item.title} />
            <div className="card-body card-title-h">
                <h5 className="card-title">{item.title}</h5>
            </div>
           
        </div>
    );
};