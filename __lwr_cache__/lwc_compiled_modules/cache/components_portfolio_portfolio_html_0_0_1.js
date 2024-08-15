import _implicitStylesheets from "./portfolio.css";
import _implicitScopedStylesheets from "./portfolio.scoped.css?scoped=true";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="slds-box slds-text-align_center${0}"${2}><ul class="slds-timeline${0}"${2}><li${3}><div class="slds-timeline__item_expandable slds-timeline__item_task slds-is-open${0}"${2}><div class="slds-media${0}"${2}><div class="slds-media__figure${0}"${2}><div class="slds-icon_container slds-timeline__icon ${0}" title="2/2024"${2}></div></div><div class="slds-media__body${0}"${2}><div class="slds-grid slds-grid_align-spread slds-timeline__trigger${0}"${2}><div class="slds-grid slds-grid_vertical-align-center slds-truncate_container_75 slds-no-space${0}"${2}><img class="slds-icon slds-icon_medium${0}" aria-hidden="true" src="$assetsDir/img/ACN.png"${2}>&lt;/img&gt;<h3 class="slds-truncate${0}" title="Business Architecture Manage"${2}><strong${3}>Business Architecture Manage</strong></h3></div><div class="slds-timeline__actions slds-timeline__actions_inline${0}"${2}><p class="slds-timeline__date${0}"${2}>2/2024</p></div></div><p class="slds-m-horizontal_xx-small${0}"${2}>summary</p></div></div></div></li></ul></div>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment} = $api;
  return [api_static_fragment($fragment1, 1)];
  /*LWC compiler v7.2.1*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-7avk44mjm9m";
tmpl.legacyStylesheetToken = "components-portfolio_portfolio";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
