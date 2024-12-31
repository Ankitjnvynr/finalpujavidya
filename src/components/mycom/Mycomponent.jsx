import React from 'react';

const cardData = [
  {
    title: 'त्रिसंध्या तीर्थ, ग्राम संधौली, कुरुक्षेत्र',
    date: 'November 21, 2024',
    imgSrc: 'https://via.placeholder.com/150',
    description: 'A beautiful spiritual destination in Kurukshetra.',
    link: '/details/trisandhya-tirth'
  },
  {
    title: 'यम कुण्ड, भीसी मांझरा, कुरुक्षेत्र',
    date: 'December 2, 2023',
    imgSrc: 'https://via.placeholder.com/150',
    description: 'Known for its historic and religious importance.',
    link: '/details/yam-kund'
  },
  {
    title: 'विष्णुपद तीर्थ, चरायसी, कुरुक्षेत्र',
    date: 'December 2, 2023',
    imgSrc: 'https://via.placeholder.com/150',
    description: 'A serene location dedicated to Lord Vishnu.',
    link: '/details/vishnupad-tirth'
  },
  {
    title: 'बाला सुंदरी तीर्थ, हथीशा, कुरुक्षेत्र',
    date: 'December 2, 2023',
    imgSrc: 'https://via.placeholder.com/150',
    description: 'A tranquil place for peace and spirituality.',
    link: '/details/bala-sundari-tirth'
  },
  {
    title: 'बरणावती तीर्थ, बारना, कुरुक्षेत्र',
    date: 'December 2, 2023',
    imgSrc: 'https://via.placeholder.com/150',
    description: 'Famous for its mythological significance.',
    link: '/details/varnavati-tirth'
  },
  {
    title: 'नृसिंह तीर्थ, बारवा, कुरुक्षेत्र',
    date: 'December 2, 2023',
    imgSrc: 'https://via.placeholder.com/150',
    description: 'A holy site with rich spiritual history.',
    link: '/details/narsingh-tirth'
  },
  {
    title: 'कोशिकी तीर्थ, अभिमन्युपुर, कुरुक्षेत्र',
    date: 'December 2, 2023',
    imgSrc: 'https://via.placeholder.com/150',
    description: 'A peaceful retreat surrounded by nature.',
    link: '/details/kaushiki-tirth'
  },
  {
    title: 'अम्बा तीर्थ, अभिमन्युपुर, कुरुक्षेत्र',
    date: 'December 2, 2023',
    imgSrc: 'https://via.placeholder.com/150',
    description: 'A sacred place to connect with divinity.',
    link: '/details/amba-tirth'
  },
  {
    title: 'सोम तीर्थ, अभिमन्युपुर, कुरुक्षेत्र',
    date: 'December 2, 2023',
    imgSrc: 'https://via.placeholder.com/150',
    description: 'A tranquil spot perfect for reflection.',
    link: '/details/som-tirth'
  },
  {
    title: 'सरस्वती घाट, खड़ी मार्कंडा, कुरुक्षेत्र',
    date: 'December 2, 2023',
    imgSrc: 'https://via.placeholder.com/150',
    description: 'A serene ghatside experience.',
    link: '/details/saraswati-ghat'
  },
  {
    title: 'राम तीर्थ, धनसर, कुरुक्षेत्र',
    date: 'December 2, 2023',
    imgSrc: 'https://via.placeholder.com/150',
    description: 'Rich in history and spiritual charm.',
    link: '/details/ram-tirth'
  },
  {
    title: 'कुबेर तीर्थ, धनसर, कुरुक्षेत्र',
    date: 'December 2, 2023',
    imgSrc: 'https://via.placeholder.com/150',
    description: 'A unique place with mythological significance.',
    link: '/details/kuber-tirth'
  },
  {
    title: 'बदरायण तीर्थ, धामसर, कुरुक्षेत्र',
    date: 'December 2, 2023',
    imgSrc: 'https://via.placeholder.com/150',
    description: 'A perfect place for spiritual seekers.',
    link: '/details/badrayan-tirth'
  },
  {
    title: 'श्री कालेश्वर तीर्थ, धनसर, कुरुक्षेत्र',
    date: 'December 2, 2023',
    imgSrc: 'https://via.placeholder.com/150',
    description: 'A divine destination for pilgrims.',
    link: '/details/kaleshwar-tirth'
  }
];

export default function MyComponent() {
  return (
    <>
      <style jsx>{`
        .container {
          text-align: center;
          padding: 20px;
          margin-top: 80px;
        }
        .header {
          font-size: 2em;
          color: #333;
        }
        .description {
          font-size: 1.2em;
          color: #666;
          margin-bottom: 20px;
        }
        .card-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }
        .card {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 16px;
          max-width: 300px;
          text-align: left;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .card img {
          width: 100%;
          border-radius: 8px;
        }
        .card-title {
          font-size: 1.5em;
          margin: 10px 0;
          color: #333;
        }
        .card-date {
          font-size: 0.9em;
          color: #888;
        }
        .card-description {
          font-size: 1em;
          color: #555;
        }
        .card-button {
          display: inline-block;
          margin-top: 10px;
          padding: 10px 15px;
          font-size: 1em;
          color: white;
          background-color: #007BFF;
          text-decoration: none;
          border-radius: 5px;
          text-align: center;
        }
      `}</style>

      <div className="container">
        <h1 className="header">Dharmik Travel</h1>
        <p className="description">Experience the spiritual journey with us.</p>
        <div className="card-container">
          {cardData.map((card, index) => (
            <div className="card" key={index}>
              <img src={card.imgSrc} alt={card.title} />
              <h2 className="card-title">{card.title}</h2>
              <p className="card-date">{card.date}</p>
              <p className="card-description">{card.description}</p>
              <a href={card.link} className="card-button">Book Now</a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
