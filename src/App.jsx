import { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [orbs, setOrbs] = useState([
    { x: 100, y: 100, size: 150 },
    { x: 300, y: 200, size: 200 },
    { x: 500, y: 400, size: 180 },
  ]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setOrbs((prevOrbs) =>
        prevOrbs.map((orb, index) => ({
          ...orb,
          x: e.clientX / (index + 2),
          y: e.clientY / (index + 2),
        }))
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative h-screen w-screen flex justify-center items-center bg-[#0a0f1f] overflow-hidden">
      {/* Interactive Orbs */}
      <div className="absolute inset-0 z-0">
        {orbs.map((orb, index) => (
          <div
            key={index}
            className="absolute bg-gradient-to-r from-blue-600 to-indigo-800 rounded-full opacity-40 blur-3xl transition-all duration-300"
            style={{
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              left: `${orb.x}px`,
              top: `${orb.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          ></div>
        ))}
      </div>

      {/* Signup Card */}
      <div className="relative z-10 bg-black p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-white text-center text-2xl font-bold">
          <span className="text-blue-500">Shikha</span>Verse
        </h2>
        <p className="text-gray-400 text-center mt-2">
          Already have an account?{" "}
          <a className="text-blue-400" href="#">
            Log in
          </a>
        </p>

        <div className="mt-6 grid grid-cols-2 gap-2">
          <input
            type="text"
            placeholder="First Name"
            className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div className="mt-3">
          <input
            type="text"
            placeholder="Mobile"
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div className="mt-3">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div className="mt-3 relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <div className="flex items-center mt-3">
          <input type="checkbox" className="mr-2" />
          <label className="text-gray-400 text-sm">
            I agree with{" "}
            <a href="#" className="text-blue-400">
              Terms
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-400">
              Privacy Policy
            </a>
          </label>
        </div>

        <button className="w-full bg-blue-700 hover:bg-blue-600 text-white p-3 mt-4 rounded transition">
          Sign Up
        </button>

        <p className="text-center text-gray-400 mt-3">Or</p>

        <button className="w-full bg-black border border-gray-700 text-white p-3 mt-2 rounded flex items-center justify-center">
          <img src="google-icon.png" alt="Google" className="w-5 h-5 mr-2" />
          Sign Up With Google
        </button>
      </div>
    </div>
  );
};

export default Signup;
