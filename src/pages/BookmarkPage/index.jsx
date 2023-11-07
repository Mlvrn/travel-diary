import { useEffect, useState } from 'react';
import MainLayout from '../../layout/MainLayout';
import styles from './BookmarkPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getBookmarks } from './actions';
import { PostCard } from '../../components';

const BookmarkPage = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const posts = useSelector((state) => state.bookmarkReducer.bookmarks);

  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <p className={styles.wrapper__title}>Bookmark</p>

        <div className={styles.grid}>
          {posts?.map((post) => (
            <div className={styles.grid__item} key={post.id}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default BookmarkPage;
