// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props
  const {
    avatarUrl,
    name,
    starsCount,
    forksCount,
    issuesCount,
  } = repositoryDetails

  return (
    <li className="repository-item">
      <img src={avatarUrl} alt={name} className="repository-image" />
      <h1 className="repository-name">{name}</h1>
      <div className="stats-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="icon"
        />
        <p className="text">{starsCount} stars</p>
      </div>
      <div className="stats-container">
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
        />
        <p className="text">{forksCount} forks</p>
      </div>
      <div className="stats-container">
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
        />
        <p className="text">{issuesCount} issues</p>
      </div>
    </li>
  )
}
export default RepositoryItem
