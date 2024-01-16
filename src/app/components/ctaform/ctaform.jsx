'use client'
import React from 'react'
import styles from './ctaform.module.css'
import Mainheading from '../mainheading/mainheading'

const Ctaform = () => {
  return (
    <div className={styles.container}>
        
        <Mainheading 
        titlecenter="Let's Talk"
        contentcenter="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
        /> 
        <div className={styles.form}>
            <div className={styles.inputs}>
              <span>Hello! My name is</span> <input type='text' className={styles.custominput} value='enter your name here'/>  <span>and I want to discuss a potential </span> <br/>
              <span>project. You can email me at </span>  <input type='text' className={styles.custominput} value='your@email.com '/>  <span>or reach me on</span>  
              <input type='text' className={styles.custominput} value=' #your phone'/> <br/>
              <span>Here are some details about my project:</span> <br/>
              <div><input type='text' className={styles.custominput}  value='   my project is about . . . '/></div><br/><br/>
              <span>I am interested in (select one or more)</span><br/><br/>
            </div>
            <div  className={styles.options}>
                <div className={styles.spanbtn}>ux design</div> 
                <div className={styles.spanbtn}>Web Development</div>
                <div className={styles.spanbtnactive}>Woo Comerce</div> 
                <div className={styles.spanbtn}>shopify development</div>
                <div className={styles.spanbtn}>Webflow</div>
                <div className={styles.spanbtn}>Mobile app development</div>
                <div className={styles.spanbtn}>store redesign</div>  
                <div className={styles.spanbtn}>store Auditing</div> 
                <div className={styles.spanbtn}>Adobe Commerce</div>
                <div className={styles.spanbtn}>Others</div> 
            </div>
                <div  className={styles.request}><button className={styles.requestbtn}>Send request</button></div>
        </div>
        <div className={styles.formmob}>
                <div  className={styles.request}><button className={styles.requestbtn}>Send request</button></div>
          </div>
    </div>
  )
}

export default Ctaform