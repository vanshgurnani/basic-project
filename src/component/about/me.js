import React from 'react';
import styles from './me.module.css'; // Update the path to the CSS module
import cloud from '../css/cloud.png';
import mountain from '../css/mountain.png';
import vansh from '../css/vansh-photo-modified.png';
import comp from '../css/computer.png';
import books from '../css/books.jpg';

function About() {
  return (
    <div className={styles.body}>


      <div className={styles['top-container']}>
        <img className={styles['top-cloud']} src={cloud} alt="cloud_png"/>
        <h1 className={styles.h1}>I'm Vansh</h1>
        <p className={styles.p}>a programmer</p>
        <img className={styles['bottom-cloud']} src={cloud} alt="cloud_png"/>
        <img className={styles['mountain']} src={mountain} alt="mountain_png"/>
      </div>


      <div className={styles['middle-container']}>
        <div className={styles.profile}>
          <img src={vansh} alt="phot_png" height="200px"/>
          <h2>Hello.</h2>
          <p className={styles.intro}>Lorem ipsum dolor sit amet, vitae volutpat, dui conubia, dolor urna. Non auctor, montes nulla distinctio.</p>
        </div>
        <div className={styles['middle-container']}>
  <hr className={styles.hr}/>
  <div className={styles.skills}>
    <h2>My Skills.</h2>
    <div className={styles['skill-row']}>
      <img className={styles.c1} src={comp} alt="comp_png"/>
      <h3 className={styles.code}>Coding</h3>
      <p className={styles.p1}>Lorem ipsum dolor sit amet, quis in duis, iaculis id felis. Consectetuer vestibulum, nunc urna lectus, erat ligula. Hendrerit nam, lectus ante, ut lorem eros.</p>
    </div>
    <div className={styles['skill-row']}>
      <img className={styles.b1} src={books} alt="book_png"/>
      <h3 className={styles.book}>Reading Books</h3>
      <p className={styles.p2}>Lorem ipsum dolor sit amet, mauris sed consectetuer. Etiam et eu, bibendum interdum, lacus quis mauris. Curabitur wisi, quisque vel eu, rutrum nam.</p>
    </div>
  </div>
  <hr className={styles.hr}/>
  <div className={styles['contact-me']}>
    <h2 className={styles.h2}>Get In Touch</h2>
    <h3 className={styles.h2}>Lorem ipsum dolor sit amet, non elit.</h3>
    <p className={styles['contact-message']}>Lorem ipsum dolor sit amet, in quis, aenean amet. Phasellus sodales, tellus donec dui, ornare erat.</p>
    <button type="button" className={`${styles.btn} btn btn-info`}><a className={styles.btn} href="mailto:name@email.com" target="_blank">CONTACT ME</a></button>
  </div>
</div>
</div>


      <div className={styles['bottom-container']}>
        <a className={styles['footer-link']} href="#" target="_blank">LinkedIn</a>
        <a className={styles['footer-link']} href="#" target="_blank">Twitter</a>
        <a className={styles['footer-link']} href="#" target="_blank">Website</a>
        <p className={styles['copyright']}>© Name Surname.</p>
      </div>


    </div>
  );
}

export default About;
