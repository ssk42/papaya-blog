\set content `cat papaya-blog/newpost.html`
INSERT INTO blog_posts (
    post_name,
    post_date,
    title,
    body
)
VALUES(
    'hello_world',
    '2021-09-26',
    'Hello World',
    :'content'
);