const { Pool } = require('pg');

const pool = new Pool({
    connectionString:
        process.env.DATABASE_URL || 'postgres://localhost/papayadb',
    ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
});

const getPosts = async () =>
    pool.query(
        'SELECT id, post_date, title, post_name, body FROM blog_posts ORDER BY post_date DESC'
    );

const getPost = async (postName) =>
    pool.query(
        `SELECT id, post_date, title, post_name,  body FROM blog_posts WHERE post_name = $1`,
        [postName]
    );

module.exports = {
    getPosts,
    getPost
};                  
    