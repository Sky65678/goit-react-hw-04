export default function ErrorMessage({ error }) {
  return (
    <>
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
    </>
  );
}
