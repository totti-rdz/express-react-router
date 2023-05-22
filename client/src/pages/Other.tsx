import "../App.css";
import { Link, useParams } from "react-router-dom";

function Other() {
  const param = useParams();
  return (
    <>
      <div>Hello again</div>
      <div>
        <Link to={`/`}>Home</Link>
      </div>
      {param && param.test && <div>Test: {param.test}</div>}
    </>
  );
}

export default Other;
