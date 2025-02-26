import PropTypes from 'prop-types'
import './Card.css'

function Card({ topic, img, link }) {
  return (
    <div className="card">
      <h2>{topic}</h2>
      <img src={img} alt={`${topic} visual`} />
      <a href={link} target="_blank" rel="noopener noreferrer" className="card-button">
        View Problems
      </a>
    </div>
  )
}

Card.propTypes = {
  topic: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default Card