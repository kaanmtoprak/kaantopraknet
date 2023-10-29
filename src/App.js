import { AboutMe, Contact, Educations, Experiences, Knowledges, Section, Skills } from "./components";
import './components/Home/home.scss';

function App() {
  return (
    <div className='home'>
        <Section title="About Me">
            <AboutMe/>
        </Section>
        <Section title="Experiences">
            <Experiences/>
        </Section>
        <Section title="Educations">
            <Educations/>
        </Section>
        <Section title="Skills">
            <Skills/>
        </Section>
        <Section title="Knowledges">
            <Knowledges/>
        </Section>
        <Section title="Contact">
            <Contact/>
        </Section>
    </div>
  );
}

export default App;
