
import './Card.css'


function Card({ titleName, price, rating, description, img }) {
    return (
        <div className="container">

            <div className="imgContainer">
                <img className="image" src={img} alt="" />
            </div>
            <div className="detailsContainer">
                <h3 className='title'>{titleName} </h3>
                <p className='price'>Price: {price}$ </p>
                <p className='rating'>Rating: {rating}/5 </p>
                <p className='des'>Description: {description} </p>
                <button className='btn'>Add to Cart</button>
            </div>
        </div>

    );
}

export default Card;