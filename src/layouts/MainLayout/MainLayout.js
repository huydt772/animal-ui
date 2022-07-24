import PropTypes from "prop-types";
import Header from "../components/Header";

function MainLayout({ children }) {
    return (
        <div className="wrapper">
            <Header />
            <div className="container">{children}</div>
        </div>
    );
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainLayout;
