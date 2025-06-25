import { useParams } from 'react-router'

const MoveDetailsPage = () => {
  const { moveId } = useParams()

  return <span>MoveDetailsPage ---: {moveId}</span>
}

export default MoveDetailsPage
