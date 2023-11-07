import styles from './Header.module.scss';
import logo from '../../assets/logo-black.png';
import userIcon from '../../assets/user.png';
import writeIcon from '../../assets/write.png';
import logoutIcon from '../../assets/logout.png';
import bookmarkIcon from '../../assets/bookmark.png';
import { Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { BookmarkBorder } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../pages/AuthPage/actions';
import { useDispatch } from 'react-redux';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logoutUser());
    navigate('/');
  };

  return (
    <div className={styles.header}>
      <div className={styles.header__wrapper}>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <IconButton onClick={handleClick}>
          <Avatar
            src="https://source.unsplash.com/400x400/?avatar"
            alt="Avatar"
            className={styles.avatar}
          />
        </IconButton>

        <Menu
          className={styles.dropdown}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem
            onClick={() => navigate('/profile')}
            className={styles.dropdown__item}
          >
            <img src={userIcon} />
            <p>Profile</p>
          </MenuItem>
          <MenuItem
            onClick={() => navigate('/new')}
            className={styles.dropdown__item}
          >
            <img src={writeIcon} />
            <p>New Journey</p>
          </MenuItem>
          <MenuItem
            onClick={() => navigate('/bookmark')}
            className={styles.dropdown__item}
          >
            <img src={bookmarkIcon} />
            <p>Bookmark</p>
          </MenuItem>
          <div className={styles.divider}></div>
          <MenuItem onClick={handleLogout} className={styles.dropdown__item}>
            <img src={logoutIcon} />
            <p>Logout</p>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
