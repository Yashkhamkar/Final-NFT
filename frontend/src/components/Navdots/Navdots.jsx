import React, { useEffect } from "react";

const Navdots = ({ active }) => {
  useEffect(() => {
    const navigationDots = document.querySelectorAll(".app__navigation-dot");

    // Attach click event listener to each dot
    navigationDots.forEach((dot) => {
      dot.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default link behavior

        const targetId = dot.getAttribute("href").slice(1); // Get the target section's ID
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });

    // Clean up the event listeners when the component unmounts
    return () => {
      navigationDots.forEach((dot) => {
        dot.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <div className="app__navigation">
      {["main", "auction", "buy", "info"].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        />
      ))}
    </div>
  );
};

export default Navdots;
