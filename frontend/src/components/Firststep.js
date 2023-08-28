import React from 'react'

export default function Firststep({fomData, setFomData}) {
  return (
    <div style={{backgroundColor:"aliceblue"}}>
        
     
     <p style={{color:"maroon"}}>
      Purpose is clarified when something in you meets with something in the world that triggers you to take action.<br/>
      This question is meant to bring out something in you.This question aims at two key aspects: <br/>
      what resources do you have for your life's assignment?The resources are not material or physical <br/>
      but natural abilities (unique strengths),learned abilities, values, and experiences.Why you and not someone else<br/>
      be the bearer of the particular purpose?Clarifying your purpose starts with clarifying who you are.<br/>
      Knowing yourself is imperative in clarifying your purpose.</p>

           {/* <div style={{color:"maroon"}}>
           <p>To help in answering the question, respond to the following questions:</p>
           <li  style={{listStyle:"none",border:"none"}}>What are your identities, beliefs and convictions?</li> 
           <li  style={{listStyle:"none",border:"none"}}>What do you value?</li> 
           <li  style={{listStyle:"none",border:"none"}}>What are your psychological or growth needs and motivation?</li> 
           <li  style={{listStyle:"none",border:"none"}}>What are your natural or innate abilities?</li> 
           <li  style={{listStyle:"none",border:"none"}}>What are your learned abilities (skills and knowledge)?</li> 
           <li  style={{listStyle:"none",border:"none"}}>What is your personality?</li> 
           <li  style={{listStyle:"none",border:"none"}}>What are your natural abilities or talent?</li>
           <li  style={{listStyle:"none",border:"none"}}>What are your passions and tendencies?</li> 
           </div> */}
           <div class="mb-3 mt-4" style={{width:"700px"}}>
      
      <textarea 
      class="form-control" 
      placeholder='firstAnswer' 
      rows="10" 
      value={fomData.you}
      onChange={(e) => {setFomData({ ...fomData, you: e.target.value });}}>

      </textarea>
     </div>

            <div class="card text-bg-primary mb-3" style={{maxWidth: "30rem",marginLeft:"1200px",marginTop:"-350px",color:"white",backgroundColor:"maroon"}}>
              <div class="card-header">Use this questions as a guide</div>
              <div class="card-body">
                <h5 class="card-title">What are your identities, beliefs and convictions?</h5>
                <h5 class="card-title">What do you value?</h5>
                <h5 class="card-title">What are your psychological or growth needs and motivation?</h5>
                <h5 class="card-title">What are your natural or innate abilities?</h5>
                <h5 class="card-title">What are your learned abilities (skills and knowledge)?</h5>
                <h5 class="card-title">What is your personality?</h5>
                <h5 class="card-title">What are your natural abilities or talent?</h5>
                <h5 class="card-title">What are your passions and tendencies?</h5>
              
              </div>
            </div>

           
    </div>
  )
}