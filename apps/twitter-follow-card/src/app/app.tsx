import './app.css'
import TwitterFollowCard from './TwitterFollowCard'

const users = [
  {
    name: 'Neftali Ramos',
    userName: 'NeftaliRj',
    isFollowing: true,
  },
  {
    name: 'Miguel Angel Duran',
    userName: 'midudev',
    isFollowing: false,
  },
  {
    name: 'Cristina Ramos',
    userName: 'cristinaramos',
    isFollowing: true,
  }
]
export function App() {
  return (
    <section className="App">
      {
        users.map((user) => (
          <TwitterFollowCard
            key={user.userName}
            isFollowing={user.isFollowing}
            name={user.name}
            userName={user.userName}
          />
        ))
      }
    </section>
  );
}

export default App;
