import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
export function Prediction (){
  const [img , setImg] = useState<string>('')
function test(x:any) {
if (x.target.files && x.target.files[0]){
setImg(URL.createObjectURL(x.target.files[0]))
}else{
    console.log('no image chosen')
}
}
  return(
<div className='prediction' style={{height:'100vh'}}>

<form>
<input type="file" id="myFile" name="imagename text-info" accept='image/gif, image/jpeg, image/png' onChange={test} className='bg-secondary'/>
<Button variant="outline-light">send</Button>{' '}
</form>
<div style={{display:'flex', justifyContent:'space-between'}}>
<div className='showImg mt-5 ms-5 ' style={{width:'30%' , height:'20%'  }}>
<img src={img} className='img-fluid'/>
</div>
<div className='col-md-6 '>
<img src="../../assets/Banner_signup_en.png" className='me-5 w-100'/>
</div>
</div>


</div>
  )
}
export default Prediction;

