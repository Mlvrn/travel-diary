import MainLayout from '../../layout/MainLayout';
import styles from './BookmarkPage.module.scss';
import { useSelector } from 'react-redux';

import { PostCard } from '../../components';

const BookmarkPage = () => {
  const posts = useSelector((state) => state.bookmarkReducer.bookmarks);

  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <p className={styles.wrapper__title}>Bookmark</p>

        {posts.length === 0 ? (
          <p className={styles.no_bookmark}>No bookmarked items</p>
        ) : (
          <div className={styles.grid}>
            {posts.map((post) => (
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

export default BookmarkPage;
