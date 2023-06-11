import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

interface Props {
  show: boolean;
  handleClose(value: boolean);
  diseased;
}

function SymptomsCheckerResult({ show, handleClose, diseased }: Props) {
  const navigate = useNavigate();

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
            You Have alot of Symptoms for Monkeypox so lets have another step of
            check with an image for your skin.
          </p>
        )}
        {!diseased && (
          <p>
            You don't Have alot of Symptoms for Monkeypox your probaility for
            having Monkeypox is very tiny You can check a next step or go to
            Home.
          </p>
        )}
      </Modal.Body>

      <Modal.Footer>
        {!diseased && (
          <button
            onClick={() => {
              navigate('/');
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
            Go To Home
          </button>
        )}
        <button
          style={{
            background: '#e6ffee',
            width: '100%',
            fontWeight: '600',
            color: 'black',
          }}
          onClick={() => {
            navigate('/predict');

            return;
          }}
          className="btn"
        >
          Go To Prediction
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default SymptomsCheckerResult;
