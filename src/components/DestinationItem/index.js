import './index.css'

const DestinationItem = props => {
  const {placeDetails} = props
  const {name, imgUrl} = placeDetails
  return (
    <li className="place-details">
      <img src={imgUrl} alt={name} className="place-image" />
      <p className="place-name">{name}</p>
    </li>
  )
}

export default DestinationItem
