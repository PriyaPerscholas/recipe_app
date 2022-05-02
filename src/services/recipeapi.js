import axios from "axios"


const POPULAR_URL = `https://api.spoonacular.com/recipes/random?apiKey=60badfad779f4c4dbd2c16534fcce164&number=12`

const VEGGIE_URL = `https://api.spoonacular.com/recipes/random?apiKey=60badfad779f4c4dbd2c16534fcce164&number=12&tags=vegetarian`


export function getPopular() {
       const response = axios.get(POPULAR_URL)
       console.log(response)
       return response
}
export function getVeggie() {
       const response = axios.get(VEGGIE_URL)
       console.log(response)
       return response
}
// export function getDetails(id) {
//        const response = axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=d0d9426d997a4eaead7b60c5f4c9b112`)
//        return response
// }
export function getRecipes() {
       const response = axios.get(`https://priyarecipe-api.herokuapp.com/recipe`)
       return response
}
export function getRecipe(id) {
       const response = axios.get(`https://priyarecipe-api.herokuapp.com/recipe/${id}`)
       return response
}
export function deleteRecipe(id) {
       const response = axios.delete(`https://priyarecipe-api.herokuapp.com/recipe/${id}`)
       return response
}
export function createRecipe(add) {
       const response = axios.post(`https://priyarecipe-api.herokuapp.com/recipe`, add)
       return response
}
export function editRecipe(id, updatedRecipe) {
       const response = axios.put(`https://priyarecipe-api.herokuapp.com/recipe/${id}`, updatedRecipe)
       return response
}


