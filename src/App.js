import React from 'react';
import { withRouter } from "react-router-dom"
import './App.css';
import FootTab from "@/components/layout/footTab"
import Router from '@/router';

function App() {
  return (
    <div className="App">
      <Router/>
      <FootTab/>
    </div>
  );
}
export default withRouter(App);
