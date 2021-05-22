import Section from './Section';
import ListEntry from './ListEntry';

function Achievements({
    editable,
    onListAdd,
    onListRemove,
    onListChange,
    achievements
}) {

    const preview = achievements && (
        <ListEntry>
            {achievements.map(el => <li>{el}</li>)}
        </ListEntry>);

    const editView = 
    (
    <div className="group">
        {achievements.map((achievement, id) => {
            return (
                <div className="item">
                    <label>{`Achievement #${id+1}`}</label>
                    <textarea onChange={e => onListChange(e, id, 'achievements')} value={achievement}/>
                </div>
            );
        })}
        {editable && <div className="btn-wrapper right">
        <button 
            onClick={(e) => onListAdd(e, 'achievements')} 
            className="btn small-padding medium-font">+</button>
        {achievements.length !== 0 
            ? <button 
                onClick={(e) => onListRemove(e, 'achievements')} 
                className="btn warning small-padding medium-font">-</button> 
            : ''}
        </div>}
    </div>
    ); 
    
    return (
    <Section name="Achievements" icon="fas fa-trophy">
        {editable ? editView : preview}
    </Section>
    );
}

export default Achievements;