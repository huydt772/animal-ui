import classNames from "classnames/bind";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { images } from "../../../assets/images";
import Image from "../../../components/Image";
import config from "../../../config";
import { auth } from "../../../firebase-config";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if (!currentUser) {
                navigate(config.routes.auth);
                return;
            }
            setUser(currentUser);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth.currentUser]);

    const logout = async () => {
        await signOut(auth);
    };

    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <Link to={config.routes.animals} className={cx("logo-link")}>
                    <Image className={cx("logo")} src={images.logo} alt="Logo" />
                    Animal List
                </Link>

                <div className={cx("block")}>
                    <h3 className={cx("name")}>Hi! {user.displayName}</h3>
                    <Link to={config.routes.auth} className={cx("button")} onClick={logout}>
                        Sign out
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
