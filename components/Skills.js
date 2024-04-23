import styles from '@/styles/skillscss.module.css';

const Skills = () => {
  return (
    <main className={styles.mainSkills} role="main">
      <h1 tabIndex="0">Skills</h1>
      <section className={styles.skills} aria-label="Skills Categories">

        <dl className={styles.code}>
          <dt tabIndex="0" className={styles.dt}>Code</dt>
          <dd className={styles.dd} tabIndex="0">Next.js</dd>
          <dd className={styles.dd} tabIndex="0">Typescript</dd>
          <dd className={styles.dd} tabIndex="0">Tailwind CSS</dd>
          <dd className={styles.dd} tabIndex="0">React.js</dd>
          <dd className={styles.dd} tabIndex="0">Redux</dd>
          <dd className={styles.dd} tabIndex="0">CSS3</dd>
          <dd className={styles.dd} tabIndex="0">HTML5</dd>
          <dd className={styles.dd} tabIndex="0">
            <span className={`${styles.tech} ${styles.js}`} tabIndex="0">JavaScript ES6</span>
          </dd>
          <dd className={styles.dd} tabIndex="0">MongoDB</dd>
          <dd className={styles.dd} tabIndex="0">Node.js</dd>
          <dd className={styles.dd} tabIndex="0">REST API</dd>
        </dl>

        <dl className={styles.toolbox}>
          <dt tabIndex="0" className={styles.dt}>Toolbox</dt>
          <dd className={styles.dd} tabIndex="0">Headless CMS</dd>
          <dd className={styles.dd} tabIndex="0">Postgres</dd>
          <dd className={styles.dd} tabIndex="0">MySQL</dd>
          <dd className={styles.dd} tabIndex="0">
            <span className={`${styles.tech} ${styles.Cloud}`} tabIndex="0">Github</span>
          </dd>
          <dd className={styles.dd} tabIndex="0">VSCode</dd>
          <dd className={styles.dd} tabIndex="0">Google Cloud</dd>
          <dd className={styles.dd} tabIndex="0">Postman</dd>
          <dd className={styles.dd} tabIndex="0">Figma</dd>
          <dd className={styles.dd} tabIndex="0">Canva</dd>
          <dd className={styles.dd} tabIndex="0">Slack</dd>
          <dd className={styles.dd} tabIndex="0">Wordpress</dd>
          <dd className={styles.dd} tabIndex="0">Photoshop</dd>
        </dl>

        <dl className={styles.morelist}>
          <dt tabIndex="0" className={`${styles.dt} ${styles.more}`}>More</dt>
          <dd className={styles.dd} tabIndex="0">Project management</dd>
          <dd className={styles.dd} tabIndex="0">Pedagogy</dd>
          <dd className={styles.dd} tabIndex="0">Web Development</dd>
          <dd className={styles.dd} tabIndex="0">
            <span className={`${styles.tech} ${styles.acces}`} tabIndex="0">Web Accessibility</span>
          </dd>
          <dd className={styles.dd} tabIndex="0">Communication</dd>
          <dd className={styles.dd} tabIndex="0">mob-programming</dd>
          <dd className={styles.dd} tabIndex="0">pair-programming</dd>
        </dl>

        <dl className={styles.Languagelist}>
          <dt tabIndex="0" className={`${styles.dt} ${styles.Language}`}>Languages</dt>
          <dd className={styles.dd} tabIndex="0">English</dd>
          <dd className={styles.dd} tabIndex="0">
            <span className={`${styles.Languagelist} ${styles.Swedish}`} tabIndex="0">Swedish</span>
          </dd>
          <dd className={styles.dd} tabIndex="0">Spanish</dd>
          <dd className={styles.dd} tabIndex="0">Portuguese</dd>
        </dl>

      </section>
    </main>
  );
}

export default Skills;
