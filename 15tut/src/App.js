import styles from "./App.module.scss";
import Table from "./Table";
import Nav from "./Nav";
import { useState, useEffect } from "react";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com";

  const [body, setBody] = useState([]);
  const [route, setRoute] = useState("users");
  const routes = ["users", "posts", "comments"];

  useEffect(() => {
    const controller = new AbortController();

    const fetchBody = async () => {
      try {
        const result = await fetch(`${API_URL}/${route}`, controller.signal);
        if (!result.ok) {
          throw Error("Reload the page");
        }
        setBody(await result.json());
      } catch (err) {
        console.log(err.message);
      }
    };
    // const timeout = setTimeout(async () => {
    //   return await fetchBody();
    // }, 2000);
    fetchBody();

    return () => {
      // clearTimeout(timeout);
      controller.abort();
    };
  }, [route]);

  return (
    <div className={styles.App}>
      <Nav route={route} routes={routes} setRoute={setRoute} />
      <Table body={body} />
    </div>
  );
}

export default App;
