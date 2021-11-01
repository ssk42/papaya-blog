CREATE TABLE IF NOT EXISTS blog_posts
(
    id        serial            NOT NULL,
    post_date date              NOT NULL,
    title     character varying NOT NULL,
    post_name character varying NOT NULL,
    body      character varying NOT NULL
);