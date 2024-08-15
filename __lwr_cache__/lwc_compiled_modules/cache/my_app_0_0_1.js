import { registerDecorators as _registerDecorators, LightningElement, registerComponent as _registerComponent } from "lwc";
import _tmpl from "./app.html";
const aboutDataUrl = '/public/about/about.YAML';
import { getAboutYAMLData } from 'commonUtil';
class app extends LightningElement {
  constructor(...args) {
    super(...args);
    this.showPostsSection = false;
    this.showAboutSection = false;
    this.postTitle = undefined;
    this.portfolioData = undefined;
  }
  connectedCallback() {
    const pathUrl = this.sanitizeUrl(window.location.pathname);
    const postUrlRegex = /^\/posts\/([^/]+)\/?$/;
    if (pathUrl && (pathUrl === '/posts/' || pathUrl === '/posts')) {
      this.showPostsSection = true;
    } else if (pathUrl && postUrlRegex.test(pathUrl)) {
      this.postTitle = pathUrl.match(postUrlRegex)[1];
    } else {
      this.showAboutSection = true;
    }
    this.portfolioData = getAboutYAMLData(this.aboutDataUrl);
  }
  sanitizeUrl(url) {
    return url ? url.replace(/[^-A-Za-z0-9+&@#/%?=~_|!:,.;()]/g, '') : '';
  }
  /*LWC compiler v7.2.1*/
}
_registerDecorators(app, {
  fields: ["showPostsSection", "showAboutSection", "postTitle", "portfolioData"]
});
const __lwc_component_class_internal = _registerComponent(app, {
  tmpl: _tmpl,
  sel: "my-app",
  apiVersion: 62
});
export default __lwc_component_class_internal;