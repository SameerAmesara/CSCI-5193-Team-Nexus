import React, { useState, useEffect } from 'react';
import { MetaData } from '../components/MetaData';
import { AiOutlineMail, AiOutlineUnlock, AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { MdPermIdentity, MdOutlineFeaturedPlayList } from 'react-icons/md';
import { BsFileEarmarkText } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { Link, useNavigate } from 'react-router-dom';
import { TbLoader2 } from 'react-icons/tb';
import { useSelector } from 'react-redux';

export const Register = () => {
    const { loading, isLogin } = useSelector((state) => state.user);
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        skills: '',
        avatar: '',
        avatarName: '',
        resume: '',
        resumeName: ''
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'avatar' || name === 'resume') {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setUserData((prevState) => ({
                        ...prevState,
                        [name]: reader.result,
                        [`${name}Name`]: files[0].name
                    }));
                }
            };
            reader.readAsDataURL(files[0]);
        } else {
            setUserData((prevState) => ({ ...prevState, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, avatar, resume, skills } = userData;
        const skillsArr = skills.split(',');
        setUserData({
            name: '',
            email: '',
            password: '',
            skills: '',
            avatar: '',
            avatarName: '',
            resume: '',
            resumeName: ''
        });
    };

    useEffect(() => {
        if (isLogin) {
            navigate('/');
        }
    }, [isLogin, navigate]);

    const { name, email, password, skills, avatar, avatarName, resume, resumeName } = userData;

    return (
        <>
            <MetaData title="Register" />
            <div className="bg-gray-3002 min-h-screen pt-14 md:px-20 px-3 text-black">
                <div className="flex justify-center w-full items-start pt-6">
                    <form onSubmit={handleSubmit} className="flex flex-col md:w-1/3 shadow-gray-700 w-full md:mx-0 mx-8">
                        <div className="md:px-10 px-2 pt-4 pb-20 w-full flex flex-col gap-4">
                            <div className="text-center">
                                <p className="text-4xl font-medium">Register</p>
                            </div>

                            <div className="bg-white flex justify-center items-center">
                                <div className="text-gray-600 px-2">
                                    <MdPermIdentity size={20} />
                                </div>
                                <input
                                    name="name"
                                    value={name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Full name"
                                    type="text"
                                    className="outline-none bold-placeholder w-full text-black px-1 pr-3 py-2"
                                />
                            </div>

                            <div className="bg-white flex justify-center items-center">
                                <div className="text-gray-600 px-2">
                                    <AiOutlineMail size={20} />
                                </div>
                                <input
                                    name="email"
                                    value={email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Email"
                                    type="email"
                                    className="outline-none bold-placeholder w-full text-black px-1 pr-3 py-2"
                                />
                            </div>

                            <div className="bg-white flex justify-center items-center">
                                <div className="text-gray-600 px-2">
                                    <AiOutlineUnlock size={20} />
                                </div>
                                <input
                                    name="password"
                                    value={password}
                                    onChange={handleChange}
                                    required
                                    placeholder="Password"
                                    type={showPassword ? 'text' : 'password'}
                                    className="outline-none bold-placeholder w-full text-black px-1 pr-3 py-2"
                                />
                                <div className="text-gray-600 px-2 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <AiOutlineEye size={20} /> : <AiOutlineEyeInvisible size={20} />}
                                </div>
                            </div>

                            <div>
                                <div className="bg-white flex justify-center items-center">
                                    <div className="text-gray-600 px-2">
                                        {avatar ? <img src={avatar} alt="avatar" className="w-[3em] h-[2.5em]" /> : <CgProfile size={20} />}
                                    </div>
                                    <label htmlFor="avatar" className="outline-none w-full cursor-pointer text-black px-1 pr-3 py-2">
                                        {avatarName || <span className="text-gray-500 font-medium">Select Profile Pic...</span>}
                                    </label>
                                    <input
                                        id="avatar"
                                        name="avatar"
                                        type="file"
                                        accept="image/*"
                                        className="outline-none hidden w-full text-black px-1 pr-3 py-2"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <p className="bg-gray-3002 text-black text-xs">Please select Image file</p>
                            </div>

                            <div className="bg-white flex justify-center items-center">
                                <div className="text-gray-600 md:pb-12 pb-8 px-2">
                                    <MdOutlineFeaturedPlayList size={20} />
                                </div>
                                <textarea
                                    name="skills"
                                    value={skills}
                                    onChange={handleChange}
                                    placeholder="Skills"
                                    className="outline-none w-full text-black bold-placeholder px-1 pr-3 py-2 border border-gray-300 rounded-md"
                                />
                            </div>

                            <div>
                                <button
                                    disabled={loading}
                                    className="blueCol flex justify-center items-center px-8 w-full py-2 font-semibold text-white"
                                >
                                    {loading ? <TbLoader2 className="animate-spin" size={24} /> : 'Register'}
                                </button>
                            </div>

                            <div className="text-center text-sm pt-2">
                                <p>
                                    Already have an account?{' '}
                                    <Link to="/login" className="text-yellow-400 underline">
                                        Login
                                    </Link>{' '}
                                    here.
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};