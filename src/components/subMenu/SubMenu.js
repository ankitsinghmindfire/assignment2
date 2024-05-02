const SubMenu = ({}) => {
  const menuItems = [
    { id: "m1", name: "Messages" },
    { id: "m2", name: "Approvals" },
    { id: "m3", name: "History" },
  ];
  return (
    <ul className="flex gap-x-8 mb-8 ml-8">
      {menuItems.map((item) => (
        <li key={item.id} className="text-blue-800 hover:text-red-500">
          <a href="/">{item.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
