import { Link, useSearchParams } from "react-router-dom";
import classNames from "classnames/bind";

import config from "../../config";
import Button from "../../components/Button/Button";
import styles from "./Login.module.scss";

const cx = classNames.bind(styles);

function Login() {
    // eslint-disable-next-line no-unused-vars
    const [params, setParams] = useSearchParams();
    const register = params.get("register");

    return (
        <div className={cx("wrapper")}>
            <div className={cx("modal")}>
                <h3 className={cx("heading")}>{register ? "Sign up" : "Sign in"}</h3>
                <p className={cx("desc")}>
                    {register ? "Create your account" : "Hey, Enter your details to get sign in to your account"}
                </p>

                <form className={cx("form")}>
                    {register && (
                        <div className={cx("form-group")}>
                            <input type="text" required placeholder="Enter your name" />
                        </div>
                    )}
                    <div className={cx("form-group")}>
                        <input type="email" required placeholder="Enter your email" />
                    </div>
                    <div className={cx("form-group")}>
                        <input type="password" required placeholder={register ? "Create a password" : "Password"} />
                    </div>

                    <Button primary className={cx("button")}>
                        {register ? "Sign up" : "Sign in"}
                    </Button>
                </form>

                <p className={cx("text")}>
                    {register ? "Already have an account? " : "Don't have an account? "}
                    <Link to={register ? config.routes.login : `${config.routes.login}?register=true`}>
                        <button>{register ? "Log in" : "Sign up for free"}</button>
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
