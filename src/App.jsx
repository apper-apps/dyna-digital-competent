import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import Homepage from "@/components/pages/Homepage";
import BrowsePage from "@/components/pages/BrowsePage";
import AppDetailPage from "@/components/pages/AppDetailPage";

function App() {
return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/browse" element={<BrowsePage />} />
            <Route path="/app/:id" element={<AppDetailPage />} />
            <Route path="/categories" element={<BrowsePage />} />
            <Route path="/vendor" element={<Homepage />} />
            <Route path="/pricing" element={<Homepage />} />
            <Route path="/support" element={<Homepage />} />
            <Route path="/cart" element={<Homepage />} />
            <Route path="/checkout" element={<Homepage />} />
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
    </Router>
  );
}

export default App;