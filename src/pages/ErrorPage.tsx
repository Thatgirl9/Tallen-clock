import { Link, useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error = useRouteError() as any;
  console.error(error);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div
      id="error-page"
      className="flex justify-center items-center flex-col gap-[1em] mt-[2em]"
    >
      <h1 className="text-3xl font-semibold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>

      <Link to="" className="underline text-blue-500" onClick={goBack}>
        Go back
      </Link>
    </div>
  );
}
