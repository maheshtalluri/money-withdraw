// Write your code here

import './index.css'

const DenominationItem = props => {
  const {eachItem, onChangeMoney} = props
  const {value} = eachItem
  const onDelete = () => {
    onChangeMoney(value)
  }
  return (
    <li>
      <button type="button" className="value" onClick={onDelete}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
