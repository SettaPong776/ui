import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import PDFReport from './PDFReport';
import PDFWrapper from './PDFWrapper';

const AppContent = () => {
  const location = useLocation();

  return (
    <>

        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PDFWrapper><PDFReport /></PDFWrapper>} />
        </Routes>

    </>
  );
};

const App = () => {
  return (
    <Router basename="/">
      <AppContent />
    </Router>
  );
};

export default App;