import React, { useState } from "react";

const Input = ({ id, type = "text", placeholder, value, onChange }) => (
  <div className="relative w-full">
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder=" "
      required
      className="peer w-full px-3.5 pt-3 pb-2 text-sm text-[#1D2226] border border-[#CBCBCB] rounded-md appearance-none focus:outline-none focus:ring-[0.5px] focus:ring-[#6C25FF] focus:border-[#6C25FF]"
    />
    <label
      htmlFor={id}
      className="absolute text-[13px] text-[#6C25FF] left-2 -top-2 pl-1.5 pr-2 leading-[17px] bg-[#F7F8F9] "
    >
      {placeholder}
    </label>
  </div>
);

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-[#F7F8F9] w-[375px] h-[730px] border border-gray-200 px-5 pt-10">
      <h1 className="text-[28px] font-medium text-[#1D2226] leading-9">
        Signin to your <br />
        PopX account
      </h1>
      <p className="text-lg text-[#1D2226] opacity-60 leading-[26px] mt-[14px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <form className="space-y-6 mt-6">
        <Input
          id="email"
          type="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          id="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
      </form>
      <button
        onClick={handleSubmit}
        className="bg-[#6C25FF] rounded-md text-white text-base leading-[17px] font-medium w-full h-[46px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#5A1EDB] mt-4"
      >
        Login
      </button>
    </div>
  );
};

export default Signin;
