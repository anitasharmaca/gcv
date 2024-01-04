
import React from 'react'
import Mainheading from '../mainheading/mainheading'
import styles from './slider.module.css'

const Slider = ({head, bg}) => {
  return (
    <div className={styles.contained}>
        {/* <Mainheading
        titlecenter="Our Sevices"
        contentcenter="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
        /> */}

        
         {/* <div className={styles.container}>
              <div className={styles.wrapper}>
                  <div className={styles.mainRight}>
                    <img src='assets/image1.png' />
                  </div>
                  <div className={styles.mainRight}>
                    <img src='assets/image1.png' />
                  </div>
                  <div className={styles.mainRight}>
                    <img src='assets/image1.png' />
                  </div>
              </div>
          </div>  */}
      <div className={styles.container} style={{filter:`drop-shadow(0px 4px 8px ${bg})`}}>
           {/*  <div className={styles.wrapper}> */}
              <div className={styles.service} style={{background:bg}}>
                  <div className={styles.mainRight}>
                    <img src='assets/image2.png' />
                  </div>
                  <div className={styles.mainLeft}>
                      <h2>{head}</h2>
                      <p>‘In the end, it all comes down to 0 and 1’. This is where the product shapes up, and our team knows these 0’s and 1’s well.</p>
                      
                        <div className={styles.bullet}>
                          <div><svg  width="14" height="14" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.0989 0.000102093C17.7011 0.000110658 19 1.29897 19 2.9012V15.7445C19 18.3593 15.8126 19.6396 14.0039 17.7513L1.70129 4.90794C-0.0658543 3.06312 1.24168 2.26738e-05 3.79633 3.63296e-05L16.0989 0.000102093Z" fill="#ffffff"/>
                          </svg></div>
                          <div><p>Android Apps</p></div>
                        </div>
                        <div className={styles.bullet}>
                          <svg  width="14" height="14" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.0989 0.000102093C17.7011 0.000110658 19 1.29897 19 2.9012V15.7445C19 18.3593 15.8126 19.6396 14.0039 17.7513L1.70129 4.90794C-0.0658543 3.06312 1.24168 2.26738e-05 3.79633 3.63296e-05L16.0989 0.000102093Z" fill="#ffffff"/>
                          </svg>
                          <p>iOS Apps</p>
                        </div>
                        <div className={styles.bullet}>
                          <svg  width="14" height="14" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.0989 0.000102093C17.7011 0.000110658 19 1.29897 19 2.9012V15.7445C19 18.3593 15.8126 19.6396 14.0039 17.7513L1.70129 4.90794C-0.0658543 3.06312 1.24168 2.26738e-05 3.79633 3.63296e-05L16.0989 0.000102093Z" fill="#ffffff"/>
                          </svg>
                          <p>Enterprise Softwares</p>
                        </div>
                        <div className={styles.bullet}>
                          <svg  width="14" height="14" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.0989 0.000102093C17.7011 0.000110658 19 1.29897 19 2.9012V15.7445C19 18.3593 15.8126 19.6396 14.0039 17.7513L1.70129 4.90794C-0.0658543 3.06312 1.24168 2.26738e-05 3.79633 3.63296e-05L16.0989 0.000102093Z" fill="#ffffff"/>
                          </svg>
                          <p>React Native Apps</p>
                        </div>
                        <div className={styles.bullet}>
                          <svg  width="14" height="14" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.0989 0.000102093C17.7011 0.000110658 19 1.29897 19 2.9012V15.7445C19 18.3593 15.8126 19.6396 14.0039 17.7513L1.70129 4.90794C-0.0658543 3.06312 1.24168 2.26738e-05 3.79633 3.63296e-05L16.0989 0.000102093Z" fill="#ffffff"/>
                          </svg>
                          <p>Web Apps</p>
                        </div>
                        <div className={styles.bullet}>
                          <svg  width="14" height="14" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.0989 0.000102093C17.7011 0.000110658 19 1.29897 19 2.9012V15.7445C19 18.3593 15.8126 19.6396 14.0039 17.7513L1.70129 4.90794C-0.0658543 3.06312 1.24168 2.26738e-05 3.79633 3.63296e-05L16.0989 0.000102093Z" fill="#ffffff"/>
                          </svg>
                          <p>Data Visualisation</p>
                        </div>
                  </div>
              </div>
            {/*   <div className={styles.service}>
                  <div className={styles.mainRight}>
                    <img src='assets/image1.png' />
                  </div>
                  <div className={styles.mainLeft}>
                      <h2>Design</h2>
                      <p>‘In the end, it all comes down to 0 and 1’. This is where the product shapes up, and our team knows these 0’s and 1’s well.</p>
                      
                        <div className={styles.bullet}>
                          <div><svg  width="14" height="14" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.0989 0.000102093C17.7011 0.000110658 19 1.29897 19 2.9012V15.7445C19 18.3593 15.8126 19.6396 14.0039 17.7513L1.70129 4.90794C-0.0658543 3.06312 1.24168 2.26738e-05 3.79633 3.63296e-05L16.0989 0.000102093Z" fill="#ffffff"/>
                          </svg></div>
                          <div><p>Android Apps</p></div>
                        </div>
                        <div className={styles.bullet}>
                          <svg  width="14" height="14" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.0989 0.000102093C17.7011 0.000110658 19 1.29897 19 2.9012V15.7445C19 18.3593 15.8126 19.6396 14.0039 17.7513L1.70129 4.90794C-0.0658543 3.06312 1.24168 2.26738e-05 3.79633 3.63296e-05L16.0989 0.000102093Z" fill="#ffffff"/>
                          </svg>
                          <p>iOS Apps</p>
                        </div>
                        <div className={styles.bullet}>
                          <svg  width="14" height="14" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.0989 0.000102093C17.7011 0.000110658 19 1.29897 19 2.9012V15.7445C19 18.3593 15.8126 19.6396 14.0039 17.7513L1.70129 4.90794C-0.0658543 3.06312 1.24168 2.26738e-05 3.79633 3.63296e-05L16.0989 0.000102093Z" fill="#ffffff"/>
                          </svg>
                          <p>Enterprise Softwares</p>
                        </div>
                        <div className={styles.bullet}>
                          <svg  width="14" height="14" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.0989 0.000102093C17.7011 0.000110658 19 1.29897 19 2.9012V15.7445C19 18.3593 15.8126 19.6396 14.0039 17.7513L1.70129 4.90794C-0.0658543 3.06312 1.24168 2.26738e-05 3.79633 3.63296e-05L16.0989 0.000102093Z" fill="#ffffff"/>
                          </svg>
                          <p>React Native Apps</p>
                        </div>
                        <div className={styles.bullet}>
                          <svg  width="14" height="14" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.0989 0.000102093C17.7011 0.000110658 19 1.29897 19 2.9012V15.7445C19 18.3593 15.8126 19.6396 14.0039 17.7513L1.70129 4.90794C-0.0658543 3.06312 1.24168 2.26738e-05 3.79633 3.63296e-05L16.0989 0.000102093Z" fill="#ffffff"/>
                          </svg>
                          <p>Web Apps</p>
                        </div>
                        <div className={styles.bullet}>
                          <svg  width="14" height="14" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.0989 0.000102093C17.7011 0.000110658 19 1.29897 19 2.9012V15.7445C19 18.3593 15.8126 19.6396 14.0039 17.7513L1.70129 4.90794C-0.0658543 3.06312 1.24168 2.26738e-05 3.79633 3.63296e-05L16.0989 0.000102093Z" fill="#ffffff"/>
                          </svg>
                          <p>Data Visualisation</p>
                        </div>
                  </div>
              </div>
              <div className={styles.service}>
                  <div className={styles.mainRight}>
                    <img src='assets/image1.png' />
                  </div>
                  <div className={styles.mainLeft}>
                      <h2>Deploy</h2>
                      <p>‘In the end, it all comes down to 0 and 1’. This is where the product shapes up, and our team knows these 0’s and 1’s well.</p>
                      
                        <div className={styles.bullet}>
                          <div><svg  width="14" height="14" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.0989 0.000102093C17.7011 0.000110658 19 1.29897 19 2.9012V15.7445C19 18.3593 15.8126 19.6396 14.0039 17.7513L1.70129 4.90794C-0.0658543 3.06312 1.24168 2.26738e-05 3.79633 3.63296e-05L16.0989 0.000102093Z" fill="#ffffff"/>
                          </svg></div>
                          <div><p>Android Apps</p></div>
                        </div>
                        <div className={styles.bullet}>
                          <svg  width="14" height="14" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.0989 0.000102093C17.7011 0.000110658 19 1.29897 19 2.9012V15.7445C19 18.3593 15.8126 19.6396 14.0039 17.7513L1.70129 4.90794C-0.0658543 3.06312 1.24168 2.26738e-05 3.79633 3.63296e-05L16.0989 0.000102093Z" fill="#ffffff"/>
                          </svg>
                          <p>iOS Apps</p>
                        </div>
                        <div className={styles.bullet}>
                          <svg  width="14" height="14" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.0989 0.000102093C17.7011 0.000110658 19 1.29897 19 2.9012V15.7445C19 18.3593 15.8126 19.6396 14.0039 17.7513L1.70129 4.90794C-0.0658543 3.06312 1.24168 2.26738e-05 3.79633 3.63296e-05L16.0989 0.000102093Z" fill="#ffffff"/>
                          </svg>
                          <p>Enterprise Softwares</p>
                        </div>
                        <div className={styles.bullet}>
                          <svg  width="14" height="14" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.0989 0.000102093C17.7011 0.000110658 19 1.29897 19 2.9012V15.7445C19 18.3593 15.8126 19.6396 14.0039 17.7513L1.70129 4.90794C-0.0658543 3.06312 1.24168 2.26738e-05 3.79633 3.63296e-05L16.0989 0.000102093Z" fill="#ffffff"/>
                          </svg>
                          <p>React Native Apps</p>
                        </div>
                        <div className={styles.bullet}>
                          <svg  width="14" height="14" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.0989 0.000102093C17.7011 0.000110658 19 1.29897 19 2.9012V15.7445C19 18.3593 15.8126 19.6396 14.0039 17.7513L1.70129 4.90794C-0.0658543 3.06312 1.24168 2.26738e-05 3.79633 3.63296e-05L16.0989 0.000102093Z" fill="#ffffff"/>
                          </svg>
                          <p>Web Apps</p>
                        </div>
                        <div className={styles.bullet}>
                          <svg  width="14" height="14" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.0989 0.000102093C17.7011 0.000110658 19 1.29897 19 2.9012V15.7445C19 18.3593 15.8126 19.6396 14.0039 17.7513L1.70129 4.90794C-0.0658543 3.06312 1.24168 2.26738e-05 3.79633 3.63296e-05L16.0989 0.000102093Z" fill="#ffffff"/>
                          </svg>
                          <p>Data Visualisation</p>
                        </div>
                  </div>
              </div> */}
            </div> 
         {/*  </div>  */}
      </div>
  )
}

export default Slider