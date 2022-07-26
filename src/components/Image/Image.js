import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { forwardRef, useState } from "react";

import { images } from "../../assets/images";
import styles from "./Image.module.scss";

const cx = classNames.bind(styles);

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState("");

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            ref={ref}
            className={cx("wrapper", className)}
            src={fallback || src}
            alt={alt}
            onError={handleError}
            {...props}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
