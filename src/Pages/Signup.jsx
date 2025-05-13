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
      <span className="ml-0.5 text-red-500">*</span>
    </label>
  </div>
);

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleRadioChange = (e) => {
    setFormData((prev) => ({ ...prev, agency: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // you can send formData to backend here
  };

  return (
    <div className="bg-[#F7F8F9] w-[375px] h-[730px] border border-gray-200 px-5 pt-10 pb-7">
      <h1 className="text-[28px] font-medium text-[#1D2226] leading-9">
        Create your <br /> PopX account
      </h1>

      <form className="space-y-6 mt-6" onSubmit={handleSubmit}>
        <Input
          id="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          id="phone"
          type="tel"
          placeholder="Phone number"
          value={formData.phone}
          onChange={handleChange}
        />
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
        <Input
          id="company"
          placeholder="Company name"
          value={formData.company}
          onChange={handleChange}
        />

        {/* Radio Group */}
        <div>
          <span className="text-[13px] leading-[17px] text-[#1D2226]">
            Are you an Agency?<span className="text-red-500 ml-1">*</span>
          </span>
          <div className="flex gap-6 mt-2">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="agency"
                value="Yes"
                checked={formData.agency === "Yes"}
                onChange={handleRadioChange}
                className="accent-[#6C25FF] size-4 cursor-pointer"
              />
              Yes
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="agency"
                value="No"
                checked={formData.agency === "No"}
                onChange={handleRadioChange}
                className="accent-[#6C25FF] cursor-pointer size-4"
              />
              No
            </label>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-[#6C25FF] rounded-md text-white text-base leading-[17px] font-medium w-full h-[46px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#5A1EDB] mt-[88px]"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;