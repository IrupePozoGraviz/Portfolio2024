import Contact from '../components/contact'; // Adjust the import paths as necessary
import Main from '../components/Main';
import Skills from '../components/Skills';
import Projects from '@/components/Projects';
//import { ModalProvider } from '@/components/modalContext';
//import  ContactModal  from '@/components/ContactModal'

const HomePage = () => {
  return (
  
      <div>
  
      <section className="portfolio-container">
        <Main />
        <Skills />
        <Projects />
        <Contact />
      
      </section>
    </div>
 
  );
};

export default HomePage;