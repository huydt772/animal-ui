import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import { images } from "../../assets/images";
import Button from "../../components/Button/Button";
import Image from "../../components/Image";
import config from "../../config";
import { auth } from "../../firebase-config";
import styles from "./Login.module.scss";

const cx = classNames.bind(styles);

function Login() {
    // eslint-disable-next-line no-unused-vars
    const [params, setParams] = useSearchParams();
    const userRegister = params.get("register");

    const [registerName, setRegisterName] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const register = async (e) => {
        try {
            e.preventDefault();

            setLoading(true);
            await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            await updateProfile(auth.currentUser, { displayName: registerName });
            setLoading(false);

            navigate(config.routes.animals);
        } catch (error) {
            alert(error.message);
        }
    };

    const login = async (e) => {
        try {
            e.preventDefault();

            setLoading(true);
            await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            setLoading(false);

            navigate(config.routes.animals);
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("modal")}>
                {loading && (
                    <div className={cx("loading")}>
                        <span className={cx("loading-icon")}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </span>
                    </div>
                )}

                <Image className={cx("logo")} src={images.logo} alt="Logo" />

                <h3 className={cx("heading")}>{userRegister ? "Sign up" : "Sign in"}</h3>
                <p className={cx("desc")}>
                    {userRegister ? "Create your account" : "Hey, Enter your details to get sign in to your account"}
                </p>

                {userRegister ? (
                    <form className={cx("form")}>
                        <div className={cx("form-group")}>
                            <input
                                value={registerName}
                                type="text"
                                required
                                placeholder="Enter your name"
                                onChange={(e) => setRegisterName(e.target.value)}
                            />
                        </div>
                        <div className={cx("form-group")}>
                            <input
                                value={registerEmail}
                                type="email"
                                required
                                placeholder="Enter your email"
                                onChange={(e) => setRegisterEmail(e.target.value)}
                            />
                        </div>
                        <div className={cx("form-group")}>
                            <input
                                value={registerPassword}
                                type="password"
                                required
                                placeholder="Create a password"
                                onChange={(e) => setRegisterPassword(e.target.value)}
                            />
                        </div>

                        <Button primary className={cx("button")} onClick={register}>
                            Sign up
                        </Button>
                    </form>
                ) : (
                    <form className={cx("form")}>
                        <div className={cx("form-group")}>
                            <input
                                value={loginEmail}
                                type="email"
                                required
                                placeholder="Enter your email"
                                onChange={(e) => setLoginEmail(e.target.value)}
                            />
                        </div>
                        <div className={cx("form-group")}>
                            <input
                                value={loginPassword}
                                type="password"
                                required
                                placeholder="Password"
                                onChange={(e) => setLoginPassword(e.target.value)}
                            />
                        </div>

                        <Button primary className={cx("button")} onClick={login}>
                            Sign in
                        </Button>
                    </form>
                )}

                <p className={cx("text")}>
                    {userRegister ? "Already have an account? " : "Don't have an account? "}
                    <Link to={userRegister ? config.routes.login : `${config.routes.login}?register=true`}>
                        <button>{userRegister ? "Log in" : "Sign up for free"}</button>
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
