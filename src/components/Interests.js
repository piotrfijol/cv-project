import Section from './Section';
import ListEntry from './ListEntry';

function Interests({
    editable,
    onListAdd,
    onListRemove,
    onListChange,
    interests
}) {

    const preview = interests && (
        <ListEntry>
            {interests.map(el => <li>{el}</li>)}
        </ListEntry>);

    const editView = 
    (
    <div className="group">
        {interests.map((interest, id) => {
            return (
                <div className="item">
                    <label>{`Interest #${id+1}`}</label>
                    <textarea onChange={e => onListChange(e, id, 'interests')} value={interest}/>
                </div>
            );
        })}
        {editable && <div className="btn-wrapper right">
        <button 
            onClick={(e) => onListAdd(e, 'interests')} 
            className="btn small-padding medium-font">+</button>
        {interests.length !== 0 
            ? <button 
                onClick={(e) => onListRemove(e, 'interests')} 
                className="btn warning small-padding medium-font">-</button> 
            : ''}
        </div>}
    </div>
    ); 

    return (
        <Section name="Interests" icon="fas fa-star">
            {editable ? editView : preview}
        </Section>
    );
}

export default Interests;