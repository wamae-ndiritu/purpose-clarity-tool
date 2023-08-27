import React from "react";

function Secondstep({ fomData, setFomData }) {
  return (
    <div>
       <p style={{color:"maroon"}}>
      The challenge here is that you may have unutilised potential;
      hence,<br/>  you must search deeper than what you are currently good at.
      You may<br/>  not even have the right words to explain what you are good at.
      For <br/> example a person who is faster on their hands than their legs may not<br/>
      even consider including this in the list of things they are good at. It does<br/> 
      not have to be fancy or cool to others. It does not have to attract top dollars;<br/>
      you must be good at it. Two questions will guide you in answering question 2.</p>


      <div class='mb-3' style={{ width: "650px", marginLeft: "0px" }}>
        <textarea
          class='form-control'
          placeholder='secondAnswer'
          rows='10'
          value={fomData.what}
          onChange={(e) => {
            setFomData({ ...fomData, what: e.target.value });
          }}
        ></textarea>
      </div>

     
      <div class="card text-bg-primary mb-3" style={{maxWidth: "30rem",marginLeft:"1200px",marginRight:"5px",marginTop:"-400px",color:"white",backgroundColor:"maroon",height:"400px"}}>
              <div class="card-header">Use this questions as a guide</div>
              <div class="card-body">
                <h5 class="card-title">It is possible that you can do many things, but what are you really
          good at?</h5>
                <h5 class="card-title">What do you feel uniquely qualified to teach or offer others?</h5>
               
              </div>
            </div>

     
    </div>
  );
}

export default Secondstep;
