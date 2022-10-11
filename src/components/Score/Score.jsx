const Score = (props) => {
  return (  
    <div>
      <h3>Date: {props.score.date}</h3>
      <h3>Score: {props.score.score}</h3>
      --------------------------
    </div>
  );
}

export default Score;