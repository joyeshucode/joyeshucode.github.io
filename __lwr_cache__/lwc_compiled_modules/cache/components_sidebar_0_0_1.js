import { registerDecorators as _registerDecorators, LightningElement, registerComponent as _registerComponent } from "lwc";
import _tmpl from "./sidebar.html";
class Post extends LightningElement {
  constructor(...args) {
    super(...args);
    this.title = void 0;
    this.name = void 0;
    this.socialLinks = void 0;
    this.profileImage = void 0;
  }
  /*LWC compiler v7.2.1*/
}
_registerDecorators(Post, {
  publicProps: {
    title: {
      config: 0
    },
    name: {
      config: 0
    },
    socialLinks: {
      config: 0
    },
    profileImage: {
      config: 0
    }
  }
});
const __lwc_component_class_internal = _registerComponent(Post, {
  tmpl: _tmpl,
  sel: "components-sidebar",
  apiVersion: 62
});
export default __lwc_component_class_internal;