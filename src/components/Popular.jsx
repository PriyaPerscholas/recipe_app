import { useEffect, useState } from "react"
import { getPopular } from "../services/recipeapi"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import styled from 'styled-components'
import '@splidejs/react-splide/css'

function Popular() {
       const [popular, setPopular] = useState([])

       useEffect(() => {
              getPopular()
                     .then(res =>
                            setPopular(res.data.recipes))
       }, [])

       return (
              <div>
                     <Wrapper>
                            <h3>Popular Picks</h3>
                            <Splide options={{
                                   perPage: 4,
                                   arrows: false,
                                   pagination: false,
                                   drag: 'free',
                                   gap: '2px',
                            }}>
                                   {popular.map((recipe) => {
                                          return (
                                                 <SplideSlide>
                                                        <div>
                                                               <Card>
                                                                      <p>{recipe.title}</p>
                                                                      <img src={recipe.image} alt={recipe.title} />
                                                               </Card>
                                                        </div>
                                                 </SplideSlide>
                                          );
                                   })}
                            </Splide>
                     </Wrapper>
              </div >
       );
}
const Wrapper = styled.div`
margin: 5rem 0rem;
`;

const Card = styled.div`
img{
       border-radius: 2rem;
       max-height: 250px;
}
p{
     color:black,
     font-size:  
}`;


export default Popular