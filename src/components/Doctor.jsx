// DoctorDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Doctor.module.css';
import profile from '/1.jpg';
import DoctorListing from './DoctorListing'

const Doctor = ({ doctors }) => {
  const { id } = useParams();

  // Find the doctor by matching the id
  const doctor = doctors.find((doc) => doc.id === parseInt(id));

  // Handle if doctor is not found
  if (!doctor) {
    return <h2>Doctor not found</h2>;
  }

  // const reviews = [
  //   {
  //     username: 'John Doe',
  //     rating: 5,
  //     comment: 'Excellent doctor, highly recommend!',
  //     date: 'Oct 1, 2024',
  //   },
  //   {
  //     username: 'Jane Smith',
  //     rating: 4,
  //     comment: 'Very knowledgeable and professional.',
  //     date: 'Sep 20, 2024',
  //   },
  //   {
  //     username: 'Ali Raza',
  //     rating: 4.5,
  //     comment: 'Friendly and attentive. Good experience overall.',
  //     date: 'Aug 15, 2024',
  //   },
  // ];

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <DoctorListing doctorName={doctor.name} specialty={doctor.specialty} status={doctor.status} education={doctor.education} experience={doctor.experience} reviews={doctor.reviews} profileImg={doctor.profileImg} waitTime={doctor.waitTime} satisfiedPatients={doctor.satisfiedPatients} consultations={doctor.consultations}></DoctorListing>
          </div>
          <div className="col-9 mb-5">
            <div className={styles.doctorDetailContainer}>
              <div className={styles.mainContent}>
                {/* Left Column */}
                <div className={styles.leftColumn}>
                  <div className={styles.reviewSection}>
                    <h3>Reviews</h3>
                    {doctor.reviewDetails.map((review, index) => (
                      <>
                        <div key={index} className={styles.review}>
                          <p className={styles.reviewUsername}>{review.reviewer}</p>
                          <p className={styles.reviewRating}>Rating: ★ {review.rating}</p>
                          <p className={styles.reviewComment}>{review.comment}</p>
                          <p className={styles.reviewDate}>{review.date}</p>
                        </div>
                        <hr/>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>  
    </>
  );
};

export default Doctor;
