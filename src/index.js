import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/styles.scss';
import { Background, Profile } from './components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
        <Background/>
        <div className='layout'>
          <Profile/>
          <main className='main'>
          <App />
          </main>
        </div>

  </>
);
