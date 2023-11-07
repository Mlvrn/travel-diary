import styles from './Hero.module.scss';
import logo from '../../assets/logo-white.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__wrapper}>
        <div className={styles.hero__header}>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <div className={styles.hero__header__auth}>
            <a
              href="/login"
              className={`${styles.hero__header__auth__button} ${styles.hero__header__auth__login}`}
            >
              Login
            </a>
            <a
              href="/register"
              className={`${styles.hero__header__auth__button} ${styles.hero__header__auth__register}`}
            >
              Register
            </a>
          </div>
        </div>
        <div className={styles.hero__content}>
          <p className={styles.hero__content__title}>
            The Journey
            <br /> you ever dreamed of.
          </p>
          <p className={styles.hero__content__subtitle}>
            We made a tool so you can easily keep & share your travel memories.
            <br />
            But there is a lot more
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
