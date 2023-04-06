// Write your code here
import './index.css'

const Appitem = props => {
  const {appitem} = props
  const {appName, imageUrl} = appitem
  return (
    <li className="appslist">
      <div className="appbox">
        <img className="img" src={imageUrl} alt={appName} />
        <p className="apptext">{appName}</p>
      </div>
    </li>
  )
}

export default Appitem
