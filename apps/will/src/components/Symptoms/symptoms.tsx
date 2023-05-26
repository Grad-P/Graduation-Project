import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
// import styles from './symptoms.css';


export default function Symptoms (){
  const symp =['skin rash' , 'mucosal lesions' ,'Fever' , 'headache' , 'muscle aches' , 'back pain', 'low energy' , 'swollen lymph nodes' , 'rash (last for two to three weeks , affects : face, palms of the hands, soles of the feet, groin, genital and/or anal regions.)', 'Chills' ,'Exhaustion' ,'sore throat', 'nasal congestion' , 'cough' ,'high temperature' , 'sores in the mouth']

  function showSymp(){
    const symptoms=[]
    for(let i =0 ; i<symp.length;i++){
      symptoms.push(
      <div className='d-flex col-md-6 bg-light m-auto text-secondary my-1'>
      <Form.Check aria-label="option 1" className='pe-2 pt-1'/>
      <p>{symp[i]}</p>
          </div>)

    }
    return symptoms
  }
  return(

<div style={{backgroundImage: "url(" + "../../assets/Human.png" + ")",backgroundSize:'contain', height:'100vh'}}>
{showSymp()}
</div>

    // <div className={styles.fullPage}>
//     <div style={{backgroundImage: "url(" + "../../assets/Human.png" + ")",backgroundSize:'contain', height:'100vh'}}>
//           <div className='d-flex col-md-6 bg-light m-auto text-secondary my-1'>
// <Form.Check aria-label="option 1" className='pe-2 pt-1'/>
// <p>skin rash</p>
//     </div>
//     <div className='d-flex col-md-6 bg-light m-auto text-secondary my-1'>
// <Form.Check aria-label="option 1" className='pe-2 pt-1'/>
// <p>mucosal lesions </p>
//     </div>
//     <div className='d-flex col-md-6 bg-light m-auto text-secondary '>
// <Form.Check aria-label="option 1" className='pe-2 pt-1'/>
// <p>Fever</p>
//     </div>
//     <div className='d-flex col-md-6 bg-light m-auto text-secondary my-1'>
// <Form.Check aria-label="option 1" className='pe-2 pt-1'/>
// <p>headache</p>
//     </div>
//     <div className='d-flex col-md-6 bg-light m-auto text-secondary my-1'>
// <Form.Check aria-label="option 1" className='pe-2 pt-1'/>
// <p>muscle aches</p>
//     </div>
//     <div className='d-flex col-md-6 bg-light m-auto text-secondary my-1'>
// <Form.Check aria-label="option 1" className='pe-2 pt-1'/>
// <p>back pain</p>
//     </div>
//     <div className='d-flex col-md-6 bg-light m-auto text-secondary my-1'>
// <Form.Check aria-label="option 1" className='pe-2 pt-1'/>
// <p> low energy </p>
//     </div>
//     <div className='d-flex col-md-6 bg-light m-auto text-secondary my-1'>
// <Form.Check aria-label="option 1" className='pe-2 pt-1'/>
// <p>swollen lymph nodes</p>
//     </div>
//     <div className='d-flex col-md-6 bg-light m-auto text-secondary my-1'>
// <Form.Check aria-label="option 1" className='pe-2 pt-1'/>
// <p>rash (last for two to three weeks , affects : face, palms of the hands, soles of the feet, groin, genital and/or anal regions.)</p>
//     </div>
//     <div className='d-flex col-md-6 bg-light m-auto text-secondary my-1'>
// <Form.Check aria-label="option 1" className='pe-2 pt-1'/>
// <p>Chills</p>
//     </div>
//     <div className='d-flex col-md-6 bg-light m-auto text-secondary my-1'>
// <Form.Check aria-label="option 1" className='pe-2 pt-1'/>
// <p>Exhaustion</p>
//     </div>
//     <div className='d-flex col-md-6 bg-light m-auto text-secondary my-1'>
// <Form.Check aria-label="option 1" className='pe-2 pt-1'/>
// <p>sore throat</p>
//     </div>
//     <div className='d-flex col-md-6 bg-light m-auto text-secondary my-1'>
// <Form.Check aria-label="option 1" className='pe-2 pt-1'/>
// <p>nasal congestion</p>
//     </div>
//     <div className='d-flex col-md-6 bg-light m-auto text-secondary my-1'>
// <Form.Check aria-label="option 1" className='pe-2 pt-1'/>
// <p>cough</p>
//     </div>

//     <div className='d-flex col-md-6 bg-light m-auto text-secondary my-1'>
// <Form.Check aria-label="option 1" className='pe-2 pt-1'/>
// <p>high temperature </p>
//     </div>
//     <div className='d-flex col-md-6 bg-light m-auto text-secondary my-1'>
// <Form.Check aria-label="option 1" className='pe-2 pt-1'/>
// <p>sores in the mouth</p>
//     </div>
//     </div>

  )


// const styles = StyleSheet.create({
//   all :{

//   }
// })
}
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" ></script>



