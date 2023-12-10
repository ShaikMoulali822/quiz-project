
function JoinScreen({start}) {
  return (
    <div className="join-screen">
        <h2>Join Quiz</h2>
        <p>
          <strong>The quiz consists of important questions</strong>
        </p>
        <button onClick={start}>Start</button>
    </div>
  )
}
export default JoinScreen;
