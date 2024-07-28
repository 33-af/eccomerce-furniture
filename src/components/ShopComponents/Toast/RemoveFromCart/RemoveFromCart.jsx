import './RemoveFromCart.css'

const RemoveFromCart = ({ message }) => {
  return (
    <div className="notification_remove">
      <div className="notification__body_remove">
        {message}
      </div>
      <div className="notification__progress_remove"></div>
    </div>
  );
}
  

export default RemoveFromCart
