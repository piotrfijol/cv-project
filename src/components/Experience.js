import Section from './Section';
import ListEntry from './ListEntry';

function Experience({editable, experience, onExperienceChange}) {
    
    const formatDate = date => {
        if(date ==='present') return date;
        if(/^(\d+)-(\d+)/.test(date)) {
            let m = date.match(/^(\d+)-(\d+)/);
            let year = m[1], month=m[2];

            return `${month}/${year}`;

        } else {
            return '';
        }
    }

    const preview = experience && (
        experience.map(el => 
            <ListEntry data={{
                from: formatDate(el.from),
                to: formatDate(el.to),
                location: el.location,
                position: el.position,
                name: el.name
            }}>
                {el.tasks.map(task => <li>{task}</li>)}
            </ListEntry>
        ));

    const handleChange = e => {
        console.log(e.target.parentNode.parentNode);
    }

    const editView = experience && (
        experience.map((el, index) => (
        <form data-id={index} style={{marginBottom: '2em'}}> 
            <div className="row">
                <label htmlFor="position">Position: </label>
                <input onChange={handleChange} placeholder="Software Developer" type="text" onChange={onExperienceChange} value={el.position} id="position"/>
            </div>
            <div className="row">
                <label htmlFor="company-name">Company name: </label><input placeholder="DevUX" onChange={onExperienceChange} type="text"  value={el.name}  id="name"/>
            </div>
            <div className="row">
                <label htmlFor="location">Location: </label><input placeholder="New York"  onChange={onExperienceChange} value={el.location} type="text" id="location"/>
            </div>
            <div className="row">
                <label htmlFor="from">From: </label> <input placeholder="03/2013" onChange={onExperienceChange} value={el.from} type="datetime-local" id="from"/>
            </div>
            <div className="row">
                <label htmlFor="to">To: </label> <input placeholder="06/2016" value={el.to} onChange={onExperienceChange} type="datetime-local" id="to"/>
            </div>
        </form>
        ))
    );

    return (
        <Section name="Experience" icon="fas fa-calendar-alt">
            {editable ? editView : preview}

            {editable && <button className="btn right">Add entry</button>}
        </Section>
    );
}

export default Experience;