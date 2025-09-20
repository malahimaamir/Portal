import { useState } from "react";

interface FormData {
  fullName: string;
  mobile: string;
  email: string;
  password: string;
  confirmPassword: string;
  avatar: string;
  profileImage: File | null;
}

const avatars = [
  "/src/assets/avatar1.png",
  "/src/assets/avatar2.png",
  "/src/assets/avatar3.png",
  "/src/assets/avatar4.png",
];

export default function Register() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
    avatar: "",
    profileImage: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, profileImage: file }));
  };

  const handleAvatarSelect = (avatar: string) => {
    setFormData((prev) => ({ ...prev, avatar }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Registering user:", formData);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#FEDCC5] overflow-hidden flex justify-center items-start py-8 px-4 sm:px-6 lg:px-8">
      {/* Background Image */}
      <div className="absolute -left-[520px] -top-[200px] w-[1718px] h-[1512px] opacity-40 blur-[5px] -scale-x-100 pointer-events-none">
        <img
          src="/src/assets/Registration.png"
          alt="Background"
          className="w-full h-full"
        />
      </div>

      {/* Header */}
      <div className="absolute left-4 sm:left-10 top-4 sm:top-8">
        <h1 className="text-[60px] sm:text-[85px] font-[Basic] text-black leading-none">
          SNAP
        </h1>
        <h2 className="text-[30px] sm:text-[40px] text-[#2A1E17] font-actor mt-2">
          Register
        </h2>
      </div>

      {/* Form Container */}
      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-5xl bg-white/30 backdrop-blur-lg rounded-[40px] shadow-lg p-6 sm:p-12 flex flex-col lg:flex-row gap-6 lg:gap-12 mt-32 sm:mt-40"
      >
        {/* Left side - Inputs */}
        <div className="flex-1 flex flex-col gap-4 sm:gap-6">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="px-4 sm:px-5 py-2 sm:py-3 rounded-full border border-gray-300 text-lg text-gray-600 w-full"
            required
          />
          <input
            type="text"
            name="mobile"
            placeholder="Mobile No."
            value={formData.mobile}
            onChange={handleChange}
            className="px-4 sm:px-5 py-2 sm:py-3 rounded-full border border-gray-300 text-lg text-gray-600 w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            className="px-4 sm:px-5 py-2 sm:py-3 rounded-full border border-gray-300 text-lg text-gray-600 w-full"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="px-4 sm:px-5 py-2 sm:py-3 rounded-full border border-gray-300 text-lg text-gray-600 w-full"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="px-4 sm:px-5 py-2 sm:py-3 rounded-full border border-gray-300 text-lg text-gray-600 w-full"
            required
          />

          <button
            type="submit"
            className="mt-4 w-full py-3 sm:py-4 bg-[#F25019] text-white rounded-full text-lg sm:text-xl font-bold"
          >
            Register
          </button>
        </div>

        {/* Right side - Image & Avatars */}
        <div className="flex-1 flex flex-col items-center gap-4 sm:gap-6">
          <div className="w-44 h-44 sm:w-60 sm:h-60 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden">
            {formData.profileImage ? (
              <img
                src={URL.createObjectURL(formData.profileImage)}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <label className="cursor-pointer text-gray-500 text-sm sm:text-base">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
                Upload Image
              </label>
            )}
          </div>

          <div className="w-full">
            <p className="text-md sm:text-lg font-semibold text-[#F25019] mb-2">
              Select Avatar
            </p>
            <div className="flex gap-2 sm:gap-3 flex-wrap justify-center">
              {avatars.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt="Avatar"
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full cursor-pointer border-2 ${
                    formData.avatar === src
                      ? "border-[#F25019]"
                      : "border-transparent"
                  }`}
                  onClick={() => handleAvatarSelect(src)}
                />
              ))}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
