import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <Link to="/" className={cx("logo-link")}>
                    <img
                        className={cx("logo")}
                        src="https://i.pinimg.com/564x/9f/6e/22/9f6e22a659fc9045b9ce6b5a50eb0743.jpg"
                        alt="Logo"
                    />
                    Animal List
                </Link>
                <div className={cx("block")}>
                    <h3 className={cx("name")}>Hi! Huy Nguyen</h3>
                    <Link to="/login" className={cx("button")}>
                        Sign out
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
