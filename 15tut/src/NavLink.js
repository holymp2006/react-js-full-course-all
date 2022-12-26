import styles from "./Nav.module.scss";

const NavLink = ({ route, setRoute, children }) => {
  return (
    <button
      className={route === children ? styles.active : ""}
      onClick={() => setRoute(children)}
    >
      {children}
    </button>
  );
};

export default NavLink;
