import _implicitStylesheets from "./sidebar.css";
import _implicitScopedStylesheets from "./sidebar.scoped.css?scoped=true";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="profile-container${0}"${2}><img${"a1:src"} alt="Profile Image" class="profile-image${0}"${2}></div>`;
const $fragment2 = parseFragment`<div class="slds-text-heading_large about_section_title${0}"${2}>${"t1"}</div>`;
const $fragment3 = parseFragment`<div class="slds-text-heading_medium about_section_subtitle${0}"${2}>${"t1"}</div>`;
const $fragment4 = parseFragment`<div class="slds-text-align_center${0}"${2}><ul class="slds-list_horizontal slds-has-dividers_left slds-has-block-links_space${0}"${2}><li class="slds-item${0}"${2}><a href="/posts" title="Posts"${3}>Posts</a></li><li class="slds-item${0}"${2}><a href="/" title="About"${3}>About</a></li></ul></div>`;
const $fragment5 = parseFragment`<li class="slds-item${0}"${2}><a${"a1:href"}${3}><img class="slds-icon slds-icon_large${0}"${"a2:title"}${"a2:alt"} aria-hidden="true"${"a2:src"}${2}></a></li>`;
const $fragment6 = parseFragment`<div class="footer-container${0}"${2}>Built with <span class="heart${0}"${2}>♥</span> using<span${3}><a href="https://developer.salesforce.com/docs/platform/lwr/overview" target="_blank"${3}> LWR </a>,<a href="https://lwc.dev/" target="_blank"${3}> LWC OSS </a>, and <a href="https://www.lightningdesignsystem.com/" target="_blank"${3}> SLDS </a></span></div>`;
const $fragment7 = parseFragment`<span${3}>${"t1"}</span>`;
const stc0 = {
  classMap: {
    "slds-box": true,
    "slds-text-align_center": true,
    "about_section": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "slds-text-align_center": true
  },
  key: 9
};
const stc2 = {
  classMap: {
    "slds-list_horizontal": true,
    "slds-has-dividers_left": true,
    "slds-has-block-links_space": true
  },
  key: 10
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {sp: api_static_part, st: api_static_fragment, d: api_dynamic_text, k: api_key, i: api_iterator, h: api_element} = $api;
  return [api_element("div", stc0, [api_static_fragment($fragment1, 2, [api_static_part(1, {
    attrs: {
      "src": $cmp.profileImage
    }
  }, null)]), api_static_fragment($fragment2, 4, [api_static_part(1, null, api_dynamic_text($cmp.name))]), api_static_fragment($fragment3, 6, [api_static_part(1, null, api_dynamic_text($cmp.title))]), api_static_fragment($fragment4, 8), api_element("div", stc1, [api_element("ul", stc2, api_iterator($cmp.socialLinks, function (link) {
    return api_static_fragment($fragment5, api_key(12, link.title), [api_static_part(1, {
      attrs: {
        "href": link.url
      }
    }, null), api_static_part(2, {
      attrs: {
        "title": link.title,
        "alt": link.title,
        "src": link.imgUrl
      }
    }, null)]);
  }))]), api_static_fragment($fragment6, 14), api_static_fragment($fragment7, 16, [api_static_part(1, null, "© " + api_dynamic_text($cmp.name) + " 2024")])])];
  /*LWC compiler v7.2.1*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-7r9u6ga4o95";
tmpl.legacyStylesheetToken = "components-sidebar_sidebar";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
