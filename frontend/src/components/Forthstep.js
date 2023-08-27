import React from 'react'

function Forthstep({fomData, setFomData}) {
  return (
    <div>
        
     <p style={{color:"maroon"}}>
      Name your beneficiaries. Find your community. You may serve the whole world,<br/>
      but like Apple, which serves a 'think different' or creative community, you must<br/>
       have your own core group. Just because you can write doesn't mean you can write for<br/>
       all age groups. There is a group you can serve better than your peers, so you choose<br/>
       that group, although it is the group that chooses you. Whichever way you look at it,<br/>
       you and the group must understand each other well. Another example is if you sell<br/>
       homes, many people need to own a home, but not all need a high-end home; some need a<br/>
       low-cost home. If you are in this space, you must pick a group you are passionate about<br/>
       serving.</p>

       <div class="mb-3" style={{width:"700px",marginLeft:"0px"}}>
            
             <textarea 
             class="form-control" 
             placeholder='forthAnswer' 
             rows="8" 
             value={fomData.serve}
             onChange={(e) => {setFomData({ ...fomData, serve: e.target.value });}}>

             </textarea>
            </div>

            <div class="card text-bg-primary mb-3" style={{maxWidth: "30rem",marginLeft:"1200px",marginRight:"5px",marginTop:"-470px",color:"white",backgroundColor:"maroon",height:"500px"}}>
        <div class="card-header">Use these questions as a guide</div>
        <div class="card-body">
        <h5 class="card-title">Who is your core constituency?</h5>
        <h5 class="card-title">Which group do you uniquely understand its struggles?</h5>
        <h5 class="card-title">Which people, groups, or things/animals/environment do you enjoy serving?</h5>
        <h5 class="card-title">Do they enjoy being served by you?</h5>
  
      </div>
      </div>

           
    </div>
  )
}

export default Forthstep;

