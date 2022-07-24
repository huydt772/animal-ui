import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({ primary = false, to, children, className, ...passProps }) {
    let Button = "button";
    const props = {
        ...passProps,
    };

    if (to) {
        Button = Link;
        props.to = to;
    }

    const classes = {
        primary,
    };

    return (
        <Button className={cx(className, classes)} {...props}>
            {children}
        </Button>
    );
}

Button.propTypes = {
    primary: PropTypes.bool,
    to: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Button;
