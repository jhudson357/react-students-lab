import Score from "../Score/Score";

const Student = (props) => {
  return (  
    <div>
      <h1>{props.student.name}</h1>
      <h2>{props.student.bio}</h2>
      {props.student.scores.map(score => 
        <Score key={score.date} score={score} />  
      )}
    </div>
  );
}

export default Student;