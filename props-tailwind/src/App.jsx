import { useState } from 'react'

import Figure from './components/Figure'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-amber-100'>
      <h1 className='bg-amber-200 text-purple-800 p-4 rounded-xl mb-6 tracking-widest text-8xl subpixel-antialiased text-center'>React Props & Tailwind</h1>

      <h5 className='bg-amber-200 text-purple-800 p-2 rounded-xl mb-6 text-lg tracking-widest text-center subpixel-antialiased italic font-bold'>History of the Automobile</h5>

      <Figure 
      cardName = "Benz Patent-Motorwagen" 
      founder="Carl benz" 
      img = "https://group.mercedes-benz.com/bilder/konzern/tradition/geschichte/anfaenge-des-automobils/benz-patent-motorwagen-w1680xh945-cutout.png"
      abtfounder="automotive engineer" 
      about = "“On January 29, 1886, Carl Benz applied for a patent for his “vehicle powered by a gas engine.” The patent – number 37435 – may be regarded as the birth certificate of the automobile. In July 1886 the newspapers reported on the first public outing of the three-wheeled Benz Patent Motor Car, model no. 1." 
      />

      <Figure  
      cardName = "The Quadricycle" 
      founder="Henry Ford" 
      img = "https://upload.wikimedia.org/wikipedia/commons/a/a3/FordQuadricycle.jpg"
      abtfounder="automotive engineer" 
      about = "...Back when it was built It was Progressive Matt Anderson is curator of Transportation. At the Henry Ford. And he takes us back to the beginning to the replica of a workshop shed. Or Ford..." 
      />

      <Figure 
      cardName = "Tata Indica" 
      founder="Jamshedji Tata" 
      img = "https://blogs.gomechanic.com/wp-content/uploads/2020/03/ti5.jpeg"
      abtfounder="Indian industrialist and philanthropist" 
      about = "In 1998, Tata Motors presented India's first indigenously developed passenger car, the Tata Indica, at the Geneva Motor Show. As the authentic 'Indian car', it quickly topped the Indian car market within two years. The achievement highlighted our prowess in innovation, design and localisation."
       />

      <Figure 
      cardName = "Rolls-Royce 10 hp" 
      founder="Charles Stewart Rolls and Sir Henry Royce" 
      img = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Rolls-Royce_1011288360.jpg/1920px-Rolls-Royce_1011288360.jpg"
      abtfounder="automotive engineer"
      about = "The first car built and sold under the Rolls-Royce name was the Rolls-Royce 10 hp, which was unveiled at the Paris Salon in December 1904. The car was reengineered from an existing, well-regarded machine."
       />

<Figure 
      cardName = "Benz Patent-Motorwagen" 
      founder="Carl benz" 
      img = "https://group.mercedes-benz.com/bilder/konzern/tradition/geschichte/anfaenge-des-automobils/benz-patent-motorwagen-w1680xh945-cutout.png"
      abtfounder="automotive engineer" 
      about = "“On January 29, 1886, Carl Benz applied for a patent for his “vehicle powered by a gas engine.” The patent – number 37435 – may be regarded as the birth certificate of the automobile. In July 1886 the newspapers reported on the first public outing of the three-wheeled Benz Patent Motor Car, model no. 1." 
      />

<Figure  
      cardName = "The Quadricycle" 
      founder="Henry Ford" 
      img = "https://upload.wikimedia.org/wikipedia/commons/a/a3/FordQuadricycle.jpg"
      abtfounder="automotive engineer" 
      about = "...Back when it was built It was Progressive Matt Anderson is curator of Transportation. At the Henry Ford. And he takes us back to the beginning to the replica of a workshop shed. Or Ford..." 
      />

<Figure 
      cardName = "Tata Indica" 
      founder="Jamshedji Tata" 
      img = "https://blogs.gomechanic.com/wp-content/uploads/2020/03/ti5.jpeg"
      abtfounder="Indian industrialist and philanthropist" 
      about = "In 1998, Tata Motors presented India's first indigenously developed passenger car, the Tata Indica, at the Geneva Motor Show. As the authentic 'Indian car', it quickly topped the Indian car market within two years. The achievement highlighted our prowess in innovation, design and localisation."
       />

<Figure 
      cardName = "Rolls-Royce 10 hp" 
      founder="Charles Stewart Rolls and Sir Henry Royce" 
      img = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Rolls-Royce_1011288360.jpg/1920px-Rolls-Royce_1011288360.jpg"
      abtfounder="automotive engineer"
      about = "The first car built and sold under the Rolls-Royce name was the Rolls-Royce 10 hp, which was unveiled at the Paris Salon in December 1904. The car was reengineered from an existing, well-regarded machine."
       />

<Figure 
      cardName = "Rolls-Royce 10 hp" 
      founder="Charles Stewart Rolls and Sir Henry Royce" 
      img = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Rolls-Royce_1011288360.jpg/1920px-Rolls-Royce_1011288360.jpg"
      abtfounder="automotive engineer"
      about = "The first car built and sold under the Rolls-Royce name was the Rolls-Royce 10 hp, which was unveiled at the Paris Salon in December 1904. The car was reengineered from an existing, well-regarded machine."
       />

<Figure 
      cardName = "Rolls-Royce 10 hp" 
      founder="Charles Stewart Rolls and Sir Henry Royce" 
      img = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Rolls-Royce_1011288360.jpg/1920px-Rolls-Royce_1011288360.jpg"
      abtfounder="automotive engineer"
      about = "The first car built and sold under the Rolls-Royce name was the Rolls-Royce 10 hp, which was unveiled at the Paris Salon in December 1904. The car was reengineered from an existing, well-regarded machine."
       />

<Figure 
      cardName = "Rolls-Royce 10 hp" 
      founder="Charles Stewart Rolls and Sir Henry Royce" 
      img = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Rolls-Royce_1011288360.jpg/1920px-Rolls-Royce_1011288360.jpg"
      abtfounder="automotive engineer"
      about = "The first car built and sold under the Rolls-Royce name was the Rolls-Royce 10 hp, which was unveiled at the Paris Salon in December 1904. The car was reengineered from an existing, well-regarded machine."
       />

<Figure 
      cardName = "Rolls-Royce 10 hp" 
      founder="Charles Stewart Rolls and Sir Henry Royce" 
      img = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Rolls-Royce_1011288360.jpg/1920px-Rolls-Royce_1011288360.jpg"
      abtfounder="automotive engineer"
      about = "The first car built and sold under the Rolls-Royce name was the Rolls-Royce 10 hp, which was unveiled at the Paris Salon in December 1904. The car was reengineered from an existing, well-regarded machine."
       />

<Figure 
      cardName = "Rolls-Royce 10 hp" 
      founder="Charles Stewart Rolls and Sir Henry Royce" 
      img = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Rolls-Royce_1011288360.jpg/1920px-Rolls-Royce_1011288360.jpg"
      abtfounder="automotive engineer"
      about = "The first car built and sold under the Rolls-Royce name was the Rolls-Royce 10 hp, which was unveiled at the Paris Salon in December 1904. The car was reengineered from an existing, well-regarded machine."
       />

<Figure 
      cardName = "Rolls-Royce 10 hp" 
      founder="Charles Stewart Rolls and Sir Henry Royce" 
      img = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Rolls-Royce_1011288360.jpg/1920px-Rolls-Royce_1011288360.jpg"
      abtfounder="automotive engineer"
      about = "The first car built and sold under the Rolls-Royce name was the Rolls-Royce 10 hp, which was unveiled at the Paris Salon in December 1904. The car was reengineered from an existing, well-regarded machine."
       />

<Figure 
      cardName = "Benz Patent-Motorwagen" 
      founder="Carl benz" 
      img = "https://group.mercedes-benz.com/bilder/konzern/tradition/geschichte/anfaenge-des-automobils/benz-patent-motorwagen-w1680xh945-cutout.png"
      abtfounder="automotive engineer" 
      about = "“On January 29, 1886, Carl Benz applied for a patent for his “vehicle powered by a gas engine.” The patent – number 37435 – may be regarded as the birth certificate of the automobile. In July 1886 the newspapers reported on the first public outing of the three-wheeled Benz Patent Motor Car, model no. 1." 
      />

      <Figure  
      cardName = "The Quadricycle" 
      founder="Henry Ford" 
      img = "https://upload.wikimedia.org/wikipedia/commons/a/a3/FordQuadricycle.jpg"
      abtfounder="automotive engineer" 
      about = "...Back when it was built It was Progressive Matt Anderson is curator of Transportation. At the Henry Ford. And he takes us back to the beginning to the replica of a workshop shed. Or Ford..." 
      />

      <Figure 
      cardName = "Tata Indica" 
      founder="Jamshedji Tata" 
      img = "https://blogs.gomechanic.com/wp-content/uploads/2020/03/ti5.jpeg"
      abtfounder="Indian industrialist and philanthropist" 
      about = "In 1998, Tata Motors presented India's first indigenously developed passenger car, the Tata Indica, at the Geneva Motor Show. As the authentic 'Indian car', it quickly topped the Indian car market within two years. The achievement highlighted our prowess in innovation, design and localisation."
       />

      <Figure 
      cardName = "Rolls-Royce 10 hp" 
      founder="Charles Stewart Rolls and Sir Henry Royce" 
      img = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Rolls-Royce_1011288360.jpg/1920px-Rolls-Royce_1011288360.jpg"
      abtfounder="automotive engineer"
      about = "The first car built and sold under the Rolls-Royce name was the Rolls-Royce 10 hp, which was unveiled at the Paris Salon in December 1904. The car was reengineered from an existing, well-regarded machine."
       />

<Figure 
      cardName = "Benz Patent-Motorwagen" 
      founder="Carl benz" 
      img = "https://group.mercedes-benz.com/bilder/konzern/tradition/geschichte/anfaenge-des-automobils/benz-patent-motorwagen-w1680xh945-cutout.png"
      abtfounder="automotive engineer" 
      about = "“On January 29, 1886, Carl Benz applied for a patent for his “vehicle powered by a gas engine.” The patent – number 37435 – may be regarded as the birth certificate of the automobile. In July 1886 the newspapers reported on the first public outing of the three-wheeled Benz Patent Motor Car, model no. 1." 
      />

      <Figure  
      cardName = "The Quadricycle" 
      founder="Henry Ford" 
      img = "https://upload.wikimedia.org/wikipedia/commons/a/a3/FordQuadricycle.jpg"
      abtfounder="automotive engineer" 
      about = "...Back when it was built It was Progressive Matt Anderson is curator of Transportation. At the Henry Ford. And he takes us back to the beginning to the replica of a workshop shed. Or Ford..." 
      />

      <Figure 
      cardName = "Tata Indica" 
      founder="Jamshedji Tata" 
      img = "https://blogs.gomechanic.com/wp-content/uploads/2020/03/ti5.jpeg"
      abtfounder="Indian industrialist and philanthropist" 
      about = "In 1998, Tata Motors presented India's first indigenously developed passenger car, the Tata Indica, at the Geneva Motor Show. As the authentic 'Indian car', it quickly topped the Indian car market within two years. The achievement highlighted our prowess in innovation, design and localisation."
       />

      <Figure 
      cardName = "Rolls-Royce 10 hp" 
      founder="Charles Stewart Rolls and Sir Henry Royce" 
      img = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Rolls-Royce_1011288360.jpg/1920px-Rolls-Royce_1011288360.jpg"
      abtfounder="automotive engineer"
      about = "The first car built and sold under the Rolls-Royce name was the Rolls-Royce 10 hp, which was unveiled at the Paris Salon in December 1904. The car was reengineered from an existing, well-regarded machine."
       />

<Figure 
      cardName = "Benz Patent-Motorwagen" 
      founder="Carl benz" 
      img = "https://group.mercedes-benz.com/bilder/konzern/tradition/geschichte/anfaenge-des-automobils/benz-patent-motorwagen-w1680xh945-cutout.png"
      abtfounder="automotive engineer" 
      about = "“On January 29, 1886, Carl Benz applied for a patent for his “vehicle powered by a gas engine.” The patent – number 37435 – may be regarded as the birth certificate of the automobile. In July 1886 the newspapers reported on the first public outing of the three-wheeled Benz Patent Motor Car, model no. 1." 
      />

      <Figure  
      cardName = "The Quadricycle" 
      founder="Henry Ford" 
      img = "https://upload.wikimedia.org/wikipedia/commons/a/a3/FordQuadricycle.jpg"
      abtfounder="automotive engineer" 
      about = "...Back when it was built It was Progressive Matt Anderson is curator of Transportation. At the Henry Ford. And he takes us back to the beginning to the replica of a workshop shed. Or Ford..." 
      />

      <Figure 
      cardName = "Tata Indica" 
      founder="Jamshedji Tata" 
      img = "https://blogs.gomechanic.com/wp-content/uploads/2020/03/ti5.jpeg"
      abtfounder="Indian industrialist and philanthropist" 
      about = "In 1998, Tata Motors presented India's first indigenously developed passenger car, the Tata Indica, at the Geneva Motor Show. As the authentic 'Indian car', it quickly topped the Indian car market within two years. The achievement highlighted our prowess in innovation, design and localisation."
       />

      <Figure 
      cardName = "Rolls-Royce 10 hp" 
      founder="Charles Stewart Rolls and Sir Henry Royce" 
      img = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Rolls-Royce_1011288360.jpg/1920px-Rolls-Royce_1011288360.jpg"
      abtfounder="automotive engineer"
      about = "The first car built and sold under the Rolls-Royce name was the Rolls-Royce 10 hp, which was unveiled at the Paris Salon in December 1904. The car was reengineered from an existing, well-regarded machine."
       />

<Figure 
      cardName = "Benz Patent-Motorwagen" 
      founder="Carl benz" 
      img = "https://group.mercedes-benz.com/bilder/konzern/tradition/geschichte/anfaenge-des-automobils/benz-patent-motorwagen-w1680xh945-cutout.png"
      abtfounder="automotive engineer" 
      about = "“On January 29, 1886, Carl Benz applied for a patent for his “vehicle powered by a gas engine.” The patent – number 37435 – may be regarded as the birth certificate of the automobile. In July 1886 the newspapers reported on the first public outing of the three-wheeled Benz Patent Motor Car, model no. 1." 
      />

<Figure  
      cardName = "The Quadricycle" 
      founder="Henry Ford" 
      img = "https://upload.wikimedia.org/wikipedia/commons/a/a3/FordQuadricycle.jpg"
      abtfounder="automotive engineer" 
      about = "...Back when it was built It was Progressive Matt Anderson is curator of Transportation. At the Henry Ford. And he takes us back to the beginning to the replica of a workshop shed. Or Ford..." 
      />

<Figure 
      cardName = "Tata Indica" 
      founder="Jamshedji Tata" 
      img = "https://blogs.gomechanic.com/wp-content/uploads/2020/03/ti5.jpeg"
      abtfounder="Indian industrialist and philanthropist" 
      about = "In 1998, Tata Motors presented India's first indigenously developed passenger car, the Tata Indica, at the Geneva Motor Show. As the authentic 'Indian car', it quickly topped the Indian car market within two years. The achievement highlighted our prowess in innovation, design and localisation."
       />

<Figure 
      cardName = "Rolls-Royce 10 hp" 
      founder="Charles Stewart Rolls and Sir Henry Royce" 
      img = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Rolls-Royce_1011288360.jpg/1920px-Rolls-Royce_1011288360.jpg"
      abtfounder="automotive engineer"
      about = "The first car built and sold under the Rolls-Royce name was the Rolls-Royce 10 hp, which was unveiled at the Paris Salon in December 1904. The car was reengineered from an existing, well-regarded machine."
       />

<Figure 
      cardName = "Rolls-Royce 10 hp" 
      founder="Charles Stewart Rolls and Sir Henry Royce" 
      img = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Rolls-Royce_1011288360.jpg/1920px-Rolls-Royce_1011288360.jpg"
      abtfounder="automotive engineer"
      about = "The first car built and sold under the Rolls-Royce name was the Rolls-Royce 10 hp, which was unveiled at the Paris Salon in December 1904. The car was reengineered from an existing, well-regarded machine."
       />

<Figure 
      cardName = "Rolls-Royce 10 hp" 
      founder="Charles Stewart Rolls and Sir Henry Royce" 
      img = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Rolls-Royce_1011288360.jpg/1920px-Rolls-Royce_1011288360.jpg"
      abtfounder="automotive engineer"
      about = "The first car built and sold under the Rolls-Royce name was the Rolls-Royce 10 hp, which was unveiled at the Paris Salon in December 1904. The car was reengineered from an existing, well-regarded machine."
       />

<Figure 
      cardName = "Rolls-Royce 10 hp" 
      founder="Charles Stewart Rolls and Sir Henry Royce" 
      img = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Rolls-Royce_1011288360.jpg/1920px-Rolls-Royce_1011288360.jpg"
      abtfounder="automotive engineer"
      about = "The first car built and sold under the Rolls-Royce name was the Rolls-Royce 10 hp, which was unveiled at the Paris Salon in December 1904. The car was reengineered from an existing, well-regarded machine."
       />

<Figure 
      cardName = "Rolls-Royce 10 hp" 
      founder="Charles Stewart Rolls and Sir Henry Royce" 
      img = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Rolls-Royce_1011288360.jpg/1920px-Rolls-Royce_1011288360.jpg"
      abtfounder="automotive engineer"
      about = "The first car built and sold under the Rolls-Royce name was the Rolls-Royce 10 hp, which was unveiled at the Paris Salon in December 1904. The car was reengineered from an existing, well-regarded machine."
       />

<Figure 
      cardName = "Rolls-Royce 10 hp" 
      founder="Charles Stewart Rolls and Sir Henry Royce" 
      img = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Rolls-Royce_1011288360.jpg/1920px-Rolls-Royce_1011288360.jpg"
      abtfounder="automotive engineer"
      about = "The first car built and sold under the Rolls-Royce name was the Rolls-Royce 10 hp, which was unveiled at the Paris Salon in December 1904. The car was reengineered from an existing, well-regarded machine."
       />

<Figure 
      cardName = "Rolls-Royce 10 hp" 
      founder="Charles Stewart Rolls and Sir Henry Royce" 
      img = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Rolls-Royce_1011288360.jpg/1920px-Rolls-Royce_1011288360.jpg"
      abtfounder="automotive engineer"
      about = "The first car built and sold under the Rolls-Royce name was the Rolls-Royce 10 hp, which was unveiled at the Paris Salon in December 1904. The car was reengineered from an existing, well-regarded machine."
       />

<Figure 
      cardName = "Benz Patent-Motorwagen" 
      founder="Carl benz" 
      img = "https://group.mercedes-benz.com/bilder/konzern/tradition/geschichte/anfaenge-des-automobils/benz-patent-motorwagen-w1680xh945-cutout.png"
      abtfounder="automotive engineer" 
      about = "“On January 29, 1886, Carl Benz applied for a patent for his “vehicle powered by a gas engine.” The patent – number 37435 – may be regarded as the birth certificate of the automobile. In July 1886 the newspapers reported on the first public outing of the three-wheeled Benz Patent Motor Car, model no. 1." 
      />

      <Figure  
      cardName = "The Quadricycle" 
      founder="Henry Ford" 
      img = "https://upload.wikimedia.org/wikipedia/commons/a/a3/FordQuadricycle.jpg"
      abtfounder="automotive engineer" 
      about = "...Back when it was built It was Progressive Matt Anderson is curator of Transportation. At the Henry Ford. And he takes us back to the beginning to the replica of a workshop shed. Or Ford..." 
      />

      <Figure 
      cardName = "Tata Indica" 
      founder="Jamshedji Tata" 
      img = "https://blogs.gomechanic.com/wp-content/uploads/2020/03/ti5.jpeg"
      abtfounder="Indian industrialist and philanthropist" 
      about = "In 1998, Tata Motors presented India's first indigenously developed passenger car, the Tata Indica, at the Geneva Motor Show. As the authentic 'Indian car', it quickly topped the Indian car market within two years. The achievement highlighted our prowess in innovation, design and localisation."
       />

      <Figure 
      cardName = "Rolls-Royce 10 hp" 
      founder="Charles Stewart Rolls and Sir Henry Royce" 
      img = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Rolls-Royce_1011288360.jpg/1920px-Rolls-Royce_1011288360.jpg"
      abtfounder="automotive engineer"
      about = "The first car built and sold under the Rolls-Royce name was the Rolls-Royce 10 hp, which was unveiled at the Paris Salon in December 1904. The car was reengineered from an existing, well-regarded machine."
       />

<Figure 
      cardName = "Benz Patent-Motorwagen" 
      founder="Carl benz" 
      img = "https://group.mercedes-benz.com/bilder/konzern/tradition/geschichte/anfaenge-des-automobils/benz-patent-motorwagen-w1680xh945-cutout.png"
      abtfounder="automotive engineer" 
      about = "“On January 29, 1886, Carl Benz applied for a patent for his “vehicle powered by a gas engine.” The patent – number 37435 – may be regarded as the birth certificate of the automobile. In July 1886 the newspapers reported on the first public outing of the three-wheeled Benz Patent Motor Car, model no. 1." 
      />

      <Figure  
      cardName = "The Quadricycle" 
      founder="Henry Ford" 
      img = "https://upload.wikimedia.org/wikipedia/commons/a/a3/FordQuadricycle.jpg"
      abtfounder="automotive engineer" 
      about = "...Back when it was built It was Progressive Matt Anderson is curator of Transportation. At the Henry Ford. And he takes us back to the beginning to the replica of a workshop shed. Or Ford..." 
      />

      <Figure 
      cardName = "Tata Indica" 
      founder="Jamshedji Tata" 
      img = "https://blogs.gomechanic.com/wp-content/uploads/2020/03/ti5.jpeg"
      abtfounder="Indian industrialist and philanthropist" 
      about = "In 1998, Tata Motors presented India's first indigenously developed passenger car, the Tata Indica, at the Geneva Motor Show. As the authentic 'Indian car', it quickly topped the Indian car market within two years. The achievement highlighted our prowess in innovation, design and localisation."
       />

      <Figure 
      cardName = "Rolls-Royce 10 hp" 
      founder="Charles Stewart Rolls and Sir Henry Royce" 
      img = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Rolls-Royce_1011288360.jpg/1920px-Rolls-Royce_1011288360.jpg"
      abtfounder="automotive engineer"
      about = "The first car built and sold under the Rolls-Royce name was the Rolls-Royce 10 hp, which was unveiled at the Paris Salon in December 1904. The car was reengineered from an existing, well-regarded machine."
       />

<Figure 
      cardName = "Benz Patent-Motorwagen" 
      founder="Carl benz" 
      img = "https://group.mercedes-benz.com/bilder/konzern/tradition/geschichte/anfaenge-des-automobils/benz-patent-motorwagen-w1680xh945-cutout.png"
      abtfounder="automotive engineer" 
      about = "“On January 29, 1886, Carl Benz applied for a patent for his “vehicle powered by a gas engine.” The patent – number 37435 – may be regarded as the birth certificate of the automobile. In July 1886 the newspapers reported on the first public outing of the three-wheeled Benz Patent Motor Car, model no. 1." 
      />

      <Figure  
      cardName = "The Quadricycle" 
      founder="Henry Ford" 
      img = "https://upload.wikimedia.org/wikipedia/commons/a/a3/FordQuadricycle.jpg"
      abtfounder="automotive engineer" 
      about = "...Back when it was built It was Progressive Matt Anderson is curator of Transportation. At the Henry Ford. And he takes us back to the beginning to the replica of a workshop shed. Or Ford..." 
      />

      <Figure 
      cardName = "Tata Indica" 
      founder="Jamshedji Tata" 
      img = "https://blogs.gomechanic.com/wp-content/uploads/2020/03/ti5.jpeg"
      abtfounder="Indian industrialist and philanthropist" 
      about = "In 1998, Tata Motors presented India's first indigenously developed passenger car, the Tata Indica, at the Geneva Motor Show. As the authentic 'Indian car', it quickly topped the Indian car market within two years. The achievement highlighted our prowess in innovation, design and localisation."
       />

      <Figure 
      cardName = "Rolls-Royce 10 hp" 
      founder="Charles Stewart Rolls and Sir Henry Royce" 
      img = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Rolls-Royce_1011288360.jpg/1920px-Rolls-Royce_1011288360.jpg"
      abtfounder="automotive engineer"
      about = "The first car built and sold under the Rolls-Royce name was the Rolls-Royce 10 hp, which was unveiled at the Paris Salon in December 1904. The car was reengineered from an existing, well-regarded machine."
       />

<Figure 
      cardName = "Benz Patent-Motorwagen" 
      founder="Carl benz" 
      img = "https://group.mercedes-benz.com/bilder/konzern/tradition/geschichte/anfaenge-des-automobils/benz-patent-motorwagen-w1680xh945-cutout.png"
      abtfounder="automotive engineer" 
      about = "“On January 29, 1886, Carl Benz applied for a patent for his “vehicle powered by a gas engine.” The patent – number 37435 – may be regarded as the birth certificate of the automobile. In July 1886 the newspapers reported on the first public outing of the three-wheeled Benz Patent Motor Car, model no. 1." 
      />

<Figure  
      cardName = "The Quadricycle" 
      founder="Henry Ford" 
      img = "https://upload.wikimedia.org/wikipedia/commons/a/a3/FordQuadricycle.jpg"
      abtfounder="automotive engineer" 
      about = "...Back when it was built It was Progressive Matt Anderson is curator of Transportation. At the Henry Ford. And he takes us back to the beginning to the replica of a workshop shed. Or Ford..." 
      />

<Figure 
      cardName = "Tata Indica" 
      founder="Jamshedji Tata" 
      img = "https://blogs.gomechanic.com/wp-content/uploads/2020/03/ti5.jpeg"
      abtfounder="Indian industrialist and philanthropist" 
      about = "In 1998, Tata Motors presented India's first indigenously developed passenger car, the Tata Indica, at the Geneva Motor Show. As the authentic 'Indian car', it quickly topped the Indian car market within two years. The achievement highlighted our prowess in innovation, design and localisation."
       />

<Figure 
      cardName = "Rolls-Royce 10 hp" 
      founder="Charles Stewart Rolls and Sir Henry Royce" 
      img = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Rolls-Royce_1011288360.jpg/1920px-Rolls-Royce_1011288360.jpg"
      abtfounder="automotive engineer"
      about = "The first car built and sold under the Rolls-Royce name was the Rolls-Royce 10 hp, which was unveiled at the Paris Salon in December 1904. The car was reengineered from an existing, well-regarded machine."
       />

<Figure 
      cardName = "Rolls-Royce 10 hp" 
      founder="Charles Stewart Rolls and Sir Henry Royce" 
      img = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Rolls-Royce_1011288360.jpg/1920px-Rolls-Royce_1011288360.jpg"
      abtfounder="automotive engineer"
      about = "The first car built and sold under the Rolls-Royce name was the Rolls-Royce 10 hp, which was unveiled at the Paris Salon in December 1904. The car was reengineered from an existing, well-regarded machine."
       />

<Figure 
      cardName = "Rolls-Royce 10 hp" 
      founder="Charles Stewart Rolls and Sir Henry Royce" 
      img = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Rolls-Royce_1011288360.jpg/1920px-Rolls-Royce_1011288360.jpg"
      abtfounder="automotive engineer"
      about = "The first car built and sold under the Rolls-Royce name was the Rolls-Royce 10 hp, which was unveiled at the Paris Salon in December 1904. The car was reengineered from an existing, well-regarded machine."
       />

<Figure 
      cardName = "Rolls-Royce 10 hp" 
      founder="Charles Stewart Rolls and Sir Henry Royce" 
      img = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Rolls-Royce_1011288360.jpg/1920px-Rolls-Royce_1011288360.jpg"
      abtfounder="automotive engineer"
      about = "The first car built and sold under the Rolls-Royce name was the Rolls-Royce 10 hp, which was unveiled at the Paris Salon in December 1904. The car was reengineered from an existing, well-regarded machine."
       />

<Figure 
      cardName = "Rolls-Royce 10 hp" 
      founder="Charles Stewart Rolls and Sir Henry Royce" 
      img = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Rolls-Royce_1011288360.jpg/1920px-Rolls-Royce_1011288360.jpg"
      abtfounder="automotive engineer"
      about = "The first car built and sold under the Rolls-Royce name was the Rolls-Royce 10 hp, which was unveiled at the Paris Salon in December 1904. The car was reengineered from an existing, well-regarded machine."
       />

<Figure 
      cardName = "Rolls-Royce 10 hp" 
      founder="Charles Stewart Rolls and Sir Henry Royce" 
      img = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Rolls-Royce_1011288360.jpg/1920px-Rolls-Royce_1011288360.jpg"
      abtfounder="automotive engineer"
      about = "The first car built and sold under the Rolls-Royce name was the Rolls-Royce 10 hp, which was unveiled at the Paris Salon in December 1904. The car was reengineered from an existing, well-regarded machine."
       />

<Figure 
      cardName = "Rolls-Royce 10 hp" 
      founder="Charles Stewart Rolls and Sir Henry Royce" 
      img = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Rolls-Royce_1011288360.jpg/1920px-Rolls-Royce_1011288360.jpg"
      abtfounder="automotive engineer"
      about = "The first car built and sold under the Rolls-Royce name was the Rolls-Royce 10 hp, which was unveiled at the Paris Salon in December 1904. The car was reengineered from an existing, well-regarded machine."
       />

<Figure 
      cardName = "Benz Patent-Motorwagen" 
      founder="Carl benz" 
      img = "https://group.mercedes-benz.com/bilder/konzern/tradition/geschichte/anfaenge-des-automobils/benz-patent-motorwagen-w1680xh945-cutout.png"
      abtfounder="automotive engineer" 
      about = "“On January 29, 1886, Carl Benz applied for a patent for his “vehicle powered by a gas engine.” The patent – number 37435 – may be regarded as the birth certificate of the automobile. In July 1886 the newspapers reported on the first public outing of the three-wheeled Benz Patent Motor Car, model no. 1." 
      />

      <Figure  
      cardName = "The Quadricycle" 
      founder="Henry Ford" 
      img = "https://upload.wikimedia.org/wikipedia/commons/a/a3/FordQuadricycle.jpg"
      abtfounder="automotive engineer" 
      about = "...Back when it was built It was Progressive Matt Anderson is curator of Transportation. At the Henry Ford. And he takes us back to the beginning to the replica of a workshop shed. Or Ford..." 
      />

      <Figure 
      cardName = "Tata Indica" 
      founder="Jamshedji Tata" 
      img = "https://blogs.gomechanic.com/wp-content/uploads/2020/03/ti5.jpeg"
      abtfounder="Indian industrialist and philanthropist" 
      about = "In 1998, Tata Motors presented India's first indigenously developed passenger car, the Tata Indica, at the Geneva Motor Show. As the authentic 'Indian car', it quickly topped the Indian car market within two years. The achievement highlighted our prowess in innovation, design and localisation."
       />

      <Figure 
      cardName = "Rolls-Royce 10 hp" 
      founder="Charles Stewart Rolls and Sir Henry Royce" 
      img = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Rolls-Royce_1011288360.jpg/1920px-Rolls-Royce_1011288360.jpg"
      abtfounder="automotive engineer"
      about = "The first car built and sold under the Rolls-Royce name was the Rolls-Royce 10 hp, which was unveiled at the Paris Salon in December 1904. The car was reengineered from an existing, well-regarded machine."
       />

<Figure 
      cardName = "Benz Patent-Motorwagen" 
      founder="Carl benz" 
      img = "https://group.mercedes-benz.com/bilder/konzern/tradition/geschichte/anfaenge-des-automobils/benz-patent-motorwagen-w1680xh945-cutout.png"
      abtfounder="automotive engineer" 
      about = "“On January 29, 1886, Carl Benz applied for a patent for his “vehicle powered by a gas engine.” The patent – number 37435 – may be regarded as the birth certificate of the automobile. In July 1886 the newspapers reported on the first public outing of the three-wheeled Benz Patent Motor Car, model no. 1." 
      />

      <Figure  
      cardName = "The Quadricycle" 
      founder="Henry Ford" 
      img = "https://upload.wikimedia.org/wikipedia/commons/a/a3/FordQuadricycle.jpg"
      abtfounder="automotive engineer" 
      about = "...Back when it was built It was Progressive Matt Anderson is curator of Transportation. At the Henry Ford. And he takes us back to the beginning to the replica of a workshop shed. Or Ford..." 
      />

      <Figure 
      cardName = "Tata Indica" 
      founder="Jamshedji Tata" 
      img = "https://blogs.gomechanic.com/wp-content/uploads/2020/03/ti5.jpeg"
      abtfounder="Indian industrialist and philanthropist" 
      about = "In 1998, Tata Motors presented India's first indigenously developed passenger car, the Tata Indica, at the Geneva Motor Show. As the authentic 'Indian car', it quickly topped the Indian car market within two years. The achievement highlighted our prowess in innovation, design and localisation."
       />

      <Figure 
      cardName = "Rolls-Royce 10 hp" 
      founder="Charles Stewart Rolls and Sir Henry Royce" 
      img = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Rolls-Royce_1011288360.jpg/1920px-Rolls-Royce_1011288360.jpg"
      abtfounder="automotive engineer"
      about = "The first car built and sold under the Rolls-Royce name was the Rolls-Royce 10 hp, which was unveiled at the Paris Salon in December 1904. The car was reengineered from an existing, well-regarded machine."
       />
  </div>

    </>
  )
}

export default App
