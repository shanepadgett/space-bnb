export default {
  atlas: {
    name: 'Atlas V',
    img: '../../static/images/atlas-rocket.png',
    model: '91d20e0deeb74a56b7f8b3b3b0a38044',
    price: '73248',
    rating: ['fas', 'fas', 'fas', 'fas', 'far'],
    quickFacts: {
      height: '58.3m',
      width: '3.81m',
      mass: '334,500kg',
      payload_To_LEO: '20,520kg'
    },
    description: 'The Atlas V was developed by Lockheed Martin Commercial Launch Services as part of the US Air Force Evolved Expendable Launch Vehicle (EELV) program and made its inaugural flight on August 21, 2002. The vehicle operates out of Space Launch Complex 41 at Cape Canaveral Air Force Station and Space Launch Complex 3-E at Vandenberg Air Force Base.'
  },
  falconHeavy: {
    name: 'Falcon Heavy',
    img: '../../static/images/falcon-heavy-render.png',
    model: '9ecae8b924524e5ba695abee299992d8',
    price: '99345',
    rating: ['fas', 'fas', 'fas', 'fas', 'fas'],
    quickFacts: {
      height: '70m',
      width: '12.2m',
      mass: '1,420,788kg',
      payload_To_LEO: '63,800kg'
    },
    description: 'Falcon Heavy is the most powerful operational rocket in the world by a factor of two. With the ability to lift into orbit nearly 64 metric tons (141,000 lb)---a mass greater than a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.'
  },
  titan: {
    name: 'Titan IV',
    img: '../../static/images/titan-rocket.png',
    model: '2c8cb51012e54453afa9d03a9630678c',
    price: '32490',
    rating: ['fas', 'fas', 'far', 'far', 'far'],
    quickFacts: {
      height: '62m',
      width: '3.05m',
      mass: '943,050kg',
      payload_To_LEO: '21,680kg'
    },
    description: `This rocket was used almost exclusively to launch American military or civilian intelligence agency payloads. However, it was also used for a purely scientific purpose to launch the NASA–ESA Cassini / Huygens space probe to Saturn in 1997. The primary intelligence agency that needed the Titan IV's launch capabilities was the National Reconnaissance Office (NRO).`
  },
  delta: {
    name: 'Delta II',
    img: '../../static/images/delta-rocket.png',
    model: 'fb4aa0410aa8426bbd0e221c2d3d5ccc',
    price: '42380',
    rating: ['fas', 'fas', 'fas', 'far', 'far'],
    quickFacts: {
      height: '38.2m',
      width: '2.44m',
      mass: '231,870kg',
      payload_To_LEO: '6,100kg'
    },
    description: 'Delta II is an expendable launch system, originally designed and built by McDonnell Douglas. Delta II is part of the Delta rocket family and entered service in 1989. In 2018, the rocket is scheduled to fly its final mission, ICESat-2, which will earn the launch vehicle a streak of 100 successful missions in a row if successful.'
  }
}
