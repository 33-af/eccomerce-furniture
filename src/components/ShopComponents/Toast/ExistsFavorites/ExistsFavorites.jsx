import  './ExistsFavorite.css'

const ExistsFavorites =({ message }) => {
    return (
      <div className="notification_exists">
        <div className="notification__body_exists">
          {message}
        </div>
        <div className="notification__progress_exists"></div>
      </div>
    );
  }

export default ExistsFavorites
