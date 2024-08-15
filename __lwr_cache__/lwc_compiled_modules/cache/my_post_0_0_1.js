import { registerDecorators as _registerDecorators, LightningElement, registerComponent as _registerComponent } from "lwc";
import _tmpl from "./post.html";
import { fetchMarkdownWithFrontMatter } from 'util/commonUtil';
class Post extends LightningElement {
  constructor(...args) {
    super(...args);
    this.postId = null;
    this.post = null;
  }
  async connectedCallback() {
    try {
      this.post = await fetchMarkdownWithFrontMatter(`/public/blog/posts/${postId}.md`);
    } catch (error) {
      console.error('Error loading blog posts:', error);
    }
  }
  async renderedCallback() {
    if (this.post && this.refs.postContent) this.refs.postContent.innerHTML = this.post.content;
  }
  /*LWC compiler v7.2.1*/
}
_registerDecorators(Post, {
  publicProps: {
    postId: {
      config: 0
    }
  },
  track: {
    post: 1
  }
});
const __lwc_component_class_internal = _registerComponent(Post, {
  tmpl: _tmpl,
  sel: "my-post",
  apiVersion: 62
});
export default __lwc_component_class_internal;