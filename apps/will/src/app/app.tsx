import 'bootstrap/dist/css/bootstrap.min.css';
// import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';
import Home from '../components/Home/home';
import Prediction from '../components/Prediction/Prediction';
import Result from '../components/Result/Result';
import Symptoms from '../components/Symptoms/symptoms';
import styles from './app.module.css';

export function App() {
  return (

    <div>
      <div className={styles.hedNav}>
        <div className= 'styles.header px-5' >
          <h1>Monkeypox Master</h1>
        </div>
        <nav className={styles.navbar}>
          <div role="navigation" className='px-5' style={{ display:'flex', textDecoration: 'none' ,gap:20,justifyContent:'center',alignItems:'center',height:'100%'}} >
                <Link style={{ textDecoration: 'none' }} to="/">home</Link>
                <Link style={{ textDecoration: 'none' }} to="/prevention">prevention</Link>
                <Link style={{ textDecoration: 'none' }} to="/symptoms">symptoms</Link>
                <Link style={{ textDecoration: 'none' }} to="/predict">predict</Link>
                <Link style={{ textDecoration: 'none' }} to="/result">treatment</Link>

          </div>
        </nav>
      </div>

      <Routes>
      <Route
          path="/"
          element={
            <div>
              <Home />
              <Link to="/symptoms">Click here for symptoms.</Link>
            </div>
          }
        />
        <Route
          path="/symptoms"
          element={
            <div>
              <Symptoms />
              <Link to="/symptoms">Click here for Predict.</Link>
            </div>
          }
        />
        <Route
          path="/predict"
          element={
            <div>
              <Prediction />
              <Link to="/predict">Click here to go back to root page.</Link>
            </div>
          }
        />
        <Route
          path="/result"
          element={
            <div>
              <Result />
              <Link to="/result">Click here to go back to predict page</Link>
            </div>
          }
        />
      </Routes>

    </div>
  );

}

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" ></script>
export default App;
