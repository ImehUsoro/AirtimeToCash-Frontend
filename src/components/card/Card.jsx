import React from 'react';
import { CardStyles } from './CardStyles';

const Card = ({image, title, text, id}) => {
  return (
    <CardStyles>
        <div className='bigger-box'>
            <div className="box" id={id}>
                <img src={image} alt="operation icon" />
                <h3>{title}</h3>
                <p>
                    {text}
                </p>
            </div>
        </div>
    </CardStyles>
  )
}

export default Card
