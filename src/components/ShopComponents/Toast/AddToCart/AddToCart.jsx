
import './AddToCart.css'




const AddToCart = ({message}) => {
  return (
    <div className="notification">
      <div className="notification__body">
        {message}
      </div>
      <div className="notification__progress"></div>
    </div>
  );
};

export default AddToCart;