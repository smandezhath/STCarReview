import React from 'react';
import CarDetails from './Components/Detailsview';

function App() {
  const car = {
    title: 'Bugatti Chiron Super Sport',
    companyName: 'Bugatti',
    model: 'Chiron Super Sport',
    category: 'Two-Seater Sports',
    description: 'After the CHIRON and CHIRON Sport, the CHIRON Pur Sport showed the ferocious personality of a hyper sports car made for corners and lateral agility. Now, with the CHIRON Super Sport, we are following our long tradition of combining extreme high speed with absolute luxury, to offer a whole new dimension of the BUGATTI experience. With its longtail streamlined design and the fabulous performance of its 1.600 PS, the CHIRON Super Sport represents the essence of what we have learned and developed in recent years and honors the Super Sport brand nine decades after its birth. The CHIRON Super Sport is the ultimate Grand Tourisme, delivering brutal performance in total comfort.',
    year: '2022',
    mileage: '8 kmpl',
    price: '$4.2 million'
  };

  return (
    <div>
      
      <CarDetails 
        title={car.title}
        companyName={car.companyName}
        model={car.model}
        category={car.category}
        description={car.description}
        year={car.year}
        mileage={car.mileage}
        price={car.price}
      />
    </div>
  );
}

export default App;
