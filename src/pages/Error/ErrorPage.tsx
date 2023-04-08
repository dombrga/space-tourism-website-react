import { useRouteError } from "react-router-dom";
import style from "./ErrorPage.module.scss";

function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div id={style['error-page']}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage