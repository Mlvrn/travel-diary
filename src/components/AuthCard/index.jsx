import { useDispatch, useSelector } from 'react-redux';
import styles from './AuthCard.module.scss';
import { Card } from '@mui/material';
import { useEffect, useState } from 'react';
import { loginUser, registerUser } from '../../pages/AuthPage/actions';
import { useNavigate } from 'react-router-dom';

const AuthCard = ({ isRegister }) => {
  const [fields, setFields] = useState({
    email: '',
    password: '',
    fullName: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    fullName: '',
  });

  const [loginErrorMessage, setLoginErrorMessage] = useState('');

  const error = useSelector((state) => state.authReducer.error);
  const user = useSelector((state) => state.authReducer.user);
  console.log(error, '<<ERROR useSelector');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = () => {
    const { email, password, fullName } = fields;

    setErrors({
      email: '',
      password: '',
      fullName: '',
    });

    let hasError = false;

    if (!email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Email is required.',
      }));
      hasError = true;
    }

    if (!password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password is required.',
      }));
      hasError = true;
    }

    if (password.length < 6) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password must be at least 6 characters.',
      }));
      hasError = true;
    }

    if (!fullName && isRegister) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        fullName: 'Full Name is required.',
      }));
      hasError = true;
    }

    if (hasError) {
      return;
    }

    dispatch(registerUser({ email, password, fullName }));

    navigate('/login');
  };

  const handleLogin = () => {
    const { email, password } = fields;

    setErrors({
      email: '',
      password: '',
      fullName: '',
    });

    let hasError = false;

    if (!email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Email is required.',
      }));
      hasError = true;
    }

    if (!password) {
      setLoginErrorMessage('');
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password is required.',
      }));
      hasError = true;
    }

    if (hasError) {
      return;
    }

    localStorage.setItem('user', JSON.stringify(user));
    dispatch(loginUser({ email, password }));
    if (error) {
      setLoginErrorMessage(error);
    } else {
      setLoginErrorMessage('');
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        navigate('/');
      }
    }
  };

  useEffect(() => {
    if (error) {
      setLoginErrorMessage(error);
    }
  }, [error]);

  return (
    <Card className={styles.card}>
      {isRegister ? (
        <>
          <p className={styles.card__title}>Register</p>
          <form className={styles.form}>
            <div className={styles.form__item}>
              <p className={styles.form__item__label}>Full Name</p>
              <input
                type="text"
                className={styles.form__item__input}
                value={fields.fullName}
                onChange={(e) =>
                  setFields({ ...fields, fullName: e.target.value })
                }
              />
              {errors.fullName && (
                <p className={styles.form__item__error}>{errors.fullName}</p>
              )}
            </div>
            <div className={styles.form__item}>
              <p className={styles.form__item__label}>Email</p>
              <input
                type="email"
                className={styles.form__item__input}
                value={fields.email}
                onChange={(e) =>
                  setFields({ ...fields, email: e.target.value })
                }
              />
              {errors.email && (
                <p className={styles.form__item__error}>{errors.email}</p>
              )}
            </div>
            <div className={styles.form__item}>
              <p className={styles.form__item__label}>Password</p>
              <input
                type="password"
                className={styles.form__item__input}
                value={fields.password}
                onChange={(e) =>
                  setFields({ ...fields, password: e.target.value })
                }
              />
              {errors.password && (
                <p className={styles.form__item__error}>{errors.password}</p>
              )}
            </div>
            <button
              type="button"
              className={styles.form__button}
              onClick={handleRegister}
            >
              Register
            </button>
            <p className={styles.form__redirect}>
              Already have an account? Click{' '}
              <a href="/login" className={styles.form__link}>
                Here
              </a>
            </p>
          </form>
        </>
      ) : (
        <>
          <p className={styles.card__title}>Login</p>
          <form className={styles.form}>
            <div className={styles.form__item}>
              <p className={styles.form__item__label}>Email</p>
              <input
                type="email"
                className={styles.form__item__input}
                value={fields.email}
                onChange={(e) =>
                  setFields({ ...fields, email: e.target.value })
                }
              />
              {errors.email && (
                <p className={styles.form__item__error}>{errors.email}</p>
              )}
            </div>
            <div className={styles.form__item}>
              <p className={styles.form__item__label}>Password</p>
              <input
                type="password"
                className={styles.form__item__input}
                value={fields.password}
                onChange={(e) =>
                  setFields({ ...fields, password: e.target.value })
                }
              />
              {errors.password && (
                <p className={styles.form__item__error}>{errors.password}</p>
              )}
              {loginErrorMessage && (
                <p className={styles.form__item__error}>{loginErrorMessage}</p>
              )}
            </div>
            <button
              type="button"
              className={styles.form__button}
              onClick={handleLogin}
            >
              Login
            </button>
            <p className={styles.form__redirect}>
              Don't have an account? Click{' '}
              <a href="/register" className={styles.form__link}>
                Here
              </a>
            </p>
          </form>
        </>
      )}
    </Card>
  );
};

export default AuthCard;
