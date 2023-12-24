import './index.css'

const ThumbnailItem = props => {
  const {ThumbnailDetails} = props
  const {thumbnailUrl, thumbnailAltText} = ThumbnailDetails
  return (
    <li className="images">
      <img src={thumbnailUrl} alt={thumbnailAltText} />
    </li>
  )
}

export default ThumbnailItem
