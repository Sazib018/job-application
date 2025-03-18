import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FiEyeOff } from "react-icons/fi";
import { BsEye } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data) => {
        console.log("User Data:", data);
        // এখানে Firebase বা Backend এ পাঠাতে পারো
    };

    return (
        <section className="bg-gray-100 min-h-screen flex justify-center items-center px-4">
            <div className="bg-[#dfa674] rounded-2xl flex flex-col max-w-md w-full p-6 items-center shadow-lg">
                <h2 className="font-bold text-3xl text-[#002D74] text-center">Register</h2>
                <p className="text-sm mt-2 text-[#002D74] text-center">
                    Create an account to get started!
                </p>

                <form className="flex flex-col gap-4 w-full mt-4" onSubmit={handleSubmit(onSubmit)}>
                    {/* Name Input */}
                    <div className="w-full">
                        <label className="block text-[#002D74] font-semibold mb-1">Full Name</label>
                        <input
                            className="p-2 rounded-xl border w-full text-center"
                            type="text"
                            placeholder="Enter your full name"
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>

                    {/* Email Input */}
                    <div className="w-full">
                        <label className="block text-[#002D74] font-semibold mb-1">Email</label>
                        <input
                            className="p-2 rounded-xl border w-full text-center"
                            type="email"
                            placeholder="Enter your email"
                            {...register("email", { required: "Email is required" })}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    {/* Photo URL Input */}
                    <div className="w-full">
                        <label className="block text-[#002D74] font-semibold mb-1">Photo URL</label>
                        <input
                            className="p-2 rounded-xl border w-full text-center"
                            type="text"
                            placeholder="Enter your photo URL"
                            {...register("photoURL")}
                        />
                    </div>

                    {/* Password Input */}
                    <div className="w-full">
                        <label className="block text-[#002D74] font-semibold mb-1">Password</label>
                        <div className="relative w-full">
                            <input
                                className="p-2 rounded-xl border w-full text-center"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Must be at least 6 characters" }
                                })}
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
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                    </div>

                    {/* Register Button */}
                    <button
                        className="bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium w-full"
                        type="submit"
                    >
                        Register
                    </button>
                </form>

                <div className="mt-4 w-full">
                    <hr className="border-gray-300" />
                    <p className="text-center text-sm my-2">OR</p>
                    <hr className="border-gray-300" />
                </div>

                {/* Google Sign-Up Button */}
                <button
                    className="w-full bg-white border border-gray-300 text-gray-700 flex items-center justify-center gap-2 p-2 rounded-lg mt-4 hover:bg-gray-200"
                >
                    <FcGoogle size={22} /> Sign Up with Google
                </button>

                <div className="mt-4 text-sm flex flex-col items-center w-full">
                    <p>Already have an account?</p>
                    <button
                        onClick={() => navigate("/login")}
                        className="bg-[#002D74] text-white px-5 py-2 rounded-xl hover:scale-110 hover:bg-[#206ab1] font-semibold duration-300 mt-2"
                    >
                        Login
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Register;
