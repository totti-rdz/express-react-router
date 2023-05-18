import "../App.css";
import { Link } from "react-router-dom";

function Other() {
  return (
    <>
      <div>Hello again</div>
      <div>
        <Link to={`/`}>Home</Link>
      </div>
    </>
  );
}

export default Other;
