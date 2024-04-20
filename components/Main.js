import React from 'react';
import Image from 'next/image';
import Link from 'next/link'

import styles from '@/styles/header.module.css'; // Adjust the import path as necessary

export const Main = () => {
  return (
    <main className={styles.mainContainer}>
      
      <div className={styles.desktop}>
  <section className={styles.profileImage}>
  <Image 
    src="/assets/Irupe.jpeg" 
    alt="Irupé" 
    width={500} 
    height={600} 
  />
</section>

          <div className={styles.profileContainer}>
            <h1 className={styles.profileH1}>Irupé Pozo Graviz</h1>
            <h2 className={styles.profileH2}>Web developer</h2>

        <p>
       As a web developer, I don't just code—I infuse projects with accessibility and diversity,
        ensuring that all users feel valued! With a focus on web accessibility,
        I bring a distinctive mix of technical expertise and diversity experience.
        My background in education and communication enhance my development process,
        enabling me to create more inclusive and user-centric digital experiences.
        Proficient in Next.js, React, headless CMS like Sanity.io, and cloud platforms like AWS,
        I'm equipped to turn visions into accessible realities. 
         Hire me as a consultat or as a member of your team.
        </p>
      </div>
      </div>
      <div className={styles.icons}>
        <div className={styles.iconsGithub}>
          <Link href="https://github.com/IrupePozoGraviz"
          target="_blank" rel="noopener noreferrer">
            {/* Updated to use next/image */}
            <Image src="/assets/blackGithub.svg" alt="GitHub" width={40} height={40} />
          </Link>
        </div>

        <div className={styles.iconsLinkedin}>
          <Link href="https://www.linkedin.com/in/irup%C3%A9-pozo-graviz-119112266/"
          target="_blank" rel="noopener noreferrer">
            {/* Updated to use next/image */}
            <Image src="/assets/blacklinkedinicon.svg" alt="LinkedIn" width={40} height={40} />
          </Link>
        </div>

      </div>
    </main>
  );
};

export default Main; // Ensure to export as default if it's going to be a page or used as such.
