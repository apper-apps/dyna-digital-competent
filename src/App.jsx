import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

// Pages
import Homepage from '@/components/pages/Homepage';
import BrowsePage from '@/components/pages/BrowsePage';
import CategoryPage from '@/components/pages/CategoryPage';
import AppDetailPage from '@/components/pages/AppDetailPage';
import VendorPage from '@/components/pages/VendorPage';
import PricingPage from '@/components/pages/PricingPage';
import SupportPage from '@/components/pages/SupportPage';
import CartPage from '@/components/pages/CartPage';
import CheckoutPage from '@/components/pages/CheckoutPage';
import GetFundingPage from '@/components/pages/GetFundingPage';

// Layout Components
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';

function App() {
return (
<BrowserRouter>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
<Route path="/" element={<Homepage />} />
            <Route path="/browse" element={<BrowsePage />} />
            <Route path="/app/:id" element={<AppDetailPage />} />
            <Route path="/categories" element={<CategoryPage />} />
            <Route path="/vendor" element={<VendorPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/get-funding" element={<GetFundingPage />} />
          </Routes>
        </main>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          className="z-[9999]"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;