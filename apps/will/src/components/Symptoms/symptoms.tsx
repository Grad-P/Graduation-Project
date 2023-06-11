import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import SymptomsCheckerResult from './symptoms.checker.result/symptomsCheckerResult';

export default function Symptoms() {
  const symptoms = [
    'Skin rash',
    'Mucosal lesions',
    'Fever',
    'Headache',
    'Muscle aches',
    'Back pain',
    'Low energy',
    'Swollen lymph nodes',
    'Rash (last for two to three weeks , affects : face, palms of the hands, soles of the feet, groin, genital and/or anal regions.)',
    'Chills',
    'Exhaustion',
    'Sore throat',
    'Nasal congestion',
    'Cough',
    'High temperature',
    'Sores in the mouth',
  ];
  const [checkedState, setCheckedState] = useState(
    new Array(symptoms.length).fill(false)
  );
  const [total, setTotal] = useState(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [diseased, setDiseased] = useState<boolean>(false);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
    console.log('updatedCheckedState', updatedCheckedState);
    const totalChecked = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (index === position && currentState === true) {
          return total + 1;
        }
        if (index === position && currentState === false) {
          return total - 1;
        } else {
          return sum;
        }
      }
    );

    setTotal(totalChecked);
  };
  useEffect(() => {
    console.log('total', Number(total));
    return;
  }, [total]);

  const onSubmit = () => {
    const percentage = (total / symptoms.length) * 100;
    if (percentage > 35) {
      setDiseased(true);
    }
    if (percentage < 35) {
      setDiseased(false);
    }
    console.log('percentage', percentage);
    setShowResult(true);
  };

  return (
    <div
      style={{
        backgroundImage: `url('../../assets/AdobeStock_2.jpeg')`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        paddingBlock: 120,
      }}
      className="m-auto "
    >
      <div
        className=" col-md-6 m-auto text-secondary"
        style={{
          borderRadius: 8,
          background: '#e6ffee',
        }}
      >
        {symptoms.map((ele, index) => {
          return (
            <div
              className="d-flex "
              id="checkbox_id"
              style={{
                paddingInline: 16,
              }}
            >
              <div className="py-1 d-flex">
                <Form.Check
                  // onChange={(e) => {}}
                  onChange={(e) => {
                    console.log('e', e.target);
                    handleOnChange(index);
                  }}
                  className="pe-2"
                />
                {ele}
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="col-md-6 m-auto py-2"
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <button
          className="btn"
          style={{ background: '#e6ffee', width: '100%', fontWeight: '600' }}
          onClick={onSubmit}
          disabled={!total}
        >
          Check
        </button>
      </div>

      <SymptomsCheckerResult
        diseased={diseased}
        show={showResult}
        handleClose={setShowResult}
      />
    </div>
  );
}
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
></script>;
