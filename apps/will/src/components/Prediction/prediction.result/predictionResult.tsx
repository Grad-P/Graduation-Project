import { AppDispatch, resetPrediction } from '@gp/redux';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

interface Props {
  show: boolean;
  handleClose(value: boolean);
  diseased;
}

function PredictionResult({ show, handleClose, diseased }: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Modal
      show={show}
      onHide={() => {
        handleClose(false);
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>Result</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {diseased && (
          <p>
            You are most likely infected with Monkeypox You Should make a PCR
            and call a doctor and you can see and Can Know More about the
            Treatment From Here.
          </p>
        )}
        {!diseased && (
          <p>
            You are most likely Healthy and not infected with Monkeypox You
            Should Know How To Prevent Your Self From being infected You Can
            Learn More From Here.
          </p>
        )}
      </Modal.Body>

      <Modal.Footer>
        {diseased && (
          <button
            onClick={() => {
              navigate('/treatment');
              dispatch(resetPrediction());
              return;
            }}
            style={{
              background: '#e6ffee',
              width: '100%',
              fontWeight: '600',
              color: 'black',
            }}
            className="btn"
          >
            Go To Treatment
          </button>
        )}
        {!diseased && (
          <button
            onClick={() => {
              navigate('/#prevention');
              dispatch(resetPrediction());
              return;
            }}
            style={{
              background: '#e6ffee',
              width: '100%',
              fontWeight: '600',
              color: 'black',
            }}
            className="btn"
          >
            Go To Prevention
          </button>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default PredictionResult;
