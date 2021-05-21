import Section from './Section';
import ListEntry from './ListEntry';

function Education() {
    return (
        <Section name="Education" icon="fas fa-graduation-cap">
            <ListEntry data={{
                from: '09/2008',
                to: '06/2013',
                location: 'Cambridge, MA',
                position: 'Computer Science',
                name: 'Harvard University'
                }}>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam erat, eleifend 
                    id eros sed, varius luctus erat. Curabitur pharetra mi mauris. 
                    </li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam erat, eleifend id 
                    eros sed, varius luctus erat. Curabitur pharetra mi mauris. 
                    </li>
            </ListEntry>
        </Section>
    );
}

export default Education;