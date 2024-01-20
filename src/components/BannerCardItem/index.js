// Write your code here.
import './index.css'

// Write your code here.
const BannerCardItem = props => {
  const {sourceItem} = props
  const {headerText, description, className} = sourceItem
  return (
    <li className={className}>
      <div>
        <h1 className="card-heading">{headerText}</h1>
        <p className="card-description">{description}</p>
        <button type="button" className="card-btn">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
