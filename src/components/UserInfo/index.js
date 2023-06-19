// Write your JS code here
import './index.css'

const UserInfo = props => {
  console.log(props)
  return (
    <li className="user-profile">
      <img
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
        alt="profile"
        className="profile-image"
      />
      <h1 className="user-name">Wade Warren</h1>
      <p className="job-role">Software Developer in UK</p>
    </li>
  )
}

export default UserInfo
