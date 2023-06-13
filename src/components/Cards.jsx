import Card from "./Card";

export default function Cards({ characters, onClose }) {
   console.log(characters)
  return (
    <div style={{display:"flex", justifyContent:"space-evenly", width:"100%", flexWrap:"wrap"}}>
      {characters.map((character) => {
        return (
          <div key={character.id}>
            <Card
              id={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              origin={character.origin.name}
              gender={character.gender}
              image={character.image}
              onClose={onClose}
            />
          </div>
        );
      })}
    </div>
  );
}
