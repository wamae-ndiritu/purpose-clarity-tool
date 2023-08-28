import React from 'react'

function Seventhstep({fomData, setFomData}) {
  return (
    <div>
       
     <p>Without this question, all the other questions lead to a hobby, and with only<br/>
      this ques- tion, you may end up as an unfulfilled ruthless money-making machine.<br/>
      This question gives you a vocation and multiplies the impact you can make.</p>

      <div class="mb-3 mt-4" style={{width:"700px",marginLeft:"0px"}}>
            
             <textarea 
             class="form-control" 
             placeholder='seventhAnswer' 
             rows="8" 
             value={fomData.income}
             onChange={(e) => {setFomData({ ...fomData, income: e.target.value });}}>
                
             </textarea>
            </div>

           
<div class="card text-bg-primary mb-3" style={{maxWidth: "30rem",marginLeft:"1200px",marginRight:"5px",marginTop:"-320px",color:"white",backgroundColor:"maroon",height:"350px"}}>
      <div class="card-header">Use these questions as a guide</div>
      <div class="card-body">

        <h5 class="card-title">What are the beneficiaries willing and able to pay for, and how much?</h5>
        <h5 class="card-title">Are the payments enough to maintain a going concern?</h5>

        </div>
        </div>
           
    </div>
  )
}

export default Seventhstep;

