import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import ProfilePage from './components/ProfilePage';

import UserContext from './UserContext'; // import the context

function App() {
  const [count, setCount] = useState(0);

  // Define the user data to be provided via context
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <>
        <Header />
        <MainContent />
        <WelcomeMessage />

        {/* Previously: <UserProfile name="Alice" age="25" bio="..." /> */}
        {/* Now replaced with context-based ProfilePage */}
        <ProfilePage />

        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <h1>Vite + React</h1>

        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>

        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>

        <Footer />
      </>
    </UserContext.Provider>
  );
}

export default App;
