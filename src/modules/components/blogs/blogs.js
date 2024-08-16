import { LightningElement, track} from "lwc";

export default class HelloWorldApp extends LightningElement {
	@track posts = [];
	async connectedCallback() {
		await this.loadPosts();
	}

	async loadPosts() {
        try {
            const postResp = await fetch("/public/blog/post-indexes.json");
			this.posts = await postResp.json();
			this.posts.forEach((post) => {
				post.link = `/posts/${post.id}`;
			});
        } catch (error) {
            console.error('Error loading blog posts:', error);
        }
    }
}
