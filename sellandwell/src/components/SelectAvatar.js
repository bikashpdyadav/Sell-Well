// import { useId, useState } from "react";
// import { useLocation } from 'react-router-dom';


// // Placeholder avatars
// const avatars = [
//   "https://example.com/avatar1.png",
//   "https://example.com/avatar2.png",
//   "https://example.com/avatar3.png",
// ];

// const SelectAvatar = ({ onAvatarSelect, initialAvatar }) => {
//   const [selectedAvatar, setSelectedAvatar] = useState(initialAvatar);

//   const handleAvatarSelect = (avatar) => {
//     setSelectedAvatar(avatar);
//   };

//   // const handleConfirm = () => {
//   //   if (selectedAvatar) {
//   //     onAvatarSelect(selectedAvatar); // Pass the selected avatar back to the parent component
//   //   } else {
//   //     alert("Please select an avatar.");
//   //   }
//   // };

//   //////////////////////////////////////////

//   const AvatarSelection = () => {
//     const location = useLocation();
//     const userId = location.state?.userId;  // Ensure userId is available from the state
  
//     const handleConfirm = async () => {
//       if (!userId) {
//         console.error("User ID is missing.");
//         return;
//       }
  
//       if (selectedAvatar) {
//         try {
//           const response = await fetch('http://localhost:3000/avatar', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ avatar: selectedAvatar, userId }),  // Pass avatar and userId in the body
//           });
  
//           if (response.ok) {
//             const data = await response.json();
//             alert('Avatar updated successfully');
//           } else {
//             const errorData = await response.json();
//             alert(`Error: ${errorData.error}`);
//           }
//         } catch (error) {
//           console.error('Error:', error);
//         }
//       } else {
//         alert("Please select an avatar.");
//       }
//     };
//   };
  

//   /////////////////////////////////////////

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <h1 className="text-3xl font-bold mb-8">Select Your Avatar</h1>
//       <div className="flex space-x-4 mb-8">
//         {avatars.map((avatar, index) => (
//           <img
//             key={index}
//             src={avatar}
//             alt={`Avatar ${index + 1}`}
//             className={`w-24 h-24 rounded-full cursor-pointer border-4 ${
//               selectedAvatar === avatar ? "border-blue-500" : "border-transparent"
//             }`}
//             onClick={() => handleAvatarSelect(avatar)}
//           />
//         ))}
//       </div>
//       <button
//         className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//         onClick={AvatarSelection}
//       >
//         Confirm Selection
//       </button>
//     </div>
//   );
// };

// export default SelectAvatar;

import { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

// Placeholder avatars
const avatars = [
  "https://example.com/avatar1.png",
  "https://example.com/avatar2.png",
  "https://example.com/avatar3.png",
];

const SelectAvatar = ({ onAvatarSelect, initialAvatar }) => {
  const [selectedAvatar, setSelectedAvatar] = useState(initialAvatar);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Extract userId from the location state
  const userId = location.state?.userId;

  // Handle avatar selection
  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar);
  };

  // Handle confirm and send selected avatar to backend
  const handleConfirm = async () => {
    if (!userId) {
      console.error("User ID is missing.");
      return;
    }

    if (selectedAvatar) {
      try {
        const response = await fetch('http://localhost:3000/avatar', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ avatar: selectedAvatar, userId }),  // Pass avatar and userId in the body
        });

        if (response.ok) {
          const data = await response.json();
          alert('Avatar updated successfully');
          // Optionally navigate to a different page after avatar selection
          navigate("/login");  // Adjust the route as needed
        } else {
          const errorData = await response.json();
          alert(`Error: ${errorData.error}`);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      alert("Please select an avatar.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Select Your Avatar</h1>
      <div className="flex space-x-4 mb-8">
        {avatars.map((avatar, index) => (
          <img
            key={index}
            src={avatar}
            alt={`Avatar ${index + 1}`}
            className={`w-24 h-24 rounded-full cursor-pointer border-4 ${
              selectedAvatar === avatar ? "border-blue-500" : "border-transparent"
            }`}
            onClick={() => handleAvatarSelect(avatar)}
          />
        ))}
      </div>
      <button
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        onClick={handleConfirm}  // Call handleConfirm on button click
      >
        Confirm Selection
      </button>
    </div>
  );
};

export default SelectAvatar;
