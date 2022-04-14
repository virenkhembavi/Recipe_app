import styled from "styled-components";

export default styled.div`

.card{
    min-height:20rem;
    /* min-width:20rem; */
    border-radius:2rem;
    overflow:hidden;
    position:relative;
    

    img{
        border-radius:2rem;
       position:absolute;
       left:0;
       width:100%;
       height:100%;
       object-fit:cover;
    }
    p{
        position:absolute;
        z-index:10;
        left:50%;
        bottom:0%;
        transform:translate(-50%,0%);
        width:100%;
        /* height:40%; */
        color:white;
        font-weight:600;
        text-align:center;
        font-size:1rem;
        /* display:flex;
        justify-content:center;
        aling-items:center; */
        }
}

`;