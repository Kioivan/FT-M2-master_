import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   let i=0;
   return (
   <div>
      {characters.map(e => 
      <Card 
      name={e.name} 
      species={e.species}
      gender={e.gender} 
      image={e.image} 
      onclose={() => alert('Emulamos que se cierra la card')}
      key={i++}
      />
      )}
   </div> 
   )
}
