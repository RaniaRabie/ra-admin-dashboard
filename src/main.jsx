import React from 'react'
import ReactDOM from 'react-dom/client';

import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from './App';
import Dashboard from './pages/dashboard/Dashboard';
import Team from './pages/team/Team';
import Form from './pages/form/Form';
import Contacts from './pages/contacts/Contacts';
import Calendar from './pages/calendar/Calendar';
import Faq from './pages/faq/FAQ';
import Barchart from './pages/barChart/BarChart';
import PieChart from './pages/pieChart/PieChart';
import LineChart from './pages/lineChart/LineChart';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route index element={<Dashboard/>} />
      <Route path='team' element={<Team/>} />
      <Route path='contacts' element={<Contacts/>} />
      <Route path='form' element={<Form/>} />
      <Route path='calendar' element={<Calendar/>} />
      <Route path='faq' element={<Faq/>} />
      <Route path='barchart' element={<Barchart/>} />
      <Route path='piechart' element={<PieChart/>} />
      <Route path='linechart' element={<LineChart/>} />


    </Route>
  )
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
