import React from 'react';
import Sidebar from '../../components/SideBar';
import MainFrame from '../../components/MainFrame';
import Header from '../../components/Header';
import './dashboard-styles.css';

function Dashboard(){
  return(
    <div className="main-page-content">
      {/* <Header /> */}
      <Sidebar />
      <MainFrame />
    </div>
  )
}

export default Dashboard;