import _implicitStylesheets from "./blogPostsList.css";
import _implicitScopedStylesheets from "./blogPostsList.scoped.css?scoped=true";
import {freezeTemplate, parseFragment, registerTemplate, sanitizeAttribute} from "lwc";
const $fragment1 = parseFragment`<h1 class="slds-text-heading_large${0}"${2}>Blog Posts</h1>`;
const $fragment2 = parseFragment`<li class="slds-item${0}"${2}><article class="slds-tile slds-tile_board slds-media slds-m-bottom_medium slds-grid${0}"${2}><div class="slds-media__figure${0}"${2}><span class="slds-avatar slds-avatar_large${0}"${2}><img src="/public/assets/images/ACN.png"${"a4:alt"} class="slds-tile__img${0}"${2}></span></div><div class="slds-tile__body${0}"${2}><h2 class="slds-tile__title slds-text-heading_medium${0}"${2}><a${"a7:href"} class="slds-text-link_reset${0}"${2}>${"t8"}</a></h2><div class="slds-tile__detail post-title-section${0}"${2}><span class="slds-badge${0}"${2}><span class="slds-badge__icon slds-badge__icon_left${0}"${2}><span class="slds-icon_container slds-icon-utility-event slds-current-color${0}"${"a12:title"}${2}><svg class="slds-icon slds-icon_xx-small${0}" aria-hidden="true"${2}><use${"a14:xlink:href"}${3}/></svg></span></span>${"t15"}</span></div></div></article></li>`;
const $fragment3 = parseFragment`<p${3}>No posts available.</p>`;
const stc0 = {
  classMap: {
    "slds-box": true,
    "slds-theme_default": true,
    "posts": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "slds-list": true
  },
  key: 3
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, k: api_key, d: api_dynamic_text, sp: api_static_part, i: api_iterator, h: api_element} = $api;
  return [api_element("div", stc0, [api_static_fragment($fragment1, 2), $cmp.posts ? api_element("ul", stc1, api_iterator($cmp.posts, function (post) {
    return api_static_fragment($fragment2, api_key(5, post.id), [api_static_part(4, {
      attrs: {
        "alt": post.title
      }
    }, null), api_static_part(7, {
      attrs: {
        "href": post.link
      }
    }, null), api_static_part(8, null, api_dynamic_text(post.title)), api_static_part(12, {
      attrs: {
        "title": post.date
      }
    }, null), api_static_part(14, {
      attrs: {
        "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/public/slds/assets/icons/utility-sprite/svg/symbols.svg#event")
      }
    }, null), api_static_part(15, null, api_dynamic_text(post.date))]);
  })) : null, !$cmp.posts ? api_static_fragment($fragment3, 7) : null])];
  /*LWC compiler v7.2.1*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-2kt09hrk4s5";
tmpl.legacyStylesheetToken = "components-blogPostsList_blogPostsList";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
