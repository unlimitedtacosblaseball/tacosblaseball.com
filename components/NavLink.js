export default function NavLink({ children }) {
  return (
    <>
      <span className="nav_link">
        {children}
      </span>
      <style jsx>{`
          display: block;
          margin: 0px auto;
          font-style: italic;
          text-decoration: underline;
        `}
      </style>
    </>
  );
}