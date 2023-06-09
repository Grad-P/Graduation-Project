import { useState } from 'react';
import Form from 'react-bootstrap/Form';

const Checkbox = ()=>{
  const [checked,setChecked] = useState<boolean>(false)
  return(
  <div>
     <div className="d-flex col-md-6 bg-light m-auto text-secondary my-1" id='checkbox_id'>
  <Form.Check aria-label="option 1" className="pe-2 pt-1" />
  {/* <p>{symp[i]}</p> */}
</div>
  </div>
  )
}
