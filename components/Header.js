import Image from 'next/image';
import styles from '@/styles/header.module.css'; // Continue to use your alias path for style modules

// Use named function for better debugging and React DevTools experience
const Header = () => {
  // Direct return of JSX without the explicit return statement
  return (
    <header className={styles.header}> {/* Use semantic HTML5 elements */}
      <div className={styles.logo}>
        {/* Use Image component from Next.js for optimized image handling */}
        {/* Add priority prop to pre-load important images */}
        <Image
          src="/assets/logo.svg"
          alt="logo"
          width={500} // Adjust based on your actual image's aspect ratio
          height={300} // Adjust based on your actual image's aspect ratio
          priority />
      </div>
    </header>
  );
}

export default Header;