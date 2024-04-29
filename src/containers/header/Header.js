import dummyImage from "../../assets/icons/download.png";
import "./Header.css";

const Header = ({}) => {
  const headerItems = [
    { id: "h1", name: "Dashboard", to: "/" },
    { id: "h2", name: "Manage", to: "/" },
    { id: "h3", name: "My Approval", to: "/" },
    { id: "h4", name: "Upload", to: "/" },
  ];
  return (
    <div className="flex justify-between gap-x-4 align-center">
      <div className="flex gap-x-8">
        <div className="w-16 h-16">
          <img src={dummyImage} alt="" />
        </div>
        <p className="w-20">Contractor Invoice Portal</p>
        <div className="border-2 border-neutral-400"></div>
      </div>
      <ul className="flex gap-x-24">
        {headerItems.map((item) => (
          <li key={item?.id}>
            <a href={item?.to}>{item?.name}</a>
          </li>
        ))}
      </ul>
      <div className="flex gap-x-4">
        <div>Admin</div>
        <div>Sign Out</div>
      </div>
    </div>
  );
};

export default Header;
