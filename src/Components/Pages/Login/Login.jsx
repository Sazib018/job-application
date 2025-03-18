import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FiEyeOff } from "react-icons/fi";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return (
        <section className="bg-gray-100 min-h-screen flex justify-center items-center px-4">
            <div className="bg-[#dfa674] rounded-2xl flex flex-col max-w-md w-full p-6 items-center shadow-lg">
                <h2 className="font-bold text-3xl text-[#002D74] text-center">Login</h2>
                <p className="text-sm mt-2 text-[#002D74] text-center">
                    If you already a member, easily log in now.
                </p>

                <form className="flex flex-col gap-4 w-full" >
                    <input 
                        className="p-2 mt-4 rounded-xl border w-full text-center" 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="relative w-full">
                        <input
                            className="p-2 rounded-xl border w-full text-center"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {showPassword ? (
                            <FiEyeOff
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                                size={20}
                            />
                        ) : (
                            <BsEye
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                                size={20}
                            />
                        )}
                    </div>
                    <button 
                        className="bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium w-full" 
                        type="submit"
                    >
                        Login
                    </button>
                </form>
                <div className="mt-4 w-full">
                    <hr className="border-gray-300" />
                    <p className="text-center text-sm my-2">OR</p>
                    <hr className="border-gray-300" />
                </div>
                <button
                    className="w-full bg-white border border-gray-300 text-gray-700 flex items-center justify-center gap-2 p-2 rounded-lg mt-4 hover:bg-gray-200" 
                >
                    <FcGoogle size={22} /> Login with Google
                </button>
                <div className="mt-4 text-sm border-b border-gray-500 py-4 text-center cursor-pointer w-full">
                    Forgot password?
                </div>
                <div className="mt-4 text-sm flex flex-col items-center w-full">
                    <p>Don't have an account?</p>
                    <button 
                        onClick={() => navigate("/register")}
                        className="bg-[#002D74] text-white px-5 py-2 rounded-xl hover:scale-110 hover:bg-[#206ab1] font-semibold duration-300 mt-2"
                    >
                        Register
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Login;
