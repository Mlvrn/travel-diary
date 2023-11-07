import { AuthCard } from '../../components';
import styles from './AuthPage.module.scss';

const RegisterPage = () => {
  return (
    <div className={styles.auth}>
      <AuthCard isRegister={true} />
    </div>
  );
};

export default RegisterPage;
