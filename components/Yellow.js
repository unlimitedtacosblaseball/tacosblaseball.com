export default function Yellow({ children }) {
  return (
    <>
      <span className="yellow">
        { children }
      </span>
      <style jsx>{`
          .yellow {
            color: rgb(255, 224, 130);
          }          
        `}
      </style>
    </>
  );
}