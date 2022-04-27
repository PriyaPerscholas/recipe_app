import axios from "axios"

const POPULAR_URL = `https://api.spoonacular.com/recipes/random?apiKey=d0d9426d997a4eaead7b60c5f4c9b112&number=12`

const VEGGIE_URL = `https://api.spoonacular.com/recipes/random?apiKey=d0d9426d997a4eaead7b60c5f4c9b112&number=12&tags=vegetarian`


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

