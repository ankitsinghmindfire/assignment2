import SubMenu from "./components/subMenu/SubMenu";
import Header from "./containers/header/Header";
import SubHeader from "./containers/header/subHeader.js/SubHeader";
import HomePage from "./screens/HomePage";

function App() {
  return (
    <>
      <Header />
      <SubHeader />
      <SubMenu />
      <HomePage />
    </>
  );
}

export default App;
