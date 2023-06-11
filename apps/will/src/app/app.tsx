import { store } from '@gp/redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home/home';
import Prediction from '../components/Prediction/Prediction';
import Prevention from '../components/Prevention/prevention';
import Result from '../components/Result/Result';
import Symptoms from '../components/Symptoms/symptoms';
import NavBar from '../components/navBar/navBar';
import './app.module.css';

export function App() {
  return (
    <Provider store={store}>
      <div>
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Home />
                <Prevention />
              </div>
            }
          />
          <Route
            path="/symptoms"
            element={
              <div>
                <Symptoms />
              </div>
            }
          />
          <Route
            path="/predict"
            element={
              <div>
                <Prediction />
              </div>
            }
          />
          <Route
            path="/treatment"
            element={
              <div>
                <Result />
              </div>
            }
          />
        </Routes>
      </div>
    </Provider>
  );
}

<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
></script>;

export default App;
