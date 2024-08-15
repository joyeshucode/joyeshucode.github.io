import _implicitStylesheets from "./app.css";
import _implicitScopedStylesheets from "./app.scoped.css?scoped=true";
import _mySidebar from "my/sidebar";
import _myBlogPostsList from "my/blogPostsList";
import _myPost from "my/post";
import _myPortfolio from "my/portfolio";
import {freezeTemplate, registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "slds-grid": true,
    "slds-wrap": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "slds-col": true,
    "slds-size_1-of-1": true,
    "slds-large-size_3-of-12": true
  },
  key: 1
};
const stc2 = {
  classMap: {
    "profile-section": true
  },
  key: 2
};
const stc3 = {
  classMap: {
    "slds-col": true,
    "slds-size_1-of-1": true,
    "slds-large-size_9-of-12": true
  },
  key: 4
};
const stc4 = {
  key: 5
};
const stc5 = {
  key: 6
};
const stc6 = {
  key: 8
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {c: api_custom_element, h: api_element} = $api;
  return [api_element("div", stc0, [api_element("div", stc1, [api_element("div", stc2, [api_custom_element("my-sidebar", _mySidebar, {
    props: {
      "title": $cmp.portfolioData.title,
      "name": $cmp.portfolioData.name,
      "socialLinks": $cmp.portfolioData.social_links,
      "profileImage": $cmp.portfolioData.profile_image
    },
    key: 3
  })])]), api_element("div", stc3, [api_element("div", stc4, [$cmp.showPostsSection ? api_custom_element("my-blog-posts-list", _myBlogPostsList, stc5) : null, $cmp.postTitle ? api_custom_element("my-post", _myPost, {
    props: {
      "post": $cmp.postTitle
    },
    key: 7
  }) : null, !$cmp.showPostsSection ? api_custom_element("my-portfolio", _myPortfolio, stc6) : null])])])];
  /*LWC compiler v7.2.1*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-37ioljf4m9i";
tmpl.legacyStylesheetToken = "my-app_app";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
