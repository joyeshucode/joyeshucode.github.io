import { registerDecorators as _registerDecorators, LightningElement, registerComponent as _registerComponent } from "lwc";
import _tmpl from "./commonUtil.html";
import markdownIt from 'markdown-it';
import { parse } from 'yaml';
const md = new markdownIt();
class commonUtil extends LightningElement {
  constructor(...args) {
    super(...args);
    this.getMarkdownContentWithFrontMatter = async path => {
      try {
        const response = await fetchResourceFromUrl(path);
        const textContent = await response.text();

        // Extract front matter and content
        const frontMatterEnd = textContent.indexOf('---', 3); // End of front matter
        const yaml = textContent.substring(3, frontMatterEnd).trim(); // Extract YAML
        const content = textContent.substring(frontMatterEnd + 3).trim(); // Extract Markdown

        const metadata = parse(yaml); // Parse YAML to JSON
        const htmlContent = md.render(content); // Render Markdown to HTML
        return {
          success: true,
          data: {
            metadata,
            content: htmlContent
          }
        };
      } catch (error) {
        console.error('Error loading blog post:', error);
        return {
          success: false,
          error: error.message
        };
      }
    };
    this.getAboutYAMLData = async path => {
      try {
        const response = fetchResourceFromUrl(`/public/about/about.YAML`);
        this.portfolioData = parse(await response.text()); // Parse YAML to JSON
        return {
          success: true,
          data: {
            portfolioData
          }
        };
      } catch (error) {
        console.error('Error loading blog post:', error);
        return {
          success: false,
          error: error.message
        };
      }
    };
    this.fetchResourceFromUrl = async path => {
      const response = await fetch(path);
      if (!response.ok) {
        throw new ResourceNotFoundError(`The requested resource doesn't exists.`);
      }
    };
  }
  /*LWC compiler v7.2.1*/
}
_registerDecorators(commonUtil, {
  fields: ["getMarkdownContentWithFrontMatter", "getAboutYAMLData", "fetchResourceFromUrl"]
});
const __lwc_component_class_internal = _registerComponent(commonUtil, {
  tmpl: _tmpl,
  sel: "utils-common-util",
  apiVersion: 62
});
export default __lwc_component_class_internal;
export class ResourceNotFoundError extends Error {
  /*LWC compiler v7.2.1*/
}