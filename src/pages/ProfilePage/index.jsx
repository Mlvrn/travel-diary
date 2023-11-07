import MainLayout from '../../layout/MainLayout';
import styles from './ProfilePage.module.scss';
import { PostCard } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPost } from '../LandingPage/actions';
import { useEffect } from 'react';

const ProfilePage = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPost());
  }, []);

  const posts = useSelector((state) => state.landingPageReducer.posts);
  const userPosts = posts.filter((post) => post.userId === user.id);

  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <p className={styles.wrapper__title}>Profile</p>
        <div className={styles.profile}>
          <img
            className={styles.profile__avatar}
            src="https://source.unsplash.com/400x400/?avatar"
            alt="Avatar"
          />
          <p className={styles.profile__name}>{user?.fullName}</p>
          <p className={styles.profile__email}>{user?.email}</p>
          <a href="/new" className={styles.profile__button}>
            Add New Post
          </a>
        </div>
        {userPosts.length === 0 ? (
          <p className={styles.no_post}>No posts yet...</p>
        ) : (
          <div className={styles.grid}>
            {userPosts.map((post) => (
              <div className={styles.grid__item} key={post.id}>
                <PostCard post={post} />
              </div>
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default ProfilePage;
