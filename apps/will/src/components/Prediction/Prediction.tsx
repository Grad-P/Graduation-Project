import { AppDispatch } from '@gp/redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
export function Prediction() {
  const [img, setImg] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>()
  function test(x: any) {
    if (x.target.files && x.target.files[0]) {

      const data = new FormData()
      data.append('image',x.target.files[0])

    } else {
      console.log('no image chosen');
    }
  }
  useEffect(() => {
    console.log('img', img);
  }, [img]);
  return (
    <div
      className="prediction"
      style={{
        backgroundImage: 'url(../../assets/AdobeStock_4.jpeg)',
        backgroundSize: '100% 100%',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        gap: 20,
      }}
    >
      <form className="pt-5">
        <input
          type="file"
          id="myFile"
          name="imagename text-info"
          accept="image/jpeg, image/png"
          onChange={test}
        />
        <Button variant="outline-light">send</Button>
      </form>
      <div style={{ display: 'flex' }}>
        <div className="showImg col-md-6">
          <img src={img} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}
export default Prediction;
