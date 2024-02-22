import {GrFormClose} from 'react-icons/gr'

const Notification = props => {
  const {children} = props
  return (
    <div>
      {children}
      <GrFormClose />
    </div>
  )
}

export default Notification
