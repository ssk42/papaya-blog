const apiUrl = process.env.API_ENDPOINT || 'http://localhost:5000'; // eslint-disable-line
const POSTS_URL = `${apiUrl}/api/v1/posts`;

export const getPosts = () =>
    fetch(POSTS_URL)
        .then((response) => {
            if (!response.ok) {
                throw new Error('No response from server');
            }
            return response.json();
        })
        .then((result) => {
            return result;
        })
        .catch((error) => {
            console.log(`Error retrieving posts: ${error}`);
        });

export const getPostById = (postsId) =>
    fetch(`${POSTS_URL}/${postsId}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('No response from server');
            }
            return response.json();
        })
        .then((result) => {
            return result;
        })
        .catch((error) => {
            console.log(`Error retrieving post: ${error}`);
        });