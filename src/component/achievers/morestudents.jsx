import React from 'react';
import './morestudent.css'; // Ensure this CSS file exists and is properly styled

// Import all images from the students directory
import image0 from './students/0.jpg';
import image1 from './students/1.jpg';
import image2 from './students/2.jpg';
import image3 from './students/3.jpg';
import image4 from './students/4.jpg';
import image5 from './students/5.jpg';
import image6 from './students/6.jpg';
import image7 from './students/7.jpg';
import image8 from './students/8.jpg';
import image9 from './students/9.jpg';
import image10 from './students/10.jpg';
import image11 from './students/11.jpg';
import image12 from './students/12.jpg';
import image13 from './students/13.jpg';
import image14 from './students/14.jpg';
import image15 from './students/15.jpg';
import image16 from './students/16.jpg';
import image17 from './students/17.jpg';
import image18 from './students/18.jpg';
import image19 from './students/19.jpg';
import image20 from './students/20.jpg';
import image21 from './students/21.jpg';
import image22 from './students/22.jpg';
import image23 from './students/23.jpg';
import image24 from './students/24.jpg';

// Map image filenames to their imports
const images = {
  '0.jpg': image0,
  '1.jpg': image1,
  '2.jpg': image2,
  '3.jpg': image3,
  '4.jpg': image4,
  '5.jpg': image5,
  '6.jpg': image6,
  '7.jpg': image7,
  '8.jpg': image8,
  '9.jpg': image9,
  '10.jpg': image10,
  '11.jpg': image11,
  '12.jpg': image12,
  '13.jpg': image13,
  '14.jpg': image14,
  '15.jpg': image15,
  '16.jpg': image16,
  '17.jpg': image17,
  '18.jpg': image18,
  '19.jpg': image19,
  '20.jpg': image20,
  '21.jpg': image21,
  '22.jpg': image22,
  '23.jpg': image23,
  '24.jpg': image24,
};

// Array of students with their respective image paths
const students = [
  { name: 'Student 1', image: '0.jpg' },
  { name: 'Student 2', image: '1.jpg' },
  { name: 'Student 3', image: '2.jpg' },
  { name: 'Student 4', image: '3.jpg' },
  { name: 'Student 5', image: '4.jpg' },
  { name: 'Student 6', image: '5.jpg' },
  { name: 'Student 7', image: '6.jpg' },
  { name: 'Student 8', image: '7.jpg' },
  { name: 'Student 9', image: '8.jpg' },
  { name: 'Student 10', image: '9.jpg' },
  { name: 'Student 11', image: '10.jpg' },
  { name: 'Student 12', image: '11.jpg' },
  { name: 'Student 13', image: '12.jpg' },
  { name: 'Student 14', image: '13.jpg' },
  { name: 'Student 15', image: '14.jpg' },
  { name: 'Student 16', image: '15.jpg' },
  { name: 'Student 17', image: '16.jpg' },
  { name: 'Student 18', image: '17.jpg' },
  { name: 'Student 19', image: '18.jpg' },
  { name: 'Student 20', image: '19.jpg' },
  { name: 'Student 21', image: '20.jpg' },
  { name: 'Student 22', image: '21.jpg' },
  { name: 'Student 23', image: '22.jpg' },
  { name: 'Student 24', image: '23.jpg' },
  { name: 'Student 25', image: '24.jpg' },
];

const MoreStudents = () => {
  return (
    <div className="student-container">
      <h1>Our Students</h1>
      <div className="student-grid">
        {students.map((student, index) => (
          <div key={index} className="student-image-container">
            <img
              src={images[student.image]}
              alt={student.name}
            />
            <div className="student-overlay">
              <h3>{student.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreStudents;
