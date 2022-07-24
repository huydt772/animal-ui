import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import config from "../../../config";
import { images } from "../../../assets/images";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <Link to={config.routes.home} className={cx("logo-link")}>
                    <img className={cx("logo")} src={images.logo} alt="Logo" />
                    Animal List
                </Link>
                <div className={cx("block")}>
                    <h3 className={cx("name")}>Hi! Huy Nguyen</h3>
                    <Link to={config.routes.login} className={cx("button")}>
                        Sign out
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
