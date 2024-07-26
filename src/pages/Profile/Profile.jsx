import './Profile.css'
import { PeopleAvatar, EditIcon } from '../../assets';
import { IoMdLogOut } from "react-icons/io";
import { useState } from 'react';

const Profile = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      number: '',
      location: 'USA',
    });
  
    const [isChanged, setIsChanged] = useState(false);
  
    const handleInputChange = (e) => {
      const { id, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
  
      setIsChanged(true);
    };
  
    const handleSaveChanges = () => {
      // Implement save changes logic here
      console.log('Changes saved:', formData);
      setIsChanged(false); // Reset the change state after saving
    };
  
    return (
      <div className="citeContent">
        <div className="profile">
          <div className="container">
            <div className="peopleInfo flex">
              <div className="peopleInfoLeft flex">
                <button className="peopleAvaWrapper">
                  <img src={PeopleAvatar} alt="" className="peopleAvatar" />
                  <img src={EditIcon} alt="" className="editIcon" />
                </button>
                <div className="nameAndEmail">
                  <div className="name">Your name</div>
                  <div className="email">yourname@gmail.com</div>
                </div>
              </div>
              <button
                className="savedChange"
                onClick={handleSaveChanges}
                disabled={!isChanged}
              >
                Save Change
              </button>
            </div>
  
            <div className="inputsWrapper">
              <form className="profile__Form flex">
                <label htmlFor="name" className="profile__FormInputLabel">Name</label>
                <input
                  type="text"
                  id="name"
                  className="profile__FormInput"
                  placeholder="your name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </form>
              <form className="profile__Form flex">
                <label htmlFor="email" className="profile__FormInputLabel">Email account</label>
                <input
                  type="text"
                  id="email"
                  className="profile__FormInput"
                  placeholder="yourname@gmail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </form>
              <form className="profile__Form flex">
                <label htmlFor="number" className="profile__FormInputLabel">Mobile number</label>
                <input
                  type="text"
                  id="number"
                  className="profile__FormInput"
                  placeholder="Add number"
                  value={formData.number}
                  onChange={handleInputChange}
                />
              </form>
              <form className="profile__Form flex">
                <label htmlFor="location" className="profile__FormInputLabel">Location</label>
                <input
                  list="locations"
                  id="location"
                  className="profile__FormInput"
                  placeholder="USA"
                  value={formData.location}
                  onChange={handleInputChange}
                />
                <datalist id="locations">
                  <option value="USA" />
                  <option value="Canada" />
                  <option value="Mexico" />
                  <option value="United Kingdom" />
                  <option value="Australia" />
                </datalist>
              </form>
            </div>
  
            <button className="logOut flex">
              <IoMdLogOut />
              Log Out
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Profile;