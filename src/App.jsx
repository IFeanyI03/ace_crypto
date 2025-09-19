import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

import EditGiftCardRates from './components/EditGiftCardRates';
import EditCryptoRates from './components/EditCryptoRates'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/edit-giftcard" element={<EditGiftCardRates />} />
      <Route path="/edit-crypto" element={<EditCryptoRates />} /> 
    </Routes>
  );
}

export default App;