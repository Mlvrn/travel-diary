import axios from 'axios';

const baseURL = 'http://localhost:3000/';

const endpoints = {
  posts: 'posts',
  users: 'users',
  bookmarks: 'bookmarks',
};

export const callApi = async ({
  endpoint,
  method,
  headers = {},
  params = {},
  data,
}) => {
  const options = {
    baseURL,
    url: endpoint,
    method,
    headers,
    params,
    data,
  };

  const response = await axios(options);
  return response?.data;
};

export const getAllPosts = () => {
  return callApi({ endpoint: endpoints.posts, method: 'GET' });
};

export const createPost = (post) => {
  return callApi({
    endpoint: endpoints.posts,
    method: 'POST',
    headers: {},
    params: {},
    data: post,
  });
};

export const register = (user) => {
  return callApi({
    endpoint: endpoints.users,
    method: 'POST',
    headers: {},
    params: {},
    data: user,
  });
};

export const login = (credentials) => {
  return callApi({
    endpoint: endpoints.users,
    method: 'GET',
    headers: {},
    params: {},
    data: credentials,
  });
};

export const getPostById = (id) => {
  return callApi({
    endpoint: `${endpoints.posts}/${id}`,
    method: 'GET',
  });
};

export const getBookmarkedPostsById = (id) => {
  return callApi(`${endpoints.bookmarks}?bookmarkUserId=${id}`, 'GET');
};
export const getBookmarks = () => {
  return callApi(`${endpoints.bookmarks}`, 'GET');
};
export const addPostBookmark = (dataPost) => {
  return callApi(endpoints.bookmarks, 'POST', {}, dataPost);
};
export const removePostBookmark = (id) => {
  return callApi(`${endpoints.bookmarks}/${id}`, 'DELETE');
};
