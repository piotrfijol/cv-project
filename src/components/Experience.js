import Section from './Section';
import ListEntry from './ListEntry';

function Experience(
    {
        editable, 
        experience, 
        onExperienceChange, 
        onAddExperience,
        onRemoveExperience,
        onTaskAdd,
        onTaskRemove,
        onTaskChange
    }) {

    const handleInputChange = (e, id) => {
        onExperienceChange(e, id, 'experience');
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }

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

    const handleTaskChange = e => {
        console.log(e);
    }

    const editView = experience && (
        experience.map((el, index) => (
        <form onSubmit={handleSubmit} data-id={index}> 
            <div className="row">
                <label htmlFor="position">Position: </label>
                <input onChange={e => handleInputChange(e, index)} placeholder="Software Developer" type="text" onChange={e => handleInputChange(e, index)} value={el.position} id="position"/>
            </div>
            <div className="row">
                <label htmlFor="company-name">Company name: </label><input placeholder="DevUX" onChange={e => handleInputChange(e, index)} type="text"  value={el.name}  id="name"/>
            </div>
            <div className="row">
                <label htmlFor="location">Location: </label><input placeholder="New York"  onChange={e => handleInputChange(e, index)} value={el.location} type="text" id="location"/>
            </div>
            <div className="row">
                <label htmlFor="from">From: </label> <input placeholder="03/2013" onChange={e => handleInputChange(e, index)} value={el.from} type="datetime-local" id="from"/>
            </div>
            <div className="row">
                <label htmlFor="to">To: </label> <input placeholder="06/2016" value={el.to} onChange={e => handleInputChange(e, index)} type="datetime-local" id="to"/>
            </div>
            <div className="group">
                {el.tasks.map((task, id) => {
                    return (
                        <div className="item">
                            <label>{`Task #${id+1}`}</label>
                            <textarea onChange={e => onTaskChange(e, index, id, 'experience')} value={task}/>
                        </div>
                    );
                })}
                {editable && <div className="btn-wrapper right">
                <button onClick={(e) => onTaskAdd(e, index, 'experience')} className="btn small-padding medium-font">+</button>
                {experience.length !== 0 ? <button onClick={(e) => onTaskRemove(e, index, 'experience')} className="btn warning small-padding medium-font">-</button> : ''}
            </div>}
            </div>
        </form>
        ))
    );

    return (
        <Section name="Experience" icon="fas fa-calendar-alt">
            {editable ? editView : preview}

            {editable && <div className="btn-wrapper right">
                <button onClick={(e) => onAddExperience(e, 'experience')} className="btn">Add entry</button>
                {experience.length !== 0 ? <button onClick={e => onRemoveExperience(e, 'experience')} className="btn warning">Remove entry</button> : ''}
            </div>}
        </Section>
    );
}

export default Experience;