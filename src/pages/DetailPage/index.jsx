import { useParams } from 'react-router-dom';
import MainLayout from '../../layout/MainLayout';
import styles from './DetailPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPostById } from './actions';
import { formatDateToCustomFormat } from '../../utils/date';

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const post = useSelector((state) => state.postReducer.post);

  useEffect(() => {
    dispatch(getPostById(id));
  }, [dispatch, id]);

  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <p className={styles.header__title}>{post?.title}</p>
          <p className={styles.header__author}>{post?.author}</p>
        </div>
        <div className={styles.content}>
          <p className={styles.content__date}>
            {formatDateToCustomFormat(post?.date)}
          </p>
          <img
            className={styles.content__image}
            src={post?.imageUrl}
            alt={post?.title}
          />
          <p
            className={styles.content__description}
            dangerouslySetInnerHTML={{ __html: post?.longDescription }}
          ></p>
        </div>
      </div>
    </MainLayout>
  );
};

export default DetailPage;
