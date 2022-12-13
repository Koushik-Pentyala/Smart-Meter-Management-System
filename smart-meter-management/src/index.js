import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ElectricityHome from './pages/meters/electricty/ElectricityHome';
import ElectryDevices from './pages/meters/electricty/ElectryDevices';
import ElectricityDeviceAdd from './pages/meters/electricty/ElectricityDeviceAdd';
import ElectricityDeviceUpdate from './pages/meters/electricty/ElectricityDeviceUpdate';
import ElectricityDeviceDelete from './pages/meters/electricty/ElectricityDeviceDelete';
import ElectricityDeviceView from './pages/meters/electricty/ElectricityDeviceView';
import { AppContextProvider } from './context/AppContext';
import IotHome from './pages/meters/IotHome';
import IotDevices from './pages/meters/iot/IotDevices';
import Fans from './pages/meters/iot/Fans';
import Lights from './pages/meters/iot/Lights';
import ElectricityControl from './pages/meters/electricty/ElectricityControl';
import Billing from './pages/Billing';
import ElectricityMonitor from './pages/meters/electricty/ElectricityMonitor';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import ServiceRequest from './pages/ServiceRequest';
import { AllServices } from './pages/AllServices';
import { AdminHome } from './components/Admin/AdminHome';
import { Adminmetrics } from './components/Admin/Adminmetrics.js';
import UserTable from './components/Admin/UserTable';
import AddFan from './pages/meters/iot/AddFan';
import ViewFan from './pages/meters/iot/ViewFan';
import DeleteFan from './pages/meters/iot/DeleteFan';
import AddLight from './pages/meters/iot/AddLight';
import ViewLight from './pages/meters/iot/ViewLight';
import UpdateLight from './pages/meters/iot/UpdateLight';
import DeleteLight from './pages/meters/iot/DeleteLight';
import UpdateFan from './pages/meters/iot/UpdateFan';
import FanMonitor from './pages/meters/iot/FanMonitor';
import FanConfig from './pages/meters/iot/FanConfig';
import LightConfig from './pages/meters/iot/LightConfig';
import ConfigHome from './pages/ConfigHome';
import MonitorHome from './pages/MonitorHome';
import Devices from './pages/Devices';
import ConfigIotHome from './pages/meters/iot/ConfigIotHome';
import MonitorIotHome from './pages/meters/iot/MonitorIotHome';
import LightMonitor from './pages/meters/iot/LightMonitor';
import Payment from './pages/Payment';
import SuccessPage from './pages/SuccessPage';
import AdminContainer from './components/Admin/AdminContainer';
import AddUser from './components/Admin/AddUser';
import New_Login from './pages/New_Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='login' element={<New_Login />} />
          <Route path='payment' element={<Payment />} />
          <Route path='success' element={<SuccessPage />} />

          <Route path='/' element={<New_Login />} />

          <Route path='/' element={<AdminContainer />}>
            <Route path='allservices' element={<AllServices />} />
            <Route path='addclients' element={<UserTable />} />
            <Route path='adminmetrics' element={<Adminmetrics />} />
            <Route path='adminhome' element={<AdminHome />} />
            <Route path='addUser' element={<AddUser />} />
          </Route>

          <Route path='/' element={<App />}>
            <Route path='client'>
              <Route path='home' index element={<Home />} />
              <Route path='devices' element={<Devices />}>
                {/* iot devices*/}
                <Route path='iot' element={<IotHome />}>
                  {/* fans devices*/}
                  <Route path='fans' element={<IotDevices />}>
                    <Route index element={<Fans />} />
                    <Route path='add' element={<AddFan />} />
                    <Route path='view/:id' element={<ViewFan />} />
                    <Route path='update/:id' element={<UpdateFan />} />
                    <Route path='delete/:id' element={<DeleteFan />} />
                  </Route>

                  {/* lights devices*/}
                  <Route path='lights' element={<IotDevices />}>
                    <Route index element={<Lights />} />
                    <Route path='add' element={<AddLight />} />
                    <Route path='view/:id' element={<ViewLight />} />
                    <Route path='update/:id' element={<UpdateLight />} />
                    <Route path='delete/:id' element={<DeleteLight />} />
                  </Route>
                </Route>

                {/* meters */}
                <Route path='meters' element={<ElectricityHome />}>
                  <Route path='electricity'>
                    <Route index element={<ElectryDevices />} />
                    <Route path='add' element={<ElectricityDeviceAdd />} />
                    <Route
                      path='view/:id'
                      element={<ElectricityDeviceView />}
                    />
                    <Route
                      path='update/:id'
                      element={<ElectricityDeviceUpdate />}
                    />
                    <Route
                      path='delete/:id'
                      element={<ElectricityDeviceDelete />}
                    />
                  </Route>
                </Route>
              </Route>

              {/* config */}
              <Route path='config' element={<ConfigHome />}>
                <Route path='meters' element={<ElectricityControl />}>
                  <Route path='electricity' element={<ElectricityControl />} />
                </Route>
                <Route path='iot' element={<ConfigIotHome />}>
                  <Route path='fans' element={<FanConfig />} />
                  <Route path='lights' element={<LightConfig />} />
                </Route>
              </Route>

              {/* monitor */}
              <Route path='monitor' element={<MonitorHome />}>
                <Route path='meters'>
                  <Route path='electricity' element={<ElectricityMonitor />} />
                </Route>
                <Route path='iot' element={<MonitorIotHome />}>
                  <Route path='fans' element={<FanMonitor />} />
                  <Route path='lights' element={<LightMonitor />} />
                </Route>
              </Route>

              {/* billing */}
              <Route path='billing' element={<Billing />} />
              <Route path='service' element={<ServiceRequest />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  </React.StrictMode>
);
