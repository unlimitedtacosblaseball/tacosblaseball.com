export default function Channel({ children }) {
  return (
    <>
      <span className="channel">
        { children }
      </span>
      <style jsx>{`
          .channel {
            font-family: "Open Sans", "Helvetica Neue", sans-serif;
            font-weight: 600;
            padding: 1px 2px;
            background-color: #3e42d180;
            border-radius: 4px;
          }
          .channel::before {
            content: "#";
            font-weight: 800;
            padding: 0 2px;
          }
          .channel:hover {
            background-color: #3e42d1;
          }

          @media screen and (min-width: 1000px) {
            .channel {
              padding: 2px 4px;
            }
          }
        `}
      </style>
    </>
  );
}