import React,{  Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Home=()=>{
    // if (!isLoggedIn) return <Navigate to="/login" />;
    return (
        <div className="home">
          <h1>Purpose Clarity Tool</h1>
          <p>The purpose clarity tool is meant to guide you on the journey of clarifying your
            purpose.It is possible that you may not clarify your purpose on a single sitting.<br/>You
            must keep refining your responses and your purpose will be clearer with time.True purpose 
            is believed to be clarified through continuous experimentations<br/> with jobs or assignments
            rather than just thinking.

            The PCT is grounded for example question 1 and 2 ensure that your purpose is entrenched 
            in reality not just<br/> fancy-desires,imaginations or high-sounding statements.If you have already
            clarified your purpose,there two things you can do.(1)you can move straight into<br/> writing my
             purpose story and (2) you can examine your purpose against the 7Qs to establish it's completeness
             <h3>The questions asked will be based in these 7 key areas</h3>
             <h4>Who are you?"</h4>
              <h4>What do you do well?</h4>
              <h4>What do you love to do?</h4>
              <h4>Whom do you intend to serve?</h4>
               <h4>What do your beneficiaries need?</h4>
              <h4>How do your offerings transform your beneficiaries?</h4>
             <h4>What activities can generate income for you?</h4>
          </p>

          <Link to="/form">
        <button class="btn btn-secondary mt-4">Go to Form</button>
      </Link>
          
        </div>
      )
}

export default Home;