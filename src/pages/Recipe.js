import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { searchById } from '../api/api';


export default function Recipe() {
    const [recipeById, setRecipeById] = useState([]);
    const [activeTab, setActiveTab] = useState("instruction");
    const [moreRecipe, setMoreRecipe] = useState([])

    let params = useParams();

    const fetchRecipe = async (recipeId) => {
        const res = await searchById(recipeId);
        console.log(res.data)
        setRecipeById(res.data)
        setMoreRecipe(res.data.extendedIngredients)
    }

    useEffect(() => {
        fetchRecipe(params.name)
        // console.log(params.name)
    }, [params.name])


    console.log(moreRecipe)
    return (
        <DetailWapper>
            <div>
                <h2>{recipeById.title}</h2>
                <img src={recipeById.image} alt={recipeById.title} />
            </div>
            <div style={{ "display": "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "flex-start", "width": "60%", "marginLeft": "25px" }}>
                <Info>
                    <Button className={activeTab === 'instruction' ? "active" : ""} onClick={() => setActiveTab('instruction')}>Instruction</Button>
                    <Button className={activeTab === 'ingredients' ? "active" : ""} onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
                </Info>
                {activeTab === "instruction" && (
                    <div style={{}}>
                        <h3 dangerouslySetInnerHTML={{ __html: recipeById.summary }}></h3>
                        <h3 dangerouslySetInnerHTML={{ __html: recipeById.instructions }}></h3>
                    </div>
                )}
                {activeTab === 'ingredients' && (
                    <ul style={{ "marginLeft": "20px" }}>{moreRecipe.map((items) => {
                        return (
                            <li key={items.id}>
                                {items.original}
                            </li>
                        )
                    })}</ul>
                )}
            </div>
        </DetailWapper>
    )
}


const DetailWapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display:flex;
    .active{
        background: linear-gradient(35deg, #494949, #313131);
        color:white;
    }
    h2{
        margin-bottom: 2rem;
    }
    li{
        font-size: 1.2rem;
        line-height: 2.5rem;
    }
    ul{
        margin-top: 2rem;
    }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight:600;
`;

const Info = styled.div`
    margin-left: 10rem;
`;