import Section from './Section';
import ListEntry from './ListEntry';

function Education({
    editable, 
    education, 
    onEducationChange, 
    onAddEducation,
    onRemoveEducation,
    onTaskAdd,
    onTaskRemove,
    onTaskChange
}) {

    const handleInputChange = (e, id) => {
        onEducationChange(e, id, 'education');
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

    const preview = education && (
        education.map(el => 
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

    const editView = education && (
        education.map((el, index) => (
        <form onSubmit={handleSubmit} data-id={index}> 
            <div className="row">
                <label htmlFor={`Eposition${index}`}>Subject: </label>
                <input onChange={e => handleInputChange(e, index)} placeholder="Computer Science" type="text" onChange={e => handleInputChange(e, index)} value={el.position} name="position" id={`Eposition${index}`}/>
            </div>
            <div className="row">
                <label htmlFor={`Euniversity-name${index}`}>University name: </label><input placeholder="Harvard University" onChange={e => handleInputChange(e, index)} type="text"  value={el.name}  name="name" id={`Euniversity-name${index}`}/>
            </div>
            <div className="row">
                <label htmlFor={`Elocation${index}`}>Location: </label><input placeholder="Cambridge"  onChange={e => handleInputChange(e, index)} value={el.location} type="text" name="location" id={`Elocation${index}`}/>
            </div>
            <div className="row">
                <label htmlFor={`from${index}`}>From: </label> <input placeholder="03/2013" onChange={e => handleInputChange(e, index)} value={el.from} type="datetime-local" name="from" id={`Efrom${index}`}/>
            </div>
            <div className="row">
                <label htmlFor={`Eto${index}`}>To: </label> <input placeholder="06/2016" value={el.to} onChange={e => handleInputChange(e, index)} type="datetime-local" name="to" id={`Eto${index}`}/>
            </div>
            <div className="group">
                {el.tasks.map((task, id) => {
                    return (
                        <div className="item">
                            <label>{`Task #${id+1}`}</label>
                            <textarea onChange={e => onTaskChange(e, index, id, 'education')} value={task}/>
                        </div>
                    );
                })}
                {editable && <div className="btn-wrapper right">
                <button onClick={(e) => onTaskAdd(e, index, 'education')} className="btn small-padding medium-font">+</button>
                {education.length !== 0 ? <button onClick={(e) => onTaskRemove(e, index, 'education')} className="btn warning small-padding medium-font">-</button> : ''}
            </div>}
            </div>
        </form>
        ))
    );


    return (
        <Section name="Education" icon="fas fa-graduation-cap">
            {editable ? editView : preview}

            {editable && <div className="btn-wrapper right">
                <button onClick={(e) => onAddEducation(e, 'education')} className="btn">Add entry</button>
                {education.length !== 0 ? <button onClick={e => onRemoveEducation(e, 'education')} className="btn warning">Remove entry</button> : ''}
            </div>}
        </Section>
    );
}

export default Education;