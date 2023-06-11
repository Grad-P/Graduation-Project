import {
  AppDispatch,
  PredictMonkeyPox,
  SliceStatus,
  getPredictMonkeyPoxSliceDiseased,
  getPredictMonkeyPoxSliceStatus,
} from '@gp/redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import PredictionResult from './prediction.result/predictionResult';
export function Prediction() {
  const [img, setImg] = useState<string>('');
  const [selectedToSend, setSelectedToSend] = useState();
  const diseased = useSelector(getPredictMonkeyPoxSliceDiseased);
  const diseasedStatus = useSelector(getPredictMonkeyPoxSliceStatus);

  const dispatch = useDispatch<AppDispatch>();
  function onChange(x: any) {
    if (x.target.files && x.target.files[0]) {
      setImg(URL.createObjectURL(x.target.files[0]));
      setSelectedToSend(x.target.files[0]);
    } else {
      console.log('no image chosen');
    }
  }
  const [showResult, setShowResult] = useState<boolean>(false);
  useEffect(() => {
    if (diseasedStatus === SliceStatus.SUCCEEDED) {
      setShowResult(true);
    }
  }, [diseasedStatus]);

  return (
    <div
      className="prediction"
      style={{
        backgroundImage: 'url(../../assets/AdobeStock_4.jpeg)',
        backgroundSize: '100% 100%',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        gap: 20,
        padding: 24,
      }}
    >
      <form className="pt-5 ">
        <input
          type="file"
          id="myFile"
          name="imagename text-info"
          accept="image/jpeg, image/png"
          onChange={onChange}
        />
        <Button
          variant="outline-light"
          onClick={() => {
            const form = new FormData();
            form.append('image', selectedToSend);
            dispatch(PredictMonkeyPox(form));
          }}
          disabled={!selectedToSend}
        >
          send
        </Button>
      </form>
      <div style={{ display: 'flex' }}>
        <div className="showImg col-md-6 py-3">
          {img && (
            <img
              src={img}
              className="img-fluid"
              style={{ width: 400, height: 400 }}
            />
          )}
        </div>
      </div>
      <PredictionResult
        show={showResult}
        handleClose={setShowResult}
        diseased={diseased}
      />
    </div>
  );
}
export default Prediction;
