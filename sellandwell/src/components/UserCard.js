import { useState, useEffect, useRef } from "react";
import { removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BG_IMG from "../images/bg-img.jpeg";

const UserCard = () => {
  const user = useSelector((store) => store.user);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // const handleSignOut = () => {
  //     dispatch(removeUser());
  //     navigate("/");
  // };

  /////////////////////////////

  const handleSignOut = async () => {
    try {
      const response = await fetch("http://localhost:3000/logout", {
        method: "POST",
        credentials: "include", // Make sure cookies (session) are sent with the request
      });
      if (response.ok) {
        dispatch(removeUser()); // Assuming removeUser() clears user from Redux or state
        navigate("/"); // Redirect to home page or wherever
      } else {
        console.error("Failed to log out");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  /////////////////////////////

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative">
      <img
        src={BG_IMG}
        alt="user profile"
        className="w-10 h-10 rounded-full cursor-pointer"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      />
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-20"
        >
          <div className="flex justify-center p-4">
            <img
              src={BG_IMG}
              alt="user profile"
              className="w-20 h-20 rounded-full"
            />
          </div>
          <div className="p-4 text-center">
            <p>{user?.email}</p>
            <button
              className="w-full font-bold px-4 py-2 bg-[#3ab44a] rounded-lg hover:bg-gray-600 transition-colors"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCard;
