import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './reviewsection.css';

const ReviewsSection = () => {
  const reviews = [
    {
      initials: 'I',
      name: 'Isioma',
      text: "Perfect! My son likes Aman's lesson very much. My son said Aman taught him a lot of tactics and he was also very patient in trying to understand my son's strength and weakness."
    },
    {
      initials: 'J',
      name: 'Jerry',
      text: "Perfect! Aman was really good at realising my child's flaws in chess and gave helpful tips during the lesson. Everything he said or answered was very well explained."
    },
    {
      initials: 'K',
      name: 'Kamyab',
      text: "Very friendly and very knowledgeable teacher. I can see myself progressing after only a couple of lessons."
    },
    {
      initials: 'J',
      name: 'Jacob',
      text: 'A very thoughtful, patient and conscientious tutor who explains chess in an exciting way. Would highly recommend.'
    },
    {
      initials: 'S',
      name: 'Shehla',
      text: "I think Aman is a good tutor because he is always teaching me about new rules and he will always help me out in a game and teach me strong tactics. Since Aman has started to coach me my chess is getting better and my chess.com rating is getting better as well."
    },
    {
      initials: 'P',
      name: 'Praveen',
      text: "I found Aman both reliable & talented tutor. He responded to my messages immediately and arranged a class with very short notice from my side. I also found him a talented tutor who quickly understood my needs as a beginner chess player and guided me accordingly. Highly recommended."
    },
    {
      initials: 'J',
      name: 'Jason',
      text: "Aman has only been teaching our son for a few weeks. It is clear though we made the right choice. Our son is already improving and loves his lessons with Aman. I absolutely recommend him."
    },
    {
      initials: 'H',
      name: 'Hugomato10',
      text: "Rapid 1000 for the first time! Couldn’t have done it without you, Aman. Thank you for your coaching!"
    },
    {
      initials: 'D',
      name: 'Daniel',
      text: "Aman is an excellent chess coach for children and adults. He has been teaching my 8 year-old daughter and 80+ year old father! He is patient, polite and explains things clearly. He is also very responsive."
    },
    {
      initials: 'P',
      name: 'Peter',
      text: "Aman is a highly skilled player who uses his knowledge to feedback at the level of the learner. His first lesson was very insightful and gave me plenty to think about."
    },
    {
      initials: 'M',
      name: 'Michael',
      text: "Always accommodating. Very knowledgeable and patient. Gives lots of ideas and philosophies. But mostly teaches solid chess."
    },
    {
      initials: 'J',
      name: 'Joanne',
      text: "Perfect! My son has really enjoyed his chess lessons with Aman and has learned a great deal. Very patient and lessons well planned."
    }
  ];

  return (
    <section id="reviews">
      <div class="line-flex"><div class="line"></div><h2 class="">Reviews</h2><div class="line"></div></div>
      <Carousel>
        {reviews.map((review, index) => (
          <Carousel.Item key={index}>
            <div className="review-card">
              <div className="review-card-header">
                <div className="star-rating">
                  <span className="review-card-digit">5</span>
                  <span className="review-card-star">&#9733;</span>
                </div>
              </div>
              <div className="review-card-content">
                <div className="initials">{review.initials}</div>
                <p>
                  <strong>{review.name}</strong> <br />
                  {review.text}
                </p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default ReviewsSection;
