import { Outlet } from "react-router-dom";
import Nabvar from "../Components/Nabvar/Nabvar";

const MainLayout = () => {
  return (
    <div>
      <Nabvar></Nabvar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
