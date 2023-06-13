import React from 'react';

const Home = () => {

  return (
    
    <div style={{
      height: "screen",
      width:"full",
      backgroundSize: 'cover',
      backgroundImage: `url(${require('../images/seattle.jpg')})`,
      backgroundAttachment: 'fixed',  
      backgroundPosition: 'center'
    }}>

    <div className='h-screen'>
    <div className=' pt-40 pb-20'>
    <div className="h-full flex-row justify-center p-5 ">
    <div className="col-12 col-xl-7 flex-row justify-center pt-10 pb-10 "
            style={{ border: '1px dotted #1a1a1a', backgroundColor: "#ffffff", opacity:".95" }}>

        <h1 className="flex flex-wrap justify-center font-bold pb-4">Our Mission </h1> 
              <p>
                We believe that <strong> healthcare is a right, not a privilege </strong>. We are working to create a future where everyone has access to quality healthcare.</p>
              <p>
                We treat everyone with dignity, respect, and empathy. We want you to feel comfortable talking to us about your health. We will work quickly to diagnose your problems and give you the treatment you need.</p>
              <p>
                We want everyone to have access to good healthcare, no matter how much money they have or where they live. We work with community organizations to reach people who might not otherwise be able to get healthcare.</p>
              <p>
                We believe that your physical, mental, and social health are all connected. We offer preventive care, health education, and counseling to help you stay healthy.</p>
              <p>
                We are committed to making a difference in our community. We are always looking for new ways to improve our services and make healthcare more affordable and accessible.</p>
              <p>
                We are driven by a sense of social responsibility and a desire to make a positive impact on the lives of our patients and the community at large. By continuously seeking innovation, embracing evidence-based practices, and fostering partnerships, we aspire to be a trusted healthcare provider that contributes to the overall health and resilience of our society.
              </p>
    
      </div>
      </div>
      </div>
    </div>
    </div>
         
  );
};

export default Home;
