import { LightningElement, wire } from 'lwc';
import { getPostById } from '../../data/dataService';
import { routeParams } from '@lwce/router'; // eslint-disable-line
export default class Post extends LightningElement {
    @wire(routeParams) params;

    thePost = {};

    connectedCallback() {
        getPostById(this.params.id)
            .then((result) => {
                if (result.length > 0) {
                    let post = result[0];
                    let postWithDetail = {
                        id: post.id,
                        body: post.body,
                        post_name: post.post_name,
                        formatted_date: this.formatDate(
                            new Date(post.post_date)
                        ),
                        title: post.title,
                        link: '/blog/' + post.post_name
                    };
                    this.thePost = postWithDetail;
                }
            })
            .catch((error) => {
                console.log(`Error retrieving posts: ${error}`);
            });
    }

    formatDate(theDate) {
        let options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        return theDate.toLocaleDateString('en-US', options);
    }
}    