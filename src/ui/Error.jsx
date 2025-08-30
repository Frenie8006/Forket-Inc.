import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Page Not Found</h1>
      <button onClick={() => navigate(-1)}>&larr; go back</button>
    </div>
  );
}

export default Error;
