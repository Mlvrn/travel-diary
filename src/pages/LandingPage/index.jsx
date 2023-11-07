import { useDispatch, useSelector } from 'react-redux';
import { Header, Hero, PostCard, SearchBar } from '../../components';
import styles from './LandingPage.module.scss';
import { useEffect, useState } from 'react';
import { getAllPost } from './actions';

const LandingPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.landingPageReducer.posts);
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user, '<<<< USER');

  useEffect(() => {
    dispatch(getAllPost());
  }, []);

  const filteredPosts = posts.filter((post) =>
    post?.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {user ? <Header /> : <Hero />}

      <div className={styles.wrapper}>
        <p className={styles.wrapper__title}>Journey</p>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className={styles.grid}>
          {filteredPosts.map((post, index) => (
            <div className={styles.grid__item} key={index}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
