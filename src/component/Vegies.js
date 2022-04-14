import React, { useEffect, useState } from 'react'
import { getVegges } from '../api/api';
import HeadWapper from './popStyle'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom'


export default function Vegies() {
  const [veggieRec, setVeggieRec] = useState([]);

  const veggeiRecepie = async () => {
    const storeInDb = localStorage.getItem('veggie');

    if (storeInDb) {
      setVeggieRec(JSON.parse(storeInDb))
    } else {
      const res = await getVegges()
      console.log(res)
      localStorage.setItem('veggie', JSON.stringify(res.data.recipes))
      setVeggieRec(res.data.recipes)
    }
  }
  useEffect(() => {
    veggeiRecepie()
  }, [])

  return (
    <HeadWapper>
      <h3>Top Veggies You Like.</h3>
      <Splide options={{
        perPage: 3,
        arrows: false,
        pagination: false,
        drag: "free",
        gap: "5rem",
      }}>
        {veggieRec?.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <div className='card' >
                <Link to={'/Recipe/' + recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt='dish'></img>
                </Link>
              </div>
            </SplideSlide>
          )
        })}
      </Splide>
    </HeadWapper>
  )
}
