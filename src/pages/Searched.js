import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import { API_KEY } from '../api/api';
import { Link } from 'react-router-dom'

export default function Searched() {
    const [searchRec, setSearchRec] = useState([]);

    let params = useParams()

    const searchRecipe = async (searchName) => {
        const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${params.search}`)
        // console.log(res)
        setSearchRec(res.data.results)
    }

    useEffect(() => {
        searchRecipe(params.search)
    }, [params.search])

    // console.log(searchRec)

    return (
        <Grid>
            {
                searchRec.map((item) => {
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
}


const Grid = styled.div`
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