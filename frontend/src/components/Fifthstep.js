import React from 'react'

function Fifthstep({fomData, setFomData}) {
  return (
    <div style={{backgroundColor:"aliceblue"}}>
      
     <p style={{color:"maroon"}}>
      Identify the needs of your beneficiaries that you are uniquely qualified to meet.<br/>
      Also, find out how you will deliver your contribution to the beneficiaries; this<br/>
       includes finding your voice, how to express yourself, and your positioning.Given <br/>
       that beneficiaries may have different and changing preferences, you should also <br/>
       constantly polish yourself. Search and experiment widely. It is why musicians experiment,<br/>
       sports people attempt several techniques or even sports, and writers search for new styles,<br/>
       even literary genres or categories. The following sub-questions will guide you through:</p>

       <div class="mb-3 mt-4" style={{width:"700px",marginLeft:"0px"}}>
            
            <textarea class="form-control"
             placeholder='fifthAnswer' 
             rows="8" 
             value={fomData.beneficiaries}
             onChange={(e) => {setFomData({ ...fomData, beneficiaries: e.target.value });}}>
             </textarea>
           </div> 
          
           <div class="card text-bg-primary mb-3" style={{maxWidth: "30rem",marginLeft:"1200px",marginRight:"5px",marginTop:"-400px",color:"white",backgroundColor:"maroon",height:"500px"}}>
        <div class="card-header">Use these questions as a guide</div>
        <div class="card-body">
        
        <h5 class="card-title">What problems or challenges are affecting your potential beneficiaries?</h5>
        <h5 class="card-title">How does your community want to be served?</h5>
    
     </div>
     </div>

           
    </div>
  )
}

export default Fifthstep;


