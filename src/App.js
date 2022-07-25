import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts";
import config from "./config";
import Animals from "./pages/Animals";
import Auth from "./pages/Auth";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route
                        path={config.routes.animals}
                        element={
                            <MainLayout>
                                <Animals />
                            </MainLayout>
                        }
                    />
                    <Route path={config.routes.auth} element={<Auth />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
