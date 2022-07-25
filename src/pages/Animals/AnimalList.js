import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { memo } from "react";

import Image from "../../components/Image/Image";
import styles from "./Animals.module.scss";

const cx = classNames.bind(styles);

function AnimalList({ animalList }) {
    return (
        <>
            {animalList.map((animal) => (
                <div key={animal.id} className={cx("col", "l-2-4", "m-4", "c-6")}>
                    <div className={cx("animal")}>
                        <Image className={cx("image")} src={animal.thumbnail} alt={animal.name} />
                        <p className={cx("name")}>{animal.name}</p>
                    </div>
                </div>
            ))}
        </>
    );
}

AnimalList.propTypes = {
    animalList: PropTypes.array.isRequired,
};

export default memo(AnimalList);
