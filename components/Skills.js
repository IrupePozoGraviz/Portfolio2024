import styles from  '@/styles/skillscss.module.css'

const Skills = () => {
  return (
    <main className={styles.mainSkills}>
         <h1>
    Skills
      </h1>
    <section className={styles.skills}>

   
      <dl className={styles.code}>
        <dt className={styles.dt}>Code</dt>
        <dd className={styles.dd}>Next.js</dd>
        <dd className={styles.dd}>Typescript</dd>
        <dd className={styles.dd}>Tailwind CSS</dd>
        <dd className={styles.dd}>React.js</dd>
        <dd className={styles.dd}>Redux</dd>
        <dd className={styles.dd}>CSS3</dd>
        <dd className={styles.dd}>HTML5</dd>
        <dd className={styles.dd}><span className={`${styles.tech} ${styles.js}`}>JavaScript ES6</span></dd>
        <dd className={styles.dd}>MongoDB</dd>
        <dd className={styles.dd}>Node.js</dd>
        <dd className={styles.dd}>REST API</dd>
      </dl>

      <dl className={styles.toolbox}>
        <dt className={styles.dt}>Toolbox</dt>
        <dd className={styles.dd}>Headless CMS </dd>
        <dd className={styles.dd}>Postgres</dd>
        <dd className={styles.dd}>MySQL</dd>
        <dd className={styles.dd}><span className={`${styles.tech} ${styles.Cloud}`}>Github </span></dd>
        <dd className={styles.dd}>VSCode</dd>
        <dd className={styles.dd}>Google Cloud </dd>
        <dd className={styles.dd}>Postman</dd>
        <dd className={styles.dd}>Figma</dd>
        <dd className={styles.dd}>Canva</dd>
        <dd className={styles.dd}>Slack</dd>
        <dd className={styles.dd}>Wordpress</dd>
        <dd className={styles.dd}>Photoshop</dd>

      </dl>

      <dl className={styles.morelist}>
        <dt className={`${styles.dt} ${styles.more}`}>More</dt>
        <dd className={styles.dd}>Project management</dd>
        <dd className={styles.dd}>Pedagogy</dd>
        <dd className={styles.dd}>Web Development </dd>
        <dd className={styles.dd}> <span className={`${styles.tech} ${styles.acces}`}>Web Accessibly</span> </dd>
        <dd className={styles.dd}>Communication</dd>
        <dd className={styles.dd}>mob-programming</dd>
        <dd className={styles.dd}>pair-programming</dd>

      </dl>
      <dl className={styles.Languagelist}>
        <dt className={`${styles.dt} ${styles.Language}`}>Languages</dt>
        <dd className={styles.dd}>English</dd>
        <dd className={styles.dd}> <span className={`${styles.Languagelist} ${styles.Swedish}`}>Swedish</span> </dd>
        <dd className={styles.dd}>Spanish</dd>
        <dd className={styles.dd}>Portugese </dd>
       

      </dl>

    </section>
    </main>

  )
}

export default Skills