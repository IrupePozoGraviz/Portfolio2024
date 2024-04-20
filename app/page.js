
import Main from '../components/Main';
import Skills from '../components/Skills';
import Projects from '@/components/Projects';
import Footer from '@/components/footer';

import styles from '@/styles/landningssida.module.css'

const HomePage = () => {
  return (
<>
<main className={styles.landningssida}>
        <Main />
        <Skills />
        <Projects />
      </main>
      <Footer />
   
      </>
      
 
  );
};

export default HomePage;