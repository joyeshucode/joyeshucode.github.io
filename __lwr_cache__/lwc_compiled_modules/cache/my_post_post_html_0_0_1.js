import _implicitStylesheets from "./post.css";
import _implicitScopedStylesheets from "./post.scoped.css?scoped=true";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<h1${3}>${"t1"}</h1>`;
const $fragment2 = parseFragment`<h1${3}>${"t1"}</h1>`;
const stc0 = {
  classMap: {
    "post-content": true,
    "markdown-body": true
  },
  ref: "postContent",
  context: {
    lwc: {
      dom: "manual"
    }
  },
  key: 2
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, sp: api_static_part, st: api_static_fragment, h: api_element} = $api;
  return [$cmp.post ? api_static_fragment($fragment1, 1, [api_static_part(1, null, api_dynamic_text($cmp.post.metadata.title))]) : null, $cmp.post ? api_element("div", stc0) : null, !$cmp.post ? api_static_fragment($fragment2, 4, [api_static_part(1, null, " " + api_dynamic_text($cmp.errorMessage) + " ")]) : null];
  /*LWC compiler v7.2.1*/
}
export default registerTemplate(tmpl);
tmpl.hasRefs = true;
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-eesosau8u2";
tmpl.legacyStylesheetToken = "my-post_post";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
