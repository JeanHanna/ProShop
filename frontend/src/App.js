import { Container } from "react-bootstrap";
import Header from "./component/Header";
import Footer from "./component/Footer";
import React from 'react'

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <h1>Welcome To Proshop</h1>
      </main>
      <Footer />
    </>
  )
}

export default App