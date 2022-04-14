import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { getRecipes } from '../api/api';
// import { useParams } from 'react-router-dom'



export default function Cuisine() {
    const [recipe, setRecipe] = useState([]);
    let params = useParams()
    const cuisieRecipe = async (name) => {

        const res = await getRecipes(name)
        // localStorage.setItem('recipe', JSON.stringify(res.data.recipes))
        setRecipe(res.data.results)
    }
    useEffect(() => {
        cuisieRecipe(params.type)
    }, [params.type])


    return (
        <Grid animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {
                recipe.map((item) => {
                    return (
                        <Card key={item.id}>
                            <Link to={'/Recipe/' + item.id}>
                                <img src={item.image} alt="pp" />
                                <h4>{item.title}</h4>
                            </Link>
                        </Card>
                    )
                })
            }
        </Grid>
    )
};


const Grid = styled(motion.div)`
    display:grid;
    grid-template-columns: auto auto auto;
    grid-gap: 3rem;

`;

const Card = styled.div`
    img{
        width:100%;
        border-radius: 2rem;
    }
    a{
        text-decoration:none;
    }
    h4{
        text-align:center;
        padding:1rem;
    }
`;