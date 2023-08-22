import React, { useState } from 'react'

function Purposestatement() {
const [purposeData,setPurposeData]=useState({
  purposestatement:"",
});

  return (
    <div>
       
<p style={{marginLeft:"10px"}}>
Turn your responses to the 7 questions above into a purpose statement using the struc-
ture below.<br/> The purpose statement must be a concise, memorable and inspiring decla- 
ration.I will use my purpose,<br/> "I inspire individuals and organisations to live meaningful
  lives", to provide a structure for the purpose<br/>  statement.Purpose has three main dimen-
 sions: directional, transformational and motivational. The<br/>directional dimensionincludes
 two aspects (1) the inspired actions you take or the path you follow, and <br/>(2) for whom you
 do it. For example, based on my purpose, the directional dimension is "I inspire indi-<br/> 
 viduals and organisations". The transformational dimension includes the benefits your 
 beneficiaries<br/> accrue from your actions. This dimension captures the intended impact on 
 the recipients. It focuses on<br/> the difference one makes in people's lives and society: 
 the impact. For example, the transformational<br/> dimension of my purpose is "to live meaning-
 ful lives". The motivational dimension is derived from the<br/> language and worthiness of the 
 cause as captured through the directional and transformational dime-<br/>nsions. Both direc- 
 tional and transformational dimensions should be inspiring to awaken motivation.<br/>
 The directional and transformational aspects must be noble, compelling and inspirational.
 It should<br/> enlist or awaken the energies and enthusiasm you need to make your purpose a 
 reality. Purpose comes<br/> with its energy. It is self-energising.</p>

 <div class="mb-3" style={{width:"500px",marginLeft:"10px",marginTop:"50px"}}>
           
 <textarea 
             class="form-control" 
             placeholder='purposestatement' 
             rows="6" 
             value={purposeData.purposestatement}
             onChange={(e) => {setPurposeData({ ...purposeData, purposestatement: e.target.value });}}>

             </textarea>
             <button type="button" class="btn btn-outline-secondary mt-4">Submit</button>
             </div>

      
    </div>
  )
}

export default Purposestatement;
