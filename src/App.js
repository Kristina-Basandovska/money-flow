import { useLayoutEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "./Pages/Welcome/Welcome";
import Main from "./Pages/Main/Main";
import Operations from "./Pages/Operations/Operations";
import Menu from "./Pages/Menu/Menu";
import Expense from "./Pages/Expense/Expense";
import Income from "./Pages/Income/Income";
import Statistics from "./Pages/Statistics/Statistics";
import ChangeBalance from "./Pages/ChangeBalance/ChangeBalance";
import useTheme from './Hooks/useTheme';
import Settings from "./Pages/Settings/Settings";

function App() {
  const {setInitialTheme}=useTheme()
  useLayoutEffect(() => {
    setInitialTheme()
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/main" element={<Main />} />
      <Route path="/operations" element={<Operations />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/expense" element={<Expense />} />
      <Route path="/income" element={<Income />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="/changeBalance" element={<ChangeBalance />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;
