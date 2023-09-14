import './index.css'

const DestinationItem = props => {
  const {details} = props
  const {name, imgUrl} = details

  return (
    <li className="list-item">
      <img src={imgUrl} className="image" alt={name} />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
