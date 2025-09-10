import { useNavigate, useRouteError } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="mx-auto mt-4 w-9/12 rounded-sm bg-stone-300 px-6 py-4">
      <button className="mb-6" onClick={() => navigate(-1)}>
        &larr; go back
      </button>

      <h1>Something went wrong 😥</h1>
      <p>{error.data || error.message}</p>
    </div>
  );
}

export default Error;
