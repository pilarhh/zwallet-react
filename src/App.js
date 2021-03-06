/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { io } from 'socket.io-client'
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
import CreatePin from "./pages/CreatePin";
import PhoneNumber from "./pages/PhoneNumber";
import ManagePhone from "./pages/ManagePhone"
import ChangePin from "./pages/ChangePin"
import TopUp from "./pages/TopUp";
import ProfilePicture from "./pages/ProfilePicture";

const App = () => {

  useEffect(() => {
    const socket = io('http://localhost:4000')
    console.log(socket);
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="createpin" element={<CreatePin />} />
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
        <Route path="changepin" element={
          <RequireAuth>
            <ChangePin />
          </RequireAuth>
        } />
        <Route path="phonenumber" element={
          <RequireAuth>
            <PhoneNumber />
          </RequireAuth>
        } />
        <Route path="managephone" element={
          <RequireAuth>
            <ManagePhone />
          </RequireAuth>
        } />
        <Route path="topup/:id" element={
          <RequireAuth>
            <TopUp />
          </RequireAuth>
        } />
        <Route path="profilepicture" element={
          <RequireAuth>
            <ProfilePicture />
          </RequireAuth>
        } />
      </Routes>
    </BrowserRouter>
  )

}

export default App