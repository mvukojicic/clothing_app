import CategoriesPage from "../Categories/index";
import { Routes, Route } from "react-router-dom";
import Navigation from "../Navigation/index";
import SignIn from "../Auth/index";
const Shop = () => {
  return <h1>'TU saaaam'</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<CategoriesPage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
