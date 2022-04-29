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
                            <h3>Popular Picks</h3><br />
                            <Splide options={{
                                   perPage: 4,
                                   arrows: false,
                                   pagination: false,
                                   drag: 'free',
                                   gap: '2%',
                            }}>
                                   {popular.map((recipe) => {
                                          return (
                                                 <SplideSlide>
                                                        <div>
                                                               <Card>
                                                                      <img src={recipe.image} alt={recipe.title} />
                                                                      <p>{recipe.title}</p>
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
margin: 2rem 0rem;
`;

const Card = styled.div`
max-height: 350px;
img{
       border-radius: 2rem;
       height: 250px;
       width: 250px;
}
p{
     color:black,
}`;


export default Popular