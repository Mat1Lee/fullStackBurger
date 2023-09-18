import React from 'react'
import ReactDOM from 'react-dom/client'
import* as  register  from './service-worker'
import './index.css'
import DataExam from './components/dataExam/dataExam'
import App from './App'
ReactDOM.createRoot(document.getElementById('root')).render(
<>
<App/>
</>
      

)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
      console.log('Service worker registered successfully with scope: ', registration.scope);
    }, function(err) {
      console.log('Service worker registration failed: ', err);
    });
  });
}
