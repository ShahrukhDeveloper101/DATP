// Doctors.js
import React from 'react';
import { Link } from 'react-router-dom';
import SearchDoc from '../Search_doc';
import styles from './Doctors.module.css';

const Doctors = ({ specialities, featuredSpecialities }) => {
  return (
    <div className={styles.doctorsComponent}>
      <div className={styles.headingContainer}>
        <h1 className={styles.heading}>Find The Best Doctors in Pakistan by Speciality</h1>
        <div className={`${styles.searchContainer} mt-4`}>
          <SearchDoc placeholder="Find by speciality" />
        </div>
      </div>
      <div className={styles.doctorsRecordBox}>
        <h5>Most Viewed Specialities</h5>
        <div className={styles.specialitiesContainer}>
          {featuredSpecialities.map((speciality, index) => (
            <div key={index} className={styles.recordArea}>
              {/* <img src={speciality.image} alt={speciality.name} className={styles.doctorImage} /> */}
              <Link to="/doctors_page" className={styles.link}>{speciality.name}</Link>
              <h6>{speciality.count} Doctors Available</h6>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.doctorsRecordBox}>
        <h5>Doctors of Different Specialities in Pakistan</h5>
        <div className={styles.specialitiesContainer}>
          {specialities.map((speciality, index) => (
            <div key={index} className={styles.recordArea}>
              {/* <img src={`/${speciality.toLowerCase()}.jpg`} alt={speciality} className={styles.doctorImage} /> */}
              <Link to="/doctors_page" className={styles.link}>{speciality}</Link>
              <h6>210 Doctors Available</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
