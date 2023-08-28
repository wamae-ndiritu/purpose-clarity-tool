import React from 'react'

function Sixthstep({fomData, setFomData}) {
  return (
    <div>
        
     <p style={{color:"maroon"}}>
       State not just the output but the outcome, which is the impact of your action.<br/>
      The answer to why you do what you do should be inbuilt into the impact you want to<br/>
      create. Personally, I inspire individuals and organisations to live meaningful lives.<br/>
      inspire my beneficiaries through training and advisory, and as a result, they live<br/>
      meaningful lives. The beneficiaries transform from pursuing anything they can to pursuing<br/>
      what impacts society and fulfils them.</p>


      <div class="mb-3" style={{width:"700px",marginLeft:"0px"}}>
           
             <textarea 
             class="form-control" 
             placeholder='sixthAnswer'
              rows="10" 
              value={fomData.transform}
              onChange={(e) => {setFomData({ ...fomData, transform: e.target.value });}}>
                
              </textarea>
            </div>

    <div class="card text-bg-primary mb-3" style={{maxWidth: "30rem",marginLeft:"1200px",marginRight:"5px",marginTop:"-400px",color:"white",backgroundColor:"maroon",height:"500px"}}>
      <div class="card-header">Use these questions as a guide</div>
      <div class="card-body">

        <h5 class="card-title">What is the output of your interventions?</h5>
        <h5 class="card-title">Which group do you uniquely understand its struggles?</h5>

        </div>
        </div>

          

           
    </div>
  )
}

export default Sixthstep;


