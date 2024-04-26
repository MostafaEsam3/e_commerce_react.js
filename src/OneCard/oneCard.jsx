import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardDetails from './cardDetails';

function OneCard() {
  const [oneCard, setOneCard] = useState(null);
  const { id } = useParams(); 

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(result => {
        const data = result.data;
        setOneCard(data);
      })
      .catch(err => console.log("Error:", err));
  }, [id]); 

  return (
    <>
      {oneCard && (
        <CardDetails
          title={oneCard.title}
          img={oneCard.images[0]}
          description={oneCard.description}
          price={oneCard.price}
          category={oneCard.category}
        />
      )}
    </>
  );
}

export default OneCard;
