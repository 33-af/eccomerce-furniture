import './Profile.css'
import { PeopleAvatar, EditIcon } from '../../assets';
import { IoMdLogOut } from "react-icons/io";
import { useEffect, useState } from 'react';
import { auth, db } from '../../utils/firebaseConfig';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [isChanged, setIsChanged] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    number: '',
    location: '',
    dateOfBirth: '',
  });

  const { signOut } = useAuth();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setFormData(docSnap.data());
        }
      }
    };
    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setIsChanged(true);
  };

  const handleSaveChanges = async () => {
    const user = auth.currentUser;
    if (user) {
      const docRef = doc(db, 'users', user.uid);
      await updateDoc(docRef, formData);
      console.log('Changes saved:', formData);
      setIsChanged(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      console.log('Signed out successfully');
      navigate('/');
    } catch (error) {
      console.error('Sign Out error:', error);
    }
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
                <div className="name">{formData.firstName} {formData.lastName}</div>
                <div className="email">{formData.email}</div>
                <div className="date_birthday">{formData.dateOfBirth}</div>
              </div>
            </div>
            <button
              className="savedChange"
              onClick={handleSaveChanges}
              disabled={!isChanged}
            >
              Save Changes
            </button>
          </div>

          <div className="inputsWrapper">
            <form className="profile__Form flex">
              <label htmlFor="firstName" className="profile__FormInputLabel">First Name</label>
              <input
                type="text"
                id="firstName"
                className="profile__FormInput"
                placeholder="your first name"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </form>

            <form className="profile__Form flex">
              <label htmlFor="lastName" className="profile__FormInputLabel">Last Name</label>
              <input
                type="text"
                id="lastName"
                className="profile__FormInput"
                placeholder="your last name"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </form>

            <form className="profile__Form flex">
              <label htmlFor="email" className="profile__FormInputLabel">Email account</label>
              <input
                type="email"
                id="email"
                className="profile__FormInput"
                placeholder="yourname@gmail.com"
                value={formData.email}
                onChange={handleInputChange}
              />
            </form>

            <form className="profile__Form flex">
              <label htmlFor="password" className="profile__FormInputLabel">Password</label>
              <input
                type="password"
                id="password"
                className="profile__FormInput"
                placeholder="your password"
                value={formData.password}
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

          <button className="logOut flex" onClick={handleSignOut}>
            <IoMdLogOut />
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;