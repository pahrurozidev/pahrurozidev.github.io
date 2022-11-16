import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Routes from './routes/Routes';

const root = createRoot(document.getElementById('root'));
root.render(<Routes />);
