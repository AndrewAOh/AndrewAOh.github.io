import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Styles/styles.css'; // Import your styles
import App from './App/App';
import reportWebVitals from './Tests/reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PostHogProvider
      apiKey={process.env.REACT_APP_POSTHOG_KEY}
      options={{
        api_host: process.env.REACT_APP_POSTHOG_HOST,
        defaults: '2025-05-24',
        capture_exceptions: true, // This enables capturing exceptions using Error Tracking, set to false if you don't want this
        debug: process.env.NODE_ENV === 'development',
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PostHogProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
