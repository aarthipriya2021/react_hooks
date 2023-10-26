import React from 'react';
import ReactDOM from 'react-dom/client';
import PropsApp from './App_props';
// import HookApp from './App_hook';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PropsApp />
    {/* <HookApp /> */}
  </React.StrictMode>
);