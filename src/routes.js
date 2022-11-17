import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/home";
import ExercicioUm from "./pages/exercicioum";
import ExercicioDois from "./pages/exerciciodois";
import ExercicioUmm from "./pages/exercicioumm";


export default function Routess() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/exercicioum' exact element={<ExercicioUm />} />
                <Route path='/exerciciodois' exact element={<ExercicioDois />} />
                <Route path='/exercicioumm' exact element={<ExercicioUmm />} />

            </Routes>
        </BrowserRouter>
    )
}