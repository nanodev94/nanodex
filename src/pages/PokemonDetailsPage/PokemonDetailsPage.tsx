import { useParams } from 'react-router'

const PokemonDetailsPage = () => {
  const { pokemonId } = useParams()

  return <span>PokemonDetailsPage ---: {pokemonId}</span>
}

export default PokemonDetailsPage
