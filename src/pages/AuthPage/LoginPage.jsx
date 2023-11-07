import { AuthCard } from '../../components';
import styles from './AuthPage.module.scss';

const LoginPage = () => {
  return (
    <div className={styles.auth}>
      <AuthCard isRegister={false} />
    </div>
  );
};

export default LoginPage;
