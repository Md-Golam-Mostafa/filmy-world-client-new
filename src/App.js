import {
  // BrowserRouter as Router, Route, Switch
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import AuthProvider from "./contexts/AuthProvider";
import AddAProduct from "./Pages/Dashboard/AddAProduct/AddAProduct";
import AdminPanel from "./Pages/Dashboard/AdminPanel/AdminPanel";
import Orders from "./Pages/Dashboard/Drawers/Orders/Orders";
import Payment from "./Pages/Dashboard/Drawers/Payment/Payment";
import Review from "./Pages/Dashboard/Drawers/Review/Review";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import DeleteProduct from "./Pages/Dashboard/ManageAll/DeleteProduct/DeleteProduct";
import ManageAll from "./Pages/Dashboard/ManageAll/ManageAll";
import HomePage from './Pages/HomePage/HomePage';
import NotFound from "./Pages/HomePage/Notfound/Notfound";
import PrivateRoute from "./Pages/HomePage/PrivateRoute/PrivateRoute";
import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import MovieDetails from "./Pages/Movies/MovieDetails/MovieDetails";
import Movies from "./Pages/Movies/Movies";
import Footer from "./Pages/Shared/Footer/Footer";
import Navigation from "./Pages/Shared/Nevigatioin/Navigation";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/film/:filmId" element={<MovieDetails />} />
            <Route path="/film/:filmId" element={<MovieDetails />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/movies" element={<Movies />} />

            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<AdminPanel />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/reviews" element={<Review />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/payment/:orderId" element={<Payment />} />
              <Route path="/film/:filmId" element={<MovieDetails />} />
            </Route>


            <Route element={<AdminRoute />}>
              <Route path="/makAdmin" element={<MakeAdmin />} />
              <Route path="/addProduct" element={<AddAProduct />} />
              <Route path="/allOrders" element={<ManageAll />} />
              <Route path="/manageProduct" element={<DeleteProduct />} />


            </Route>


            <Route path="*" component={NotFound} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
