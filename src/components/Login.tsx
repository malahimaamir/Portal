import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      {/* Header for mobile */}
      <div className="md:hidden flex justify-between items-center px-6 py-4">
        <div className="text-[32px] font-[Basic] text-black">SNAP</div>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <Menu className="w-8 h-8 text-[#FD841F]" />
        </button>
      </div>

      {/* Mobile menu */}
   {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-[#FD841F] text-white flex flex-col items-center py-4 space-y-4 md:hidden z-50">
            <Link to="/" className="hover:underline" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link to="/register" className="hover:underline" onClick={() => setMenuOpen(false)}>
              Register
            </Link>
            <a href="#" className="hover:underline" onClick={() => setMenuOpen(false)}>
              Help
            </a>
          </div>
        )}

      {/* Left Section */}
      <div className="flex flex-col justify-center px-6 md:px-16 w-full md:w-1/2 relative">
        {/* Logo for desktop */}
        <div className="hidden md:block absolute left-[85px] top-[5px] text-[50px] leading-[107px] font-[Basic] text-black">
          SNAP
        </div>

        <h1 className="text-[28px] md:text-[35px] font-actor text-[#2A1E17] mb-6 mt-10 md:mt-20">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="text-[24px] md:text-[35px] font-actor text-[#414042]">
              Email
            </label>
            <input
              type="email"
              placeholder="username@gmail.com"
              className="w-full mt-2 px-6 py-3 border border-[#BCBEC0] rounded-full text-sm text-[#BCBEC0]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-[24px] md:text-[35px] font-actor text-[#414042]">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-2 px-6 py-3 border border-[#BCBEC0] rounded-full text-sm text-[#BCBEC0]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="text-right mt-2">
              <a href="#" className="text-[#465685] text-[16px] md:text-[18px] font-actor">
                Forgot Password?
              </a>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#FD841F] text-white rounded-full text-[24px] md:text-[30px] font-actor"
          >
            Sign in
          </button>
        </form>

        {/* Social */}
        <div className="mt-10 text-center">
          <p className="text-[#798995] text-[18px] md:text-[20px] font-actor mb-4">
            or continue with
          </p>
          <div className="flex justify-center gap-4 md:gap-6">
            <button className="border border-[#BCBEC0] rounded-full p-3">
              <img src="/src/assets/google.png" alt="Google" className="w-6 h-6" />
            </button>
            <button className="border border-[#BCBEC0] rounded-full p-3">
              <img src="/src/assets/github.png" alt="GitHub" className="w-6 h-6" />
            </button>
            <button className="border border-[#BCBEC0] rounded-full p-3">
              <img src="/src/assets/facebook.png" alt="Facebook" className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Register link */}
        <div className="mt-10 text-center">
          <p className="text-[#BCBEC0] text-[18px] md:text-[20px] font-actor">
            Don’t have an account yet?{" "}
            <Link to="/register" className="text-[#465685]">
              Register for free
            </Link>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex relative w-1/2">
        <div className="absolute right-0 top-0 w-full h-full bg-[#FD841F] flex items-center justify-center">
          <img
            src="/src/assets/Login.png"
            alt="Mascot"
            className="w-[80%] max-w-[665px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
