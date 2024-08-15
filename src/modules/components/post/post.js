import { LightningElement, api, track } from "lwc";
import {fetchMarkdownWithFrontMatter} from 'utils/commonUtil';

export default class Post extends LightningElement {
    @api postId = null;
    @track post = null;

    async connectedCallback() {
        try {
            this.post = await fetchMarkdownWithFrontMatter(`/public/blog/posts/${postId}.md`);
        } catch (error) {
            console.error('Error loading blog posts:', error);
            
        } 
    }
    
    async renderedCallback() {
        if(this.post && this.refs.postContent)
            this.refs.postContent.innerHTML = this.post.content;
    }
}