import './App.css';
import Header from "./components/Header";
import Navbar from './components/Navbar';
import LeaderBoard from './components/LeaderBoard';

function App() {

  return (
    <div className=' App border-4 border-emerald-300 w-full h-full p-0'>
      <Header />
      <Navbar />
      <LeaderBoard />
    </div>
  )
}

export default App
