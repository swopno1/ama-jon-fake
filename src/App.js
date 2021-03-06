import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Orders from './components/Orders/Orders';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Inventory from './components/Inventory/Inventory';
import Shipment from './components/Shipment/Shipment';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/shop' element={<Shop></Shop>} />
        <Route
          path='/orders'
          element={
            <RequireAuth>
              <Orders></Orders>
            </RequireAuth>
          }
        />
        <Route
          path='/inventory'
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/signup' element={<SignUp></SignUp>} />
        <Route
          path='/shipment'
          element={
            <RequireAuth>
              <Shipment></Shipment>
            </RequireAuth>
          }
        />
        <Route path='*' element={<Home></Home>} />
      </Routes>
    </>
  );
}

export default App;
