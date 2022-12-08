
        import React from "react"
        import Heading from "./Heading"
        import "./about.css"
    //   import images from "./images/img8.jpg"
    //   import Back from "./Back"
        
        
        
        function About(){
            return (
                <>
                <section className='about'>
        <div className='container'>
          <Heading title='Our Agency Story...' subtitle='' />

          <p>We all know the struggles that we go through during hotel hunting, particularly on the off chance that we really can't get a hotel inside our set models as far as location, budget, and features are concerned.
             Lux-Hotels is a site that is very much intended to furnish clients with a more straightforward hotel hunting experience. The client will be in a position to get sufficient details of different houses available to be purchased or leased in view of their requirements and models.
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis
        augue eget elit porta mattis. Maecenas turpis elit, congue eget nibh
        nec, mollis congue leo. Mauris vel lacinia velit, vel luctus ligula.
        Aliquam erat volutpat. Integer fringilla diam sit amet eros facilisis,
        ac lacinia metus dapibus. Curabitur hendrerit at urna eget iaculis.
  </p>
              {/* <button className='button-container'>More About Us</button> */}

        </div>
      </section>
               </>
        
            )
        };
        export default About;