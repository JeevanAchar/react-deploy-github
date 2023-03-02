import React from "react";
import Profile from './FunctionBasedComponentt/Profile';
import Downloads from './FunctionBasedComponentt/Downloads';
import Footer from './FunctionBasedComponentt/Footer';
import History from './FunctionBasedComponentt/History';
import Jk from './FunctionBasedComponentt/Jk';
import Nav from './FunctionBasedComponentt/Nav';
import Notification from './FunctionBasedComponentt/Notification';
import Setting from './FunctionBasedComponentt/Setting';
import Stories from './FunctionBasedComponentt/Stories';
import Subscription from './FunctionBasedComponentt/Subscription';
import CDownload from "./ClassBasedComponent/CDownload";
import Cfooter from './ClassBasedComponent/Cfooter';
import Chistory from './ClassBasedComponent/Chistory';
import Cjk from './ClassBasedComponent/Cjk';
import Cnav from './ClassBasedComponent/Cnav';
import CNotification from './ClassBasedComponent/CNotification';
import CProfile from './ClassBasedComponent/CProfile';
import CSettings from './ClassBasedComponent/CSettings';
import CStories from './ClassBasedComponent/CStories';
import CSubscription from './ClassBasedComponent/CSubscipton';

const App = ()=>{
    return(
        <>
        <div>App</div>
        <p>{"hey jeevan its just a test " + 10 * 10 }</p>
        <Profile></Profile>
        <Downloads></Downloads>
        <Footer></Footer>
        <History></History>
        <Jk></Jk>
        <Nav></Nav>
        <Notification></Notification>
        <Setting></Setting>
        <Stories></Stories>
        <Subscription></Subscription>
        <>
            <CDownload></CDownload>
            <Cfooter></Cfooter>
            <Chistory></Chistory>
            <Cjk></Cjk>
            <Cnav></Cnav>
            <CNotification></CNotification>
            <CProfile></CProfile>
            <CSettings></CSettings>
            <CStories></CStories>
            <CSubscription></CSubscription>
        </>
        </>
    )
}

export default App