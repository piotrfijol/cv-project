

function Section({icon, name, children}) {

    return (
        <div className="section">
          <div className="section-header">
            <i className={icon}></i>
            <h2>{name}</h2>
          </div>
          <div className="content">
            {children}
          </div>
        </div>
    );
}

export default Section;