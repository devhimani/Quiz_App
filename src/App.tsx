import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Home from "./pages/Home";

export default function Home() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>Home</>}></Route>
          <Route path="*" element={<>404</>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
