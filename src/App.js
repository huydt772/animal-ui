import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts";
import config from "./config";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route
                        path={config.routes.animals}
                        element={
                            <MainLayout>
                                <Home />
                            </MainLayout>
                        }
                    />
                    <Route path={config.routes.login} element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
