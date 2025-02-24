import React, { useState, useEffect } from "react";
import style from "./Modal.module.css";

function Modal({ onClose, setIsLoggedIn }) {
    const [formData, setFormData] = useState({
        userName: "",
        email: "",
        password: "",
    });

    const [isLogin, setIsLogin] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
            setIsLoggedIn(true);
        }
    }, [setIsLoggedIn]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.userName || !formData.password) {
            setMessage("Username and password are required!");
            return;
        }

        if (isLogin) {
            const storedUser = JSON.parse(localStorage.getItem("user"));
            if (storedUser && storedUser.userName === formData.userName && storedUser.password === formData.password) {
                setMessage(`Hello, ${formData.userName}!`);
                setIsLoggedIn(true);
                setTimeout(onClose, 1500);
            } else {
                setMessage("Invalid username or password!");
            }
        } else {
            localStorage.setItem("user", JSON.stringify(formData));
            setMessage("Registration successful!");
            setIsLogin(true);
        }
    };

    return (
        <div className={style.backdrop} onClick={onClose}>
            <div className={style.modal} onClick={(e) => e.stopPropagation()}>
                <div className={style.modalContent}>
                    {message ? (
                        <h3 className={style.modalMessage}>{message}</h3>
                    ) : (
                        <>
                            <h3 className={style.modalTitle}>{isLogin ? "Log in" : "Sign up"}</h3>
                            <form onSubmit={handleSubmit}>
                                <div className={style.modalInput}>
                                    {!isLogin && (
                                        <>
                                            <p>E-Mail</p>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="E-Mail"
                                                required
                                            />
                                        </>
                                    )}
                                    <p>Username</p>
                                    <input
                                        type="text"
                                        name="userName"
                                        value={formData.userName}
                                        onChange={handleChange}
                                        placeholder="Username"
                                        required
                                    />
                                    <p>Password</p>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Password"
                                        required
                                    />
                                </div>
                                <div className={style.buttonModal}>
                                    <button className={style.button} type="submit">
                                        {isLogin ? "Log in" : "Sign up"}
                                    </button>
                                    <p className={style.textModal}>
                                        {isLogin ? "Don't have an account?" : "Already have an account?"}
                                        <span>
                                            <button
                                                type="button"
                                                className={style.subTextModal}
                                                onClick={() => {
                                                    setIsLogin(!isLogin);
                                                    setMessage("");
                                                }}
                                            >
                                                {isLogin ? "Sign up" : "Log in"}
                                            </button>
                                        </span>
                                    </p>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Modal;
