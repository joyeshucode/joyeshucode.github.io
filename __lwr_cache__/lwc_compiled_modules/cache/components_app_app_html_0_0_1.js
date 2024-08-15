import _implicitStylesheets from "./app.css";
import _implicitScopedStylesheets from "./app.scoped.css?scoped=true";
import _componentsSidebar from "components/sidebar";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="slds-col slds-size_1-of-1 slds-large-size_9-of-12${0}"${2}><div${3}></div></div>`;
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
function tmpl($api, $cmp, $slotset, $ctx) {
  const {c: api_custom_element, h: api_element, st: api_static_fragment} = $api;
  return [api_element("div", stc0, [api_element("div", stc1, [api_element("div", stc2, [api_custom_element("components-sidebar", _componentsSidebar, {
    props: {
      "title": $cmp.portfolioData.title,
      "name": $cmp.portfolioData.name,
      "socialLinks": $cmp.portfolioData.social_links,
      "profileImage": $cmp.portfolioData.profile_image
    },
    key: 3
  })])]), api_static_fragment($fragment1, 5)])];
  /*LWC compiler v7.2.1*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-5ojt1g26uic";
tmpl.legacyStylesheetToken = "components-app_app";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
