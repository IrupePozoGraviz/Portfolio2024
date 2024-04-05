import React from 'react';
import Image from 'next/image';
import Header from './Header';
import styles from '@/styles/header.module.css'; // Adjust the import path as necessary

export const Main = () => {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.desktop}>
        <Header />
        <section className={styles.profileImage}>
  <Image 
    src="/assets/Irupe.jpeg" 
    alt="Irupé" 
    layout="responsive"
    width={500} 
    height={600} 
    className={styles.image}
  /> {/* Adjust width and height as needed */}
</section>

          <div className={styles.profileContainer}>
            <h1 className={styles.profileH1}>Irupé Pozo Graviz</h1>
            <h2 className={styles.profileH2}>Web developer and Projectmanager</h2>
          </div>
      </div>
      <div className={styles.profileInfo}>
        <p>
        Hola! A versatile web developer and project manager with a passion
          for human rights and accessibility on the web.
          I have a background in pedagogy, communication and project management
          an experience that has come in handy in my career.
         I have worked as frontend developer, tech lead, and project manager.
         Hire me as a consultat or as a member of your team.
        </p>
      </div>

      <div className={styles.icons}>
        <div className={styles.iconsGithub}>
          <a href="https://github.com/IrupePozoGraviz">
            {/* Updated to use next/image */}
            <Image src="/assets/blackgithubicon.svg" alt="GitHub" width={40} height={40} />
          </a>
        </div>

        <div className={styles.iconsLinkedin}>
          <a href="https://www.linkedin.com/in/irup%C3%A9-pozo-graviz-119112266/">
            {/* Updated to use next/image */}
            <Image src="/assets/blacklinkedinicon.svg" alt="LinkedIn" width={40} height={40} />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Main; // Ensure to export as default if it's going to be a page or used as such.
