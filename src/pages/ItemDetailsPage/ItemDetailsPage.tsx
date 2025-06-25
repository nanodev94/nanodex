import { useParams } from 'react-router'

const ItemDetailsPage = () => {
  const { itemId } = useParams()

  return <span>ItemDetailsPage ---: {itemId}</span>
}

export default ItemDetailsPage
