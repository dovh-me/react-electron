import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import SelectProjectWindow from './SelectProjectWindow';

const SomethingElse = () => {
  return (
    <div>
      <div>This is a test</div>
      <button
        type="button"
        onClick={() => window.electron.ipcRenderer.myPing()}
      >
        Ping
      </button>
      <a href="/move">click me!</a>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SomethingElse />} />
        <Route path="/move" element={<SelectProjectWindow />} />
      </Routes>
    </Router>
  );
}
