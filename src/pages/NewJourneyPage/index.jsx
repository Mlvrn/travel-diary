import ReactQuill from 'react-quill';
import MainLayout from '../../layout/MainLayout';
import styles from './NewJourneyPage.module.scss';
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import { useDispatch } from 'react-redux';
import { createPost } from './actions';
import { Alert, Snackbar } from '@mui/material';

const NewJourneyPage = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('');

  const user = JSON.parse(localStorage.getItem('user'));

  const [validationErrors, setValidationErrors] = useState({
    title: '',
    imageUrl: '',
    shortDescription: '',
    longDescription: '',
  });

  const createPostHandler = () => {
    setValidationErrors({
      title: '',
      imageUrl: '',
      shortDescription: '',
      longDescription: '',
    });

    let hasError = false;
    if (!title) {
      setValidationErrors((prevState) => ({
        ...prevState,
        title: 'Title is required',
      }));
      hasError = true;
    }
    if (!imageUrl) {
      setValidationErrors((prevState) => ({
        ...prevState,
        imageUrl: 'Image URL is required',
      }));
      hasError = true;
    }
    if (!shortDescription) {
      setValidationErrors((prevState) => ({
        ...prevState,
        shortDescription: 'Short Description is required',
      }));
      hasError = true;
    }
    if (!longDescription) {
      setValidationErrors((prevState) => ({
        ...prevState,
        longDescription: 'Long Description is required',
      }));
      hasError = true;
    }

    if (hasError) {
      return;
    }

    const newPost = {
      title,
      imageUrl,
      shortDescription,
      longDescription,
      date: new Date().toISOString(),
      userId: user.id,
      author: user.fullName,
    };
    console.log(newPost);

    try {
      dispatch(createPost(newPost));

      setSnackbarMessage('Post created successfully');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);

      setTitle('');
      setImageUrl('');
      setShortDescription('');
      setLongDescription('');
    } catch (error) {
      console.error('Error creating post: ', error);

      setSnackbarMessage('An error occurred while creating the post');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <p className={styles.wrapper__title}>New Journey</p>

        <form className={styles.form}>
          <p className={styles.form__label}>Title</p>
          <input
            type="text"
            className={styles.form__input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <p className={styles.error}>{validationErrors.title}</p>

          <p className={styles.form__label}>Image Url</p>
          <input
            type="text"
            className={styles.form__input}
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <p className={styles.error}>{validationErrors.imageUrl}</p>

          <p className={styles.form__label}>Short Description</p>
          <textarea
            type="text"
            className={styles.form__input}
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
          />
          <p className={styles.error}>{validationErrors.shortDescription}</p>

          <p className={styles.form__label}>Description</p>
          <ReactQuill
            theme="snow"
            value={longDescription}
            onChange={setLongDescription}
            className={styles.quill}
          />
          <p className={styles.error}>{validationErrors.longDescription}</p>

          <button
            type="button"
            className={styles.form__button}
            onClick={() => createPostHandler()}
          >
            Post
          </button>
        </form>
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          elevation={6}
          variant="filled"
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </MainLayout>
  );
};

export default NewJourneyPage;
