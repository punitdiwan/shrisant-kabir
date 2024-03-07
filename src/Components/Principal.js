import React from "react";
import NobleSidebar from "./NobleSidebar";

const Principal = () => {
  return (
    <>
      <div className="container-fluid p-0">
        

        <div className="container-fluid latest_card_box_ad p-5">

          <div className="ourschoolboardeft px-0 text-left">

            <div className="princd">
              <div className="photos">
                <img src="./images1/princ.jpeg.webp" alt="" />
                <div className="phname">
                  <b>Principal</b> - Mrs. Rashmi panariya
                </div>
              </div>

              <div className="director_mess">
                <h5>
                  <b>Principal Message -</b>
                </h5>
                <p>
                  Warm Greeting from Shri Sant Kabeer Convent H.S. School  family, we firmly believed
                  that school education lays the foundation for the future of
                  the students and ensure a stable. According to the words of Swami Vivekanand "Arise, awake
                  and stop not till the goal is reached" echo in my mind. The
                  School activities are planned and prepared meticulously,
                  Our mission is to produce educated smart and confident
                  citizens of India.
                </p>
              </div>
            </div>
          {/* <h4 className="kalurr" style={{color:"black", fontWeight:"bold"}}>Our Principal</h4> */}
            
            <p>
              <b>Dear Parents, Students, and Visitors:</b>
            </p>
            <p>
              <i>Shri Sant Kabeer Convent H.S. School </i>
            </p>
            <p>
              Welcome to the Shri Sant Kabeer Convent H.S. School . As we embark into a
              new journey of growth and learning, we will
              be able to take our school to the next level. At our end, we shall
              continue working with you for the best interests of our beloved
              students and our community at large.
            </p>
             
            <p>
              Nothing can be more effective in motivating the students and
              sustaining success in the school than celebrating the students’
              accomplishments. Celebrating success in the school system
              regularly breeds more success. It invites every student, teacher,
              and parent to join the team to celebrate improvements in
              academics, character, and leadership.
            </p>
            {/* <p>
              Nothing can be more effective in motivating the students and
              sustaining success in the school than celebrating the students’
              accomplishments. Celebrating success in the school system
              regularly breeds more success. It invites every student, teacher,
              and parent to join the team to celebrate improvements in
              academics, character, and leadership.
            </p> */}
            <p>
              As the Shri Sant Kabeer Convent H.S. School  principal, I am more than
              willing to do all it takes to make our school an outstanding
              institution, where our students are nurtured through mind, body,
              and soul. Such a mission will not be possible to accomplish
              without the full support and cooperation of our parent body and
              community at large. Hence, should you have any suggestions or
              constructive feedback, do not hesitate to contact me by email or
              phone.
            </p>
            <p>We look forward to serving you and your children.</p>
            <p>
            </p>
            <p>
              <b>Mrs Rashmi panariya, Principal -</b>
            </p>
            {/* <p>Shri Sant Kabeer Convent H.S. School </p> */}
            <p>
            21 Nagar Nigam colony near Sai temple chhola road Bhopal
            <p>School Phone: +91  7697852309</p>
            <p>School Phone: +91  9993182277 </p>
              
            </p>
          </div>

          <div className="ourschoolright p-4">
            <NobleSidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Principal;
