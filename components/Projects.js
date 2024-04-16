
import Link from 'next/link'

import styles from '@/styles/projects.module.css'; // Adjust the path as necessary

export const Projects = () => {
  return (

    <section className={styles.projects}>
           <div className={styles.featuredContainers}>
     <h1>My projects</h1>
     <div className={styles.borderBottom}></div>
     
     <article className={styles.featuredText}>

          <h3>Spirri</h3>
          <h4>Tech Lead  | Frontend developer</h4>
          <h5>Spirri a plattform that contributes to better health and 
            wellbeing.
          </h5>
          <p>
            Overseeing the technical solutions for Spirri.com 
            Leading developers and mentoring interns 
            Developing both front-end and back-end functionalities such as implementing stripe and a guest registration 
            Working in Next.js, TypeScript, Tailwind CSS, AWS and more </p>

          <div className={styles.tags}>
          <p>Next.js</p> <p>Typescript</p> <p>Tailwind CSS</p>  <p>Redux</p> <p>API</p> 
          <p> AWS</p>
          </div>

          <div className={styles.linksproject}>

            <div className={styles.livebtn}>
              <Link href="https://spirri.com/">
                <p>View the page</p>
              </Link>
            </div>
          </div>
        </article>
        

        <article className={styles.featuredText}>

<h3>Linn Sundlöf coach</h3>
<p>A landing page where frontend is built in next.js and backend in sanity.io
Integrated Sanity.io as the content management system, enabling real-time content updates.
Ensured the landing page adhered to web accessibility standards.
</p>

<div className={styles.tags}>
<p>Next.js</p> <p>Sanity.io</p> <p>CSS Modules</p> 
</div>

<div className={styles.linksproject}>
<h4>Link to project will come soon</h4>
  { /* <div className={styles.livebtn}>

  <Link href="">

      <span>Live demo</span>
  </Link>
    </div>*/}

</div>
</article>

<article className={styles.featuredText}>

<h3>Separations Coachen</h3>
<p>A landing page where frontend is built in React.js and backend in sanity.io
Integrated Sanity.io as the content management system, enabling real-time content updates by the client.
Ensured the landing page adhered to web accessibility standards.
</p>

<div className={styles.tags}>
<p>React.js</p> <p>Sanity.io</p> <p>CSS</p> 
</div>

<div className={styles.linksproject}>

  <div className={styles.livebtn}>
    <Link href="https://separationscoachen.se/">
      <p>View the page</p>
    </Link>
    </div>

</div>
</article>
    <div className={styles.bootcamp}>  </div> 
      
      <h2>Bootcamp Projects</h2>
  
 
    {/* TeQueenMatch*/}
        <article className={styles.featuredText}>

          <h3>TeQueenMatch</h3>
          <p>Fullstack app containing a API using Express, Node.js and MongoDB and a frontend in React. The purpose of the app is to connect women and non-binary individuals within the tech community, facilitating connections for mentorship,
            support, and shared experiences.
          </p>

          <div className={styles.tags}>
          <p>React.js</p> <p>CSS</p>  <p>Redux</p> <p>API</p> <p>Express</p> 
          <p> Google cloud</p>
          </div>

          <div className={styles.linksproject}>
            <div className={styles.gitbtn}>
              <Link href="https://github.com/IrupePozoGraviz/teQueenMatch">

              <p>View the code</p>
              </Link>
            </div>

            <div className={styles.livebtn}>
              <Link href="https://tequeenmatch.netlify.app/">
              <p>View the page</p>
              </Link>
            </div>
          </div>
        </article>


      <article className={styles.featuredText}>
          <h3>Happy Thoughts</h3>
          <p>Like Twitter, but less negativity.
          A platform for sharing happy moments, 
          supported by a custom Express API and MongoDB for the backend.
          </p>

          <div className={styles.tags}>
            <p>React.js</p> <p>CSS</p> <p>JavaScript</p> <p>Express</p> <p>Mongo DB</p>
            <p>Api</p> <p>Node.js</p>
          </div>

          <div className={styles.linksproject}>
            <div className={styles.gitbtn}>
              <Link href="https://github.com/IrupePozoGraviz/project-happy-thoughts">
                <p>View the code</p>
              </Link>
            </div>

            <div className={styles.livebtn}>
              <Link href="https://happy-thoughts-movimiento.netlify.app/">
                <p>View the page</p>
              </Link>
            </div>
          </div>
        </article>
     

      {/* Movies */}
      
     
        <article className={styles.featuredText}>

          <h3>Movie Releases in React</h3>
          <p>A multi-page web application using React Router and 
            asynchronous data fetching from external API.
            It allows users to view a list of the
            latest movie releases and select a movie to read more about.
          </p>

          <div className={styles.tags}>
          <p>React.js</p> <p>CSS</p> <p>JavaScript</p> <p>Redux</p>
            <p>Api</p>
          </div>

          <div className={styles.linksproject}>
            <div className={styles.gitbtn}>
              <Link href="https://github.com/IrupePozoGraviz/project-movies">
                <p>View the code</p>
              </Link>
            </div>

            <div className={styles.livebtn}>
              <Link href="https://cozy-sunburst-a5adfd.netlify.app/">
              
                <p>View the page</p>
              </Link>
            </div>
          </div>
        </article>
  

      {/* To do */}
     
      
        <article className={styles.featuredText}>
          <h3>To Do App</h3>
          <p>A todo-app built in React using Redux.
            The user can add, delete and check their todos.
          </p>

          <div className={styles.tags}>
            <p>JavaScript</p> <p>React</p> <p>Redux</p> <p>css</p>
          </div>

          <div className={styles.linksproject}>
            <div className={styles.gitbtn}>
              <Link href="https://github.com/IrupePozoGraviz/project-todos">
                <p>View the code</p>
              </Link>
            </div>
          

          <div className={styles.livebtn}>
            <Link href="https://irupes-to-do-app.netlify.app/">
        
             <p>View the page</p>
            </Link>

          </div>
          </div>
        </article>
     

      {/* Maze */}
     
     
        <article className={styles.featuredText}>
          <h3>The Great Space Maze</h3>
          <p>Labyrinth Game using Redux where the user navigates through a maze.
            It`&apos;` s built with React and Redux and connects
            to an API that provides the locations.
          </p>

          <div className={styles.tags}>
            <p>JavaScript</p> <p>React</p> <p>Redux</p>
            <p>pair programming</p>
          </div>

          <div className={styles.linksproject}>
            <div className={styles.gitbtn}>
              <Link href="https://github.com/IrupePozoGraviz/project-labyrinth">
              <p>View the code</p>
              </Link>
            </div>
          

          <div className={styles.livebtn}>
            <Link href="https://the-great-space-maze.netlify.app/">
            <p>View the page</p>
            </Link>

          </div>
          </div>
        </article>
  

      {/* Quiz */}
     
        <article className={styles.featuredText}>
          <h3>Como se llama el animal</h3>
          <p>Test your spanish skills in this fun project made for
            children built in React using Redux.
          </p>

          <div className={styles.tags}>
            <p>React</p> <p>Redux</p> <p>css</p>
          </div>

          <div className={styles.linksproject}>
            <div className={styles.gitbtn}>
              <a href="https://github.com/IrupePozoGraviz/project-redux-quiz">
              <p>View the code</p>
              </a>
            </div>
          

          <div className={styles.livebtn}>
            <Link href="https://vad-heter-djuret.netlify.app/">
            <p>View the page</p>
            </Link>

          </div>
          </div>
        </article>


      {/* Survey */}
       
        <article className={styles.featuredText}>
          <h3>What&apos; s your favourite animal- Survey in react</h3>
          <p>A survey where the user answers questions and gets to know their favourite animnal.
            Try it out and see what your favourite animal is!
          </p>

          <div className={styles.tags}>
            <p>JSX</p> <p>CSS</p> <p>React</p> <p>Redux</p>
          </div>

          <div className={styles.linksproject}>
            <div className={styles.gitbtn}>
              <Link href="https://github.com/IrupePozoGraviz/project-survey">
                <p>View the code</p>
              </Link>
            </div>
          
          <div className={styles.livebtn}>
            <Link href="https://transcendent-heliotrope-0d805c.netlify.app">
            <p>View the page</p>
            </Link>

          </div>
          </div>
        </article>


      {/* MusicProject */}

     
        <article className={styles.featuredText}>
          <h3>Music Releases in React</h3>
          <p>An site built in a pair-programming project,
            where the user can browse current music releases.
            It is based on an API from Spotify.
          </p>

          <div className={styles.tags}>
            <p>JavaScript</p> <p>React</p> <p>API</p> <p>css</p>
          </div>

          <div className={styles.linksproject}>
            <div className={styles.gitbtn}>
              <Link href="https://github.com/IrupePozoGraviz/project-music-releases">
                <p>View the code</p>
              </Link>
            </div>
          

          <div className={styles.livebtn}>
            <Link href="https://musicreleases-spotify.netlify.app/">
            <p>View the page</p>
            </Link>

          </div>
          </div>
        </article>


      {/* Weather app */}
   
     
        <article className={styles.featuredText}>
          <h3>Weather app</h3>
          <p>An app built in a pair-programming project to check the
            weather forecast in whatever city the user searches for,
            while having the styling change according to the weather and time of day.
            It fetches and presents weather data using API from Openweathermap.
          </p>

          <div className={styles.tags}>
            <p>JavaScript</p> <p>API</p> <p>Pair-programming</p> <p>css</p>
          </div>

          <div className={styles.linksproject}>
            <div className={styles.gitbtn}>
              <Link href="https://github.com/IrupePozoGraviz/project-weather-app" >
                <p>View the code</p>
              </Link>
            </div>
          

          <div className={styles.livebtn}>
            <Link href="https://cheery-pasca-c07ee4.netlify.app/">
            <p>View the page</p>
            </Link>

          </div>
          </div>
        </article>


      {/* Guess who */}
     
     
        <article className={styles.featuredText}>
          <h3>Guess who
          </h3>
          <p>A digital version of the board game Guess Who, builöt with JavaScript. 
            Focuses on utilizing objects, arrays, and DOM manipulation.
          </p>

          <div className={styles.tags}>
            <p>HTML</p> <p>CSS</p> <p>JavaScript</p>
          </div>

          <div className={styles.linksproject}>
            <div className={styles.gitbtn}>
              <Link href="https://github.com/IrupePozoGraviz/project-guess-who">
                <p>View the code</p>
              </Link>
            </div>
          

          <div className={styles.livebtn}>
            <Link href="https://guess-who-irupe.netlify.app/">
            <p>View the page</p>
            </Link>

          </div>
          </div>
        </article>
    
    </div>
    </section>
       
  );
}
export default Projects