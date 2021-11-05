import Yellow from "@/components/Yellow";

export default function Subheader({ children }) {
  return (
    <>
      <div role="doc-subtitle">
        <Yellow>
          { children }
        </Yellow>
      </div>
      <style jsx>{`
          /* Subheader styles */
        [role="doc-subtitle"] {
          font-family: "Open Sans", "Helvetica Neue", sans-serif;
          font-weight: 600;
          font-size: 1.5rem;
          margin-top: -1rem;
          margin-bottom: 18px;
          text-align: center;
        }       
      `}
      </style>
    </>
  );
}