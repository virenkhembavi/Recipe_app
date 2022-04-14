import React, { useEffect, useState } from 'react'
import { getRandom } from '../api/api';
import HeadWapper from './popStyle'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom'


export default function Popular() {
    const [popularRec, setPopularRec] = useState([]);

    const randomRecepie = async () => {
        const storeInDb = localStorage.getItem('popular');

        if (storeInDb) {
            setPopularRec(JSON.parse(storeInDb))
        } else {
            const res = await getRandom()
            localStorage.setItem('popular', JSON.stringify(res.data.recipes))
            setPopularRec(res.data.recipes)
        }
    }
    useEffect(() => {
        randomRecepie()
    }, [])

    return (
        <HeadWapper>
            <h3>Popular Picks</h3>
            <Splide options={{
                perPage: 3,
                arrows: false,
                pagination: false,
                drag: "free",
                gap: "5rem",
            }}>
                {popularRec.map((recipe) => {
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
