\set content `cat newpost.html`
UPDATE blog_posts
SET body = :'content'
WHERE post_name = 'hello_world';