import { useState } from "react";

const SubMenu = ({}) => {
  const menuItems = [
    { id: "m1", name: "Messages" },
    { id: "m2", name: "Approvals" },
    { id: "m3", name: "History" },
  ];

  const [active, setActive] = useState("m1");
  return (
    <ul className="flex gap-x-8 mt-4 ml-8">
      {menuItems.map((item) => (
        <li
          key={item.id}
          className="text-blue-800 hover:text-sky-500"
          onMouseOver={() => setActive(item.id)}
        >
          <a href="/">{item.name}</a>
          {item.id === active && (
            <div className="w-18 mt-2 h-1 bg-sky-500"></div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
