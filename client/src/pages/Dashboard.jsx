//import { useQuery } from '@apollo/client';

//import { QUERY_USER } from '../utils/queries'; // Add the missing import statement

const Dashboard = () => {

  //const { loading, data } = useQuery(QUERY_USER);
  //const user = data?.me || {};
  const user = {};

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <> {/* Wrap the JSX code inside a fragment element */}
      <header>
        <nav id="nav">
        <button className="button ribbon-outset border" id="logout">Exit the Dungeon</button> {/* Use className instead of class */}
        </nav>
      </header>
      <div>
        <h1>{user.username}'s Dashboard</h1>
        <div>
          <h2>Your Characters</h2>
          <ul>
            {user.characters?.map((character) => (
              <li key={character._id}>
                <h3>{character.name}</h3>
                <p>Class: {character.class}</p>
                <p>Level: {character.level}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Create a New Character</h2>
          <form>
            <button>Create Character</button> {/* link to form to create a new character */}
          </form>
        </div>
      </div>
    </>
  );
};
     


export default Dashboard;
