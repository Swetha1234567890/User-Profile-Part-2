import './index.css'

const UserProfile = props => {
  const {userDetails, onClickDelete} = props
  const {imageUrl, name, role, uniqueNo} = userDetails

  const onDelete = () => {
    onClickDelete(uniqueNo)
  }

  return (
    <li className="user-card-container">
      <img src={imageUrl} className="profile-pic" alt="profile-pic" />
      <div className="user-details-container">
        <h1 className="user-name"> {name} </h1>
        <p className="user-designation"> {role} </p>
      </div>
      <button className="del-btn" type="button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cross-img.png"
          className="cross"
          alt="cross"
        />
      </button>
    </li>
  )
}
export default UserProfile
