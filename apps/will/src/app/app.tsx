import styles from './app.module.css';
import Symptoms from '../components/Symptoms/symptoms'
import 'bootstrap/dist/css/bootstrap.min.css';
// import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';
import Result from '../components/Result/Result';
import Prediction from '../components/Prediction/Prediction';

export function App() {

  return (
    <div>
      <div className={styles.hedNav}>
      <div className={styles.header}>
        <h1>monkeypox checker</h1>
      </div>
        <nav className={styles.navbar}>
      <div role="navigation" >
        <ul style={{display:'flex', textDecoration:'none',  color: 'aqua' }} >
          <li style={{paddingLeft:'4%', paddingRight:'3%'}} >
            <Link style={{textDecoration:'none'}} to="/">Symptoms</Link>
          </li>
          <li style={{paddingLeft:'4%', paddingRight:'3%'}}>
            <Link style={{textDecoration:'none'}} to="/predict">predict</Link>
          </li>
          <li style={{paddingLeft:'4%', paddingRight:'3%'}}>
            <Link style={{textDecoration:'none'}} to="/result">result</Link>
          </li>
        </ul>
      </div>
      </nav>
      </div>

      {/* <br />
      <hr />
      <br /> */}
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Symptoms/>
              <Link to="/predict">Click here for Predict.</Link>
            </div>
          }
        />
        <Route
          path="/predict"
          element={
            <div>
              <Prediction/>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
            <Route
          path="/result"
          element={
            <div>
              <Result/>
              <Link to="/predict">Click here to go back to predict page</Link>
            </div>
          }
        />
      </Routes>

    </div>
  );
// function test(file:any) {
//   if (file.files && file.files[0]) {
//     const reader = new FileReader();

//     reader.onload = function (e) {
//       $('#blah').attr('src', e.target:FileReader.result).width(150).height(200);
//     };

//     reader.readAsDataURL(file.files[0]);
//   }
// }

}

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" ></script>
export default App;
