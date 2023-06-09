import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (<div style={{backgroundImage:"url(../../assets/AdobeStock_9.jpeg)",height:'100vh',backgroundSize:'cover',backgroundRepeat:'no-repeat'}} className='m-auto'>

    <div>
      <div style={{ height:'100vh' ,display:'flex', alignItems:'center', boxSizing:'border-box'}} className='container'>
      <div style={{border:'1px solid #e6e6e6 ',boxShadow:' 7px 7px #2221'  , justifyContent:'flex-start' , width:'25em' }} className='p-4'>
      <h4>Welcome</h4>
      <p>he recent monkeypox outbreak has become a global healthcare concern owing to its rapid spread in more than 65 countries around the globe. To obstruct its expeditious pace, early diagnosis is a must. But the confirmatory Polymerase Chain Reaction (PCR) tests and other biochemical assays are not readily available in sufficient quantities. In this scenario, computer-aided monkeypox identification from skin lesion images can be a beneficial measure</p>
      </div>
      </div>
    </div>

  </div>



  )
}
export default Home
