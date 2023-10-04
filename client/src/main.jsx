import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PostContext from './components/context/PostContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
<PostContext>
<React.StrictMode>
    <App />
  </React.StrictMode>
</PostContext>
)