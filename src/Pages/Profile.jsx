import React, { useEffect, useState } from "react";
import profilePlaceholder from "../assets/profile.png";
import camera from "../assets/camera.png";

const Profile = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [profileImage, setProfileImage] = useState(profilePlaceholder);

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    const storedName = localStorage.getItem("userName");
    const storedImage = localStorage.getItem("userImage");

    setEmail(storedEmail || "user@email.com");
    setName(storedName || "User Name");

    if (storedImage) {
      setProfileImage(storedImage);
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setProfileImage(reader.result);
        localStorage.setItem("userImage", reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-[#F7F8F9] w-[375px] h-[730px] border-2 border-gray-200">
      <div className="bg-white h-[68px] drop-shadow shadow-[0px_3px_6px_#00000007] text-lg leading-[21px] text-[#1D2226] flex items-center pl-4">
        Account Settings
      </div>
      <div className="px-5 mt-5 space-y-[30px]">
        <div className="flex items-start gap-5 text-[#1D2226] relative">
          <label className="cursor-pointer relative">
            <img
              src={profileImage}
              alt="profile"
              className="w-[72px] h-[72px] object-cover rounded-full"
            />
            <img
              src={camera}
              alt="camera icon"
              className="absolute bottom-0 right-0 w-5 h-5"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
          <div className="space-y-1">
            <p className="text-[15px] font-medium capitalize">{name}</p>
            <p className="text-sm leading-[19px]">{email}</p>
          </div>
        </div>
        <p className="text-sm leading-[22px]">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
      <p className="mt-5 border border-dashed border-[#CBCBCB] space-x-4"></p>
    </div>
  );
};

export default Profile;
