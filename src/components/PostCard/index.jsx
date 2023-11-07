import { Card, CardContent, CardMedia } from '@mui/material';
import styles from './PostCard.module.scss';
import { Bookmark, BookmarkBorder } from '@mui/icons-material';
import { formatDateToCustomFormat } from '../../utils/date';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addBookmark, removeBookmark } from '../../pages/BookmarkPage/actions';

const PostCard = ({ post }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem('user'));
  const bookmarks = useSelector((state) => state.bookmarkReducer.bookmarks);
  const bookmark = bookmarks?.filter((val) => {
    if (post.postId) {
      return val.bookmarkUserId === user?.id && val.postId === post.postId;
    } else {
      return val.bookmarkUserId === user?.id && val.postId === post.id;
    }
  });
  const isBookmarked = bookmark.length > 0;

  return (
    <div className={styles.wrapper}>
      <Card
        className={styles.card}
        onClick={() => navigate(`/details/${post?.id}`)}
      >
        <CardMedia className={styles.card__image} image={post.imageUrl} />
        <CardContent className={styles.card__content}>
          <div className={styles.card__content__header}>
            <p className={styles.card__title}>{post?.title}</p>
            <p className={styles.card__date}>
              {formatDateToCustomFormat(post?.date)}, {post?.author}
            </p>
          </div>

          <p className={styles.card__description}>{post?.shortDescription}</p>
        </CardContent>
      </Card>
      <div
        className={styles.bookmark}
        onClick={() => {
          isBookmarked
            ? dispatch(removeBookmark(bookmark[0]?.id))
            : dispatch(addBookmark(post, user?.id));
        }}
      >
        {isBookmarked ? <Bookmark /> : <BookmarkBorder />}
      </div>
    </div>
  );
};

export default PostCard;
