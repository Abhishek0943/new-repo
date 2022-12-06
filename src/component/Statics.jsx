import React from 'react'
import '../style/statics.css'
// import android from '../assets/Android_Developer_Singgle-03_generated.jpg'
import web from '../assets/vecteezy_programer-learning-programming-languages-by-computer-laptop_.jpg'
// import animation from '../assets/118Z_2012.w017.n001.325B.p15.325.jpg'
// import blockchain from '../assets/43028.jpg'
function statics() {
  return (
    <>
      <section>
        <div className='section2'>
          <h3 className='S2_H5'>What you will get</h3>
          <div className='S2_li'>
            <div className='one'>
              <div className='S2_imgcon'><img src={web} alt="loding..." /></div>
              <h5 className='haddng'>Web development</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ipsam!</p>
            </div>
            <div className='one'>
              <div className='S2_imgcon'><img src={web} alt="loding..." /></div>
              <h5 className='haddng'>Web development</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ipsam!</p>
            </div>
            <div className='one'>
              <div className='S2_imgcon'><img src={web} alt="loding..." /></div>
              <h5 className='haddng'>Web development</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ipsam!</p>
            </div>
            <div className='one'>
              <div className='S2_imgcon'><img src={web} alt="loding..." /></div>
              <h5 className='haddng'>Web development</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ipsam!</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default statics
