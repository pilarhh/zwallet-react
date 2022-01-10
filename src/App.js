import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home"
import History from "./pages/History"
import Transfer from "./pages/Transfer";
import TransferInput from './pages/TransferInput'
import TransferConfirmation from './pages/TransferConfirmation'
import TransferSuccess from './pages/TransferSuccess'
import TransferFailed from './pages/TransferFailed'
import RequireAuth from "./components/base/RequireAuth";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/" element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        } />
        <Route path="history" element={
          <RequireAuth>
            <History />
          </RequireAuth>
        } />
        <Route path="transfer" element={
          <RequireAuth>
            <Transfer />
          </RequireAuth>
        } />
        <Route path="transfer/input/:id" element={
          <RequireAuth>
            <TransferInput />
          </RequireAuth>
        } />
        <Route path="transfer/confirmation" element={
          <RequireAuth>
            <TransferConfirmation />
          </RequireAuth>
        } />
        <Route path="transfer/success" element={
          <RequireAuth>
            <TransferSuccess />
          </RequireAuth>
        } />
        <Route path="transfer/failed" element={
          <RequireAuth>
            <TransferFailed />
          </RequireAuth>
        } />
        <Route path="profile" element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        } />
      </Routes>
    </BrowserRouter>
  )

}

export default App