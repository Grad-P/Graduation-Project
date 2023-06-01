import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';

export default function Result(){
  return(

    <div className='result mt-5'>
    <div className="result" style={{width:'10%', height:'10%', border:'1px solid black', display:'flex',alignItems:'center',justifyContent:'center', margin:'auto', zIndex:3333}}>
      <p>result is negative</p>
      <br />
    </div>

    <div className="treatment col-md-6" style={{ border:'1px solid white', display:'block', margin:'auto', padding:'30px', boxShadow:' 7px 7px #8881'}}>
      <h3>Treatment</h3>
    <p>There are three vaccines against monkeypox. Although supplies are currently limited, get vaccinated if it is offered to you as they provide a valuable level of protection against the disease. After you have been vaccinated, continue to take care to avoid catching and spreading monkeypox; this is because it takes several weeks to develop immunity after being vaccinated, and because we don’t yet know to what extent the vaccines protect you and if they stop you from infecting others as efficacy data in this outbreak setting is needed.
Some countries are recommending vaccination for persons at risk. Many years of research have led to development of newer and safer vaccines for an eradicated disease called smallpox, which may also be useful for monkeypox. Two of these (MVA-BN and LC16) have been approved for prevention of monkeypox. Only people who are at risk (for example someone who has been a close contact of someone who has monkeypox) should be considered for vaccination. Mass vaccination is not recommended at this time.
      </p>
      </div>

      <div className='bg-info mt-5'>
          <Image src="../../assets/OCIFP90.jpg" fluid />
      </div>
    </div>
  )
}
// style={{height:'5%', backgroundColor:'red'}}
