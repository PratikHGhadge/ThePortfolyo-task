import appData from "@data/app.json";

const leftPanelModule = ({ social_handles }) => {
  return (
    <>
      {/* left bar */}
      <div className="mil-left-panel">
        <div className="mil-page-name mil-upper mil-dark">Homepage</div>

        <ul className="mil-social-icons">
          {social_handles?.map((item, key) => (
            <li key={`lp-social-item-${key}`}>
              <a href={item.image.url} target="_blank" className="social-icon">
                <i className={item.icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* left bar end */}
    </>
  );
};
export default leftPanelModule;
