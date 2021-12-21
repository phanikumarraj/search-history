import './index.css'

const SearchHistory = props => {
  const {detailsHistory, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = detailsHistory

  const deleteButton = () => {
    onDelete(id)
  }

  return (
    <li>
      <p>{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" />
      <p>{title}</p>
      <p>{domainUrl}</p>
      <button type="button" onClick={deleteButton} testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default SearchHistory
