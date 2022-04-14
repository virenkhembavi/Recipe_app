import axios from "axios";

const URL = 'https://api.spoonacular.com/recipes/random'
export const API_KEY = '26f015778b1140df882c961c099a0c14'

export const getRandom = () => {
    return axios.get(`${URL}?apiKey=${API_KEY}&number=10`)
}
export const getVegges = () => {
    return axios.get(`${URL}?apiKey=${API_KEY}&number=10&tags=vegetarian`)
}

export const getRecipes = (rec) => {
    // console.log(rec)
    return axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${rec}`)
}

export const searchRecipe = (input) => {
    return axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=cookie`)
}

export const searchById = (id) => {
    return axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
}