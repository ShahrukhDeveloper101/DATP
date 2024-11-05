import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

import NavbarComponent from './Navbar'; 
import Register from './Registration'; 
import UserRegister from './User_registration'; 
import DoctorRegister from './Doctor_registration'; 
import ClinicRegister from './Clinic_registration'; 
import Sign_in from './Sign_in'; 
import Home from './Home'; 
import Home_Categories from './Home_Categories'; 
import Blogs from './Blogs'; 
import How_works from './How_works'; 
import Questions from './Questions'; 
import Reviews from './Reviews'; 
import Footer from './Footer'; 
import Copyright from './Copyright'; 
import Doctors from './components/Doctors'; 
import DoctorsPage from './Doctors_page'; 
import Doctor from './components/Doctor'; 
import { useState } from 'react';


function App() { 

  const doctorsListArray = [
    {
      id: 1,
      name: 'Aqib Ayub',
      specialty: 'Neurologist',
      status: 'PMDC Verified',
      education: 'MBBS',
      experience: '10 years',
      reviews: 150,
      profileImg: '/1.jpg',
      waitTime: 'Under 15 min',
      satisfiedPatients: 90,
      availabilityStart: 9,
      availabilityEnd: 21,
      consultations: [
        {
          type: 'DATP Video Consultation',
          fee: 600,
          availability: 'Tue, Oct 29',
          isVideoConsultation: true
        },
        {
          type: 'Gujrat Hospital',
          fee: 500,
          availability: 'Wed, Oct 30',
          isVideoConsultation: false,
          location: 'Gujrat'
        }
      ],
      reviewDetails: [
        {
          reviewer: 'Ali Raza',
          comment: 'Great doctor, very helpful and professional.',
          rating: 5,
          date: '2024-10-15'
        },
        {
          reviewer: 'Sara Ali',
          comment: 'Had a good experience, very knowledgeable.',
          rating: 4,
          date: '2024-09-20'
        }
      ]
    },
    {
      id: 2,
      name: 'Ahmad Butt',
      specialty: 'Neurologist',
      status: 'PMDC Verified',
      education: 'MBBS',
      experience: '8 years',
      reviews: 120,
      profileImg: '/4.jpg',
      waitTime: 'Under 30 min',
      satisfiedPatients: 85,
      availabilityStart: 8,
      availabilityEnd: 17,
      consultations: [
        {
          type: 'DATP Video Consultation',
          fee: 800,
          availability: 'Mon, Nov 1',
          isVideoConsultation: true
        },
        {
          type: 'City Clinic',
          fee: 400,
          availability: 'Tue, Nov 2',
          isVideoConsultation: false,
          location: 'Lahore'
        },
        {
          type: 'Nosmo Clinic',
          fee: 700,
          availability: 'Tue, Nov 2',
          isVideoConsultation: false,
          location: 'Lahore'
        }
      ],
      reviewDetails: [
        {
          reviewer: 'Zainab Malik',
          comment: 'Very thorough and attentive.',
          rating: 5,
          date: '2024-10-10'
        }
      ]
    },
    {
      id: 3,
      name: 'Kamran Khan',
      specialty: 'Gynecologist',
      status: 'PMDC Verified',
      education: 'MBBS',
      experience: '7 years',
      reviews: 30,
      profileImg: '/3.jpg',
      waitTime: 'Under 10 min',
      satisfiedPatients: 92,
      availabilityStart: 6,
      availabilityEnd: 18,
      consultations: [
        {
          type: 'DATP Video Consultation',
          fee: 700,
          availability: 'Wed, Oct 31',
          isVideoConsultation: true
        },
        {
          type: 'Khawajgan Hospital',
          fee: 350,
          availability: 'Thu, Nov 2',
          isVideoConsultation: false,
          location: 'Karachi'
        }
      ],
      reviewDetails: [
        {
          reviewer: 'Farah Ali',
          comment: 'Excellent doctor, made me feel comfortable.',
          rating: 4.5,
          date: '2024-08-15'
        }
      ]
    },
    {
      id: 4,
      name: 'Asma Khan',
      specialty: 'Neurologist',
      status: 'PMDC Verified',
      education: 'MBBS',
      experience: '3 years',
      reviews: 20,
      profileImg: '/2.jpg',
      waitTime: 'Under 5 min',
      satisfiedPatients: 95,
      availabilityStart: 9,
      availabilityEnd: 24,
      consultations: [
        {
          type: 'DATP Video Consultation',
          fee: 650,
          availability: 'Fri, Nov 3',
          isVideoConsultation: true
        }
      ],
      reviewDetails: [
        {
          reviewer: 'Ahmed Sheikh',
          comment: 'Very approachable and friendly.',
          rating: 4,
          date: '2024-09-05'
        }
      ]
    },
    {
      id: 5,
      name: 'Amina Khan',
      specialty: 'Neurologist',
      status: 'PMDC Verified',
      education: 'MBBS',
      experience: '13 years',
      reviews: 823,
      profileImg: '/v5.jpg',
      waitTime: 'Under 20 min',
      satisfiedPatients: 88,
      availabilityStart: 7,
      availabilityEnd: 13,
      consultations: [
        {
          type: 'DATP Video Consultation',
          fee: 750,
          availability: 'Sat, Nov 4',
          isVideoConsultation: true
        },
        {
          type: 'Dow Medical Clinic',
          fee: 450,
          availability: 'Mon, Nov 6',
          isVideoConsultation: false,
          location: 'Islamabad'
        }
      ],
      reviewDetails: [
        {
          reviewer: 'Shahid Khan',
          comment: 'Very knowledgeable and professional.',
          rating: 5,
          date: '2024-07-30'
        },
        {
          reviewer: 'Sadia Jamil',
          comment: 'Good experience overall.',
          rating: 4.2,
          date: '2024-06-20'
        }
      ]
    }
  ];

  const specialitiesArray = ["Dermatologists", "Urologist", "Cardiologist", "General Physician", "Allergy Specialist", "Acupuncture"];

  const featuredSpecialitiesArray = [
    {id:1, name: 'Neurology', count: 200, image: "https://images.unsplash.com/photo-1576073971353-92d0974c48c6", },
    {id:2, name: 'Orthopedics', count: 20, image: "https://unsplash.com/photos/a-model-of-a-human-skeleton-is-shown-QyedPFUKYkw", },
    {id:3, name: 'Cardiologist', count: 197,  image: "https://images.unsplash.com/photo-1606016103055-56e9a94f1c7c", },
    {id:4, name: 'Pediatrics', count: 120, image: "https://images.unsplash.com/photo-1594853458180-62258cd5579d", },
    {id:5, name: 'Gynecology', count: 260,  image: "https://images.unsplash.com/photo-1568665850899-e881a0c5762a", },
    {id:6, name: 'Psychiatry', count: 780, image: "https://images.unsplash.com/photo-1580420570798-2d3e87c687bb", }
  ];
 
  const [bookings, setBookings] = useState('');

  return ( 
    <Router> 
      <NavbarComponent/> 
      <Routes>  
        <Route path="/" element={
          <>
            <Home/>
            <Home_Categories/>
            <Blogs/>
            <How_works/>
            <Questions/>
            <Reviews/>
            <Footer/>
            <Copyright/>
          </>
        }/> 
        <Route path="/register" element={<Register/>}/> 
        <Route path="/doctors" element={
          <>
            <Doctors specialities={specialitiesArray} featuredSpecialities={featuredSpecialitiesArray}/>
            <Footer/>
            <Copyright/>
          </>
        }/> 
        <Route path="/doctors_page" element={
          <>
            <DoctorsPage doctors={doctorsListArray} bookings={bookings}/>
            <Footer/>
            <Copyright/>
          </>
          }/> 
        <Route path="/doctor/:id" element={
          <>
            <Doctor doctors={doctorsListArray}/>
            <Footer/>
            <Copyright/>
          </>
          }/> 
        <Route path="/user_registration" element={<UserRegister/>}/> 
        <Route path="/doctor_registration" element={<DoctorRegister/>}/> 
        <Route path="/clinic_registration" element={<ClinicRegister/>}/> 
        <Route path="/sign_in" element={<Sign_in/>}/> 
      </Routes> 
    </Router> 
  );
}

export default App; 
