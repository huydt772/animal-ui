import axios from "axios";
import { useState, useEffect } from "react";
import classNames from "classnames/bind";

import Image from "../../components/Image/Image";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function Home() {
    const [animalList, setAnimalList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchApi = async () => {
            const res = await axios.get("https://62dcaf1957ac3c3f3c5d2703.mockapi.io/api/v1/animals");
            setAnimalList(res.data);
            setLoading(false);
        };
        fetchApi();
    }, []);

    return (
        <div className={cx("wrapper")}>
            {loading && <div className={cx("loading")}></div>}
            <div className={cx("banner")}></div>

            <h3 className={cx("heading")}>List of Animals</h3>

            <div className={cx("animals")}>
                <div className={cx("grid", "wide")}>
                    <div className={cx("row")}>
                        {animalList.map((animal) => (
                            <div key={animal.id} className={cx("col", "l-2-4", "m-4", "c-6")}>
                                <div className={cx("animal")}>
                                    <Image className={cx("image")} src={animal.thumbnail} alt={animal.name} />
                                    <p className={cx("name")}>{animal.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
