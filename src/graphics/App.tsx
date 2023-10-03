import { useReplicant } from '../hooks/useReplicant';

function App() {
  const [round] = useReplicant('bestOfInfo');

  return (
    <>
      <div>{round}</div>
    </>
  );
}

export default App;
