// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsitems, updatedapps, isActive} = props
  const {tabId, displayText} = tabsitems

  const activeClass = isActive ? 'active-class' : ''

  const updatetabsId = () => {
    updatedapps(tabId)
  }

  return (
    <li className="tabs">
      <button className={`btn ${activeClass}`} onClick={updatetabsId}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
