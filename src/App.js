import "./styles.css";
import { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(50);
  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + Math.round(window.scrollY) >=
        document.body.offsetHeight - 100
      ) {
        setCount(count + 50);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [count]);
  let elementsArray = [];
  for (let i = 0; i < count; i++) {
    elementsArray.push(
      <div key={i} className="element">
        {i}
      </div>
    );
  }
  return <div className="App">{elementsArray}</div>;
};

export default App;
