import React, { Suspense } from "react"
import { Route, Routes, Navigate } from "react-router-dom"

import LoadingSpinner from "./components/UI/LoadingSpinner/LoadingSpinner"
import TrendPage from "./pages/TrendPage"
import UserPage from "./pages/UserPage"

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Navigate to="/trend" />} />
        <Route path="/trend" element={<TrendPage />} />
        <Route path="/user/:userId" element={<UserPage />} />
        <Route path="*" element={<Navigate to="/trend" />}  />
      </Routes>
    </Suspense>
  )
}

export default App
