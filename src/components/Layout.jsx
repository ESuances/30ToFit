export default function Layout(props) {
  const { children } = props;
  const header = (
    <header>
      <h1 className="text-gradient">30ToFit</h1>
      <p>
        <strong>
          The 30 day Workout from home program for beginers by ESuances
        </strong>
      </p>
    </header>
  );
  const footer = (
    <footer>
      <p>
        Built by{" "}
        <a target="_blank" href="https://github.com/ESuances">
          ESuances
        </a>
        <br />
        <p>
          Styled with -{" "}
          <a href="https://fantacss.smoljames.com" target="_blank">
            FantaCSS
          </a>{" "}
          and some styles of my own :D
        </p>
      </p>
    </footer>
  );

  return (
    <>
      {header}
      {children}
      {footer}
    </>
  );
}
