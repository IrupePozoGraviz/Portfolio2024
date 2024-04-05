import Image from 'next/image';
import styles from '@/styles/projects.module.css'; // Adjust the path as necessary

export default function Projects() {
  // An array of project details could also be created for mapping, which would make the code cleaner
  return (
    <section className={styles.projects}>
      {/* Project: Happy Thoughts */}
      <div className={styles.featuredContainers}>
        <Image src="/assets/happy.png" alt="Happy Thoughts" layout="responsive" width={700} height={475} />
        {/* Article and other content */}
      </div>

      {/* Project: Movies */}
      <div className={styles.featuredContainers}>
        <Image src="/assets/movie.png" alt="Movies" layout="responsive" width={700} height={475} />
        {/* Article and other content */}
      </div>

      {/* Project: Todo */}
      <div className={styles.featuredContainers}>
        <Image src="/assets/todos.png" alt="Todo" layout="responsive" width={700} height={475} />
        {/* Article and other content */}
      </div>

      {/* Project: Maze */}
      <div className={styles.featuredContainers}>
        <Image src="/assets/maze.png" alt="Maze" layout="responsive" width={700} height={475} />
        {/* Article and other content */}
      </div>

      {/* Project: Quiz */}
      <div className={styles.featuredContainers}>
        <Image src="/assets/quiz.png" alt="Quiz" layout="responsive" width={700} height={475} />
        {/* Article and other content */}
      </div>

      {/* Project: Survey */}
      <div className={styles.featuredContainers}>
        <Image src="/assets/survey.png" alt="Survey" layout="responsive" width={700} height={475} />
        {/* Article and other content */}
      </div>

      {/* Project: Music Releases */}
      <div className={styles.featuredContainers}>
        <Image src="/assets/music.png" alt="Music Releases" layout="responsive" width={700} height={475} />
        {/* Article and other content */}
      </div>

      {/* Project: Weather App */}
      <div className={styles.featuredContainers}>
        <Image src="/assets/weather.png" alt="Weather App" layout="responsive" width={700} height={475} />
        {/* Article and other content */}
      </div>

      {/* Project: Guess Who */}
      <div className={styles.featuredContainers}>
        <Image src="/assets/guess.png" alt="Guess Who" layout="responsive" width={700} height={475} />
        {/* Article and other content */}
      </div>
    </section>
  );
}
