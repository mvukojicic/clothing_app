import CategoriesPage from "../Categories/index";
import { Routes, Route } from "react-router-dom";
import Navigation from "../Navigation/index";
import SignIn from "../Auth/index";
import { Shop } from "../Shop/index"


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
