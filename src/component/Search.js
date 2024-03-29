import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa"
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'



export default function Search() {
    const [input, setInput] = useState("")

    const navigate = useNavigate()


    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/Searched/' + input)
    }
    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <FaSearch />
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Search" />
            </div>
        </FormStyle>
    )
}


const FormStyle = styled.form`
// border:none;
margin: 0rem 20rem;
div{
    width: 100%;
    position: relative;
}
input{
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size:1.5rem;
    color:white;
    padding: 1rem 3rem;
    border:none;
    border-radius:1rem;
    outline:none;
    width:100%;
};
svg{
    position:absolute;
    top:50%;
    left:0%;
    transform:translate(100%, -50%);
    color:white;
}
`;