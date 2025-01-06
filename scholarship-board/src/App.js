import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";
import ScholarshipList from "./pages/ScholarshipList";
import ScholarshipDetail from "./pages/ScholarshipDetail";
import PostScholarship from "./pages/PostScholarship";
import AdminScholarshipList from "./pages/AdminScholarshipList";
import UpdateScholarship from "./pages/UpdateScholarship";
import LandingPage from "./componets/LandingPage";
import AdminLogin from "./Admin/AdminLogin";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound"; // Add a 404 component

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/scholarship-list" element={<ScholarshipList />} />
        <Route path="/scholarship-detail/:id" element={<ScholarshipDetail />} />
        <Route path="/post-scholarship" element={<PostScholarship />} />
        <Route
          path="/admin-scholarship-view/:id"
          element={<AdminScholarshipList />}
        />
        <Route path="/update-scholarship/:id" element={<UpdateScholarship />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;