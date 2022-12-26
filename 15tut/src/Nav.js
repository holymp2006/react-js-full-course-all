import NavLink from "./NavLink";
import styles from "./Nav.module.scss";

const Nav = ({ route, routes, setRoute }) => {
  return (
    <div className={styles.nav}>
      {routes.map((mappedRoute, key) => {
        return (
          <NavLink route={route} key={key} setRoute={setRoute}>
            {mappedRoute}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Nav;
