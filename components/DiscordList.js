export default function DiscordList({ title, contents }) {
  return (
    <>
      <div className="discord-list">
        {title != null && 
          <h4>{title}</h4>
        }
        <ul>
          {contents.map((contents) => (
            <li>{ contents }</li>
          ))}
        </ul>
      </div>
      <style jsx>{`
      /* emulating the actual discord channel sidebar styles by evie */
      .discord-list {
        background-color: #23252a;
        width: calc(2.5rem * 6.3);
        font-family: "Open Sans", "Helvetica Neue", sans-serif;
        font-weight: 600;
        color: #7c8085;
        border-radius: 4px;
        padding: 4px;
        margin: 16px;
        text-align: left;
      }

      .discord-list h4 {
        font-size: 1rem;
        padding: 4px;
        margin-bottom: 4px;
        text-transform: uppercase;
        letter-spacing: -1px;
      }
      .discord-list h4:hover {
        color: #d4d6d7;
      }
      
      .discord-list ul li {
        padding: 4px;
        border-radius: 4px;
        list-style: none;
      }
      .discord-list ul li:hover {
        background-color: #27292f;
        color: #d4d6d7;
      }
      .discord-list ul li::before {
        content: "#";
        font-weight: 800;
        padding: 4px 8px 4px 4px;
      }
      
      `}</style>
    </>
  );
}