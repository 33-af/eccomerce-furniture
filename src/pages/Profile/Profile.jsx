import './Profile.css'
import { PeopleAvatar, EditIcon } from '../../assets';
import { IoMdLogOut } from "react-icons/io";
import { useEffect, useState } from 'react';
import { auth, db } from '../../utils/firebaseConfig';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../../context/FavoriteContext';
import { useCart } from '../../context/useContext';


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
  const [loading, setLoading] = useState(true); // Add loading state
  const { signOut } = useAuth();
  const { clearFavorites } = useFavorites();
  const { clearCart } = useCart();


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedData = localStorage.getItem('userData');
        if (storedData) {
          setFormData(JSON.parse(storedData));
        } else {
          const user = auth.currentUser;
          if (user) {
            const docRef = doc(db, 'users', user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
              const userData = docSnap.data();
              setFormData(userData);
              localStorage.setItem('userData', JSON.stringify(userData));
            }
          }
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
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
    try {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        await updateDoc(docRef, formData);
        localStorage.setItem('userData', JSON.stringify(formData));
        console.log('Changes saved:', formData);
        setIsChanged(false);
      }
    } catch (error) {
      console.error('Error saving changes:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      localStorage.removeItem('userData');
      clearFavorites();
      clearCart();
      navigate('/');
    } catch (error) {
      console.error('Sign Out error:', error);
    }
  };

  if (loading) {
    return (
      <div className="spinnerWrapper">
        <div className="spinner"></div>
      </div>
    );
  }

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
              <input disabled={true}
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
              <input disabled={true}
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

          <button className="logOut flex" disabled={!formData} onClick={handleSignOut}>
            <IoMdLogOut />
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile; 