import React, { useRef, useEffect } from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  const tabRef = useRef(null);

  const handleTabMove = (e) => {
    if (e.target.matches(".item")) {
      const { offsetWidth, offsetLeft } = e.target;
      if (tabRef.current) {
        tabRef.current.style.left = `${offsetLeft}px`;
        tabRef.current.style.width = `${offsetWidth}px`;
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleTabMove);
    document.addEventListener("mouseover", handleTabMove);
    return () => {
      document.removeEventListener("click", handleTabMove);
      document.removeEventListener("mouseover", handleTabMove);
    };
  }, []);

  return (
    <nav className="flex relative">
      <aside
        ref={tabRef}
        className="absolute bottom-[-3px] left-0 h-[3px] bg-[#444] transition-all duration-500"
      ></aside>
      {["Home", "Red", "Support", "Videos", "Images", "Auth"].map((text, i) => (
        <a
          key={i}
          href="#"
          className={`item px-[0.7rem] py-[0.5rem] text-[#444] ${
            i === 5 ? "hidden md:inline-block" : ""
          }`}
        >
          {text}
        </a>
      ))}
    </nav>
  );
};

const rootEl =
  document.getElementById("root") ||
  (() => {
    const el = document.createElement("div");
    el.id = "root";
    document.body.appendChild(el);
    return el;
  })();

createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
