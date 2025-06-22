import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import H1 from "./H1";
import Layout from "./Layout";
import Form from "./Form";
import {Read,ReadID, Add,Edit} from "./API";
import {H5} from "./H1";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<H1 names={["Anshu", "Aarsh", "AP"]} isComputer={false} />} />
          <Route path='h5/1' element={<H5 />} />
          <Route path='form' element={<Form />} />
          <Route path='read' element={<Read />} />
          <Route path='add' element={<Add />} />
          <Route path='edit/:id' element={<Edit />} />
          <Route path='read/:id' element={<ReadID />} />
        </Route>
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
