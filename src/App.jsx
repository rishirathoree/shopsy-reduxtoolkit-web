import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './App/Home/Home'
import Header from './Components/Header'
import 'boxicons/css/boxicons.min.css';
import Testimonials from './Components/Testimonials';
import MockupProjectSlider from './Components/MockupProjectSlider';
import { Provider } from 'react-redux';
import { store } from './Store/Store';
import Product from './App/ProductPage/Product';
import Cart from './App/Cart/Cart';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Provider store={store}>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/FAQ" element={<Testimonials />} />
      <Route path="/About" element={<MockupProjectSlider />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path='/Product/:id' element={<Product />} />
    </Routes>
    </Provider>
    </BrowserRouter>
    </>
  )
}

export default App