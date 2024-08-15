import { registerDecorators as _registerDecorators, LightningElement, registerComponent as _registerComponent } from "lwc";
import _tmpl from "./blogPostsList.html";
class HelloWorldApp extends LightningElement {
  constructor(...args) {
    super(...args);
    this.posts = [];
  }
  async connectedCallback() {
    await this.loadPosts();
  }
  async loadPosts() {
    try {
      const postResp = await fetch("/public/blog/post-indexes.json");
      this.posts = await postResp.json();
      this.posts.forEach(post => {
        post.link = `/posts/${post.id}`;
      });
    } catch (error) {
      console.error('Error loading blog posts:', error);
    }
  }
  /*LWC compiler v7.2.1*/
}
_registerDecorators(HelloWorldApp, {
  track: {
    posts: 1
  }
});
const __lwc_component_class_internal = _registerComponent(HelloWorldApp, {
  tmpl: _tmpl,
  sel: "my-blog-posts-list",
  apiVersion: 62
});
export default __lwc_component_class_internal;