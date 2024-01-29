import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge />
        <TimerChallenge targetTime={5}/>
      </div>
    </>
  );
}

export default App;
