import "./Header.css";
import { useState, useEffect } from "react";

function Header() {
  const [var1, setVar1] = useState("");
  // const [clicks, setClicks] = useState(0);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const [todos, setTodos] = useState(() => {
    if (localStorage.getItem("todos") == null) {
      return [];
    } else {
      return JSON.parse(localStorage.getItem("todos"));
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function buttonHandler() {
    setTodos((currentTodos) => {
      return [...currentTodos, var1];
    });
    setVar1("");
  }

  return (
    <>
      <nav>HEADER</nav>
      <p>your spravu</p>
      <div className="bg-todo">
        <input
          placeholder="Введіть text"
          type="text"
          id="item"
          value={var1}
          onChange={(e) => setVar1(e.target.value)}
        />
        <button onClick={buttonHandler}>add to do</button>
        {todos.map((todo) => {
          return (
            <p key={crypto.randomUUID()} className="taski">
              {/* {" "} */}
              {todo}
            </p>
          );
        })}
      </div>
      {/* <p>{var1}</p> */}
      {/* <button onClick={() => setClicks(clicks + 1)}>click</button> */}
      {/* <p>{clicks}</p> */}
    </>
  );
}

export default Header;
