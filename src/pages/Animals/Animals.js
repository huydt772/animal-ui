import axios from "axios";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import AnimalList from "./AnimalList";
import styles from "./Animals.module.scss";

const cx = classNames.bind(styles);

function Animals() {
    const [animalList, setAnimalList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await axios.get("https://62dcaf1957ac3c3f3c5d2703.mockapi.io/api/v1/animals");
                setAnimalList(res.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };
        fetchApi();
    }, []);

    return (
        <div className={cx("wrapper")}>
            <div className={cx("banner")}></div>

            <h3 className={cx("heading")}>List of Animals</h3>
            {loading && (
                <div className={cx("loading")}>
                    <span className={cx("loading-icon")}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </span>
                </div>
            )}

            <div className={cx("animals")}>
                <div className={cx("grid", "wide")}>
                    <div className={cx("row")}>
                        <AnimalList animalList={animalList} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Animals;
