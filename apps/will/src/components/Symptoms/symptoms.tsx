import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

export default function Symptoms() {
  const symp = [
    'skin rash',
    'mucosal lesions',
    'Fever',
    'headache',
    'muscle aches',
    'back pain',
    'low energy',
    'swollen lymph nodes',
    'rash (last for two to three weeks , affects : face, palms of the hands, soles of the feet, groin, genital and/or anal regions.)',
    'Chills',
    'Exhaustion',
    'sore throat',
    'nasal congestion',
    'cough',
    'high temperature',
    'sores in the mouth',
  ];

  function showSymp() {
    const symptoms = [];
    for (let i = 0; i < symp.length; i++) {
      symptoms.push(
        <div className="d-flex col-md-6 bg-light m-auto text-secondary my-1">
          <Form.Check aria-label="option 1" className="pe-2 pt-1" />
          <p>{symp[i]}</p>
        </div>
      );
    }
    return symptoms;
  }


<div style={{backgroundImage: "url(" + "../../assets/AdobeStock_2.jpeg" + ")",backgroundSize:'100% 100%',backgroundRepeat:'no-repeat'}} className='m-auto pt-2'>
{showSymp()}
</div>


}
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
></script>;
