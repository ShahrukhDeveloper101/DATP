// DoctorListing.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './DoctorListing.module.css';
import Popup from './Popup';

const DoctorListing = ({ 
  doctorId,
  doctorName,
  specialty,
  status,
  education,
  experience,
  reviews,
  profileImg, 
  waitTime,
  satisfiedPatients,
  availabilityEnd,
  availabilityStart,
  consultations,
  useLink = false,
  listings = false,
  bookings,
    }) => {

  const [isPopupOpen, setPopupOpen] = useState(false);
  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);

  return (
    <>
      <div className="row my-4">
        <div className="col-lg-9">
          <div className={styles.doctorListingContent}>
            <div className="row">
              <div className="col-2">
                {useLink ? (
                  <Link to={`/doctor/${doctorId}`}>
                    <div className={styles.doctorImage}>
                      <img src={profileImg} className="img-fluid" alt="Doctor Profile"/>
                    </div>
                  </Link>
                ) : (
                  <div className={styles.doctorImage}>
                    <img src={profileImg} className="img-fluid" alt="Doctor Profile"/>
                  </div>
                )}
              </div>
              <div className="col-7 row">
                <div className="col-6">
                  {useLink ? (
                    <Link to={`/doctor/${doctorId}`}>
                      <div className={styles.doctorName}>{doctorName}</div>
                    </Link>
                  ): (
                    <div className={styles.doctorName}>{doctorName}</div>               
                  )}
                  <div className={styles.doctorStatus}>{status}</div>
                  <div className={styles.doctorSpecialty}>{specialty}</div>
                  <div className={styles.doctorEducation}>{education}</div>
                </div>
                <div className={`col-12 row ${styles.doctorDetails}`}>
                  <div className="col-4">
                    <div className={styles.detailTitle}>
                      {waitTime}
                    </div>
                    <div className={styles.detailSubtitle}>
                      Wait Time
                    </div>
                  </div>
                  <div className="col-4">
                    <div className={styles.detailTitle}>
                      {experience}
                    </div>
                    <div className={styles.detailSubtitle}>
                      Experience
                    </div>
                  </div>
                  <div className="col-4">
                  {useLink ? ( 
                    <Link to={`/doctor/${doctorId}`}>
                      <div className={styles.detailTitle}>
                        {satisfiedPatients}% ({reviews})
                      </div>
                    </Link>
                  ): (
                    <div className={styles.detailTitle}>
                      {satisfiedPatients}% ({reviews})
                    </div>
                  )}
                    <div className={styles.detailSubtitle}>
                      Satisfied Patients
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className={styles.bookingOptions}>
                  {listings ? (
                    <>
                      <Link to={`/doctor/${doctorId}`} className={styles.btnVideoConsultation}>Video Consultation</Link>
                      <Link to={`/doctor/${doctorId}`} className={styles.btnViewProfile}>View Profile</Link>
                    </>
                  ):(
                    <>
                      <button onClick={openPopup} className={styles.btnVideoConsultation}>Online Appoinment</button>
                      <button onClick={openPopup} className={styles.btnViewProfile}>Visit in Clinic</button> 
                      <Popup isOpen={isPopupOpen} onClose={closePopup} availabilityStartItem={availabilityStart} availabilityEndItem={availabilityEnd} title="My Popup" children="test ninbiwvnovbojwbi">
                        <p>This is the content of the popup!</p>
                      </Popup>
                    </>
                  )}
                </div>
              </div>
              <hr className="my-3"/>
              {consultations.map((consultation, index) => (
                <div className="col-4" key={index}>
                  {listings ? (
                    <Link to={`/doctor/${doctorId}`}>
                      <div className={styles.consultationInfo}>
                        <div className="row">
                          <div className="col-12">
                            <div className={styles.consultationType}>
                              {consultation.type}
                            </div>
                          </div>
                          <div className="col-8">
                            <div className={styles.availability}>
                              Available {consultation.availability}
                            </div>
                          </div>
                          <div className="col-4">
                            <div className={styles.consultationPrice}>
                              Rs. {consultation.fee}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <Link to={`/no`}>
                      <div className={styles.consultationInfo}>
                        <div className="row">
                          <div className="col-12">
                            <div className={styles.consultationType}>
                              {consultation.type}
                            </div>
                          </div>
                          <div className="col-8">
                            <div className={styles.availability}>
                              Available {consultation.availability}
                            </div>
                          </div>
                          <div className="col-4">
                            <div className={styles.consultationPrice}>
                              Rs. {consultation.fee}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className={styles.videoConsultationSection}>
            <iframe src="https://www.youtube.com/embed/dQRBfvPT4Ag?si=aAjyak3IXbDFEqML" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{width: "100%", height: "10rem"}}></iframe>
            <Link to={`/doctor/${doctorId}`} className={styles.btnViewSchedule}>View Profile</Link>
            <Link to={`/doctor/${doctorId}`} className={styles.btnViewSchedule}>View Full Schedule</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorListing;
