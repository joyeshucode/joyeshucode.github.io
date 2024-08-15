import { LightningElement } from "lwc";
import markdownIt from 'markdown-it';
import { parse } from 'yaml';
const md = new markdownIt();

export default class commonUtil extends LightningElement {
    getMarkdownContentWithFrontMatter = async (path) => {
        try {
            const response = await fetchResourceFromUrl(path);
            const textContent = await response.text();
            
            // Extract front matter and content
            const frontMatterEnd = textContent.indexOf('---', 3); // End of front matter
            const yaml = textContent.substring(3, frontMatterEnd).trim(); // Extract YAML
            const content = textContent.substring(frontMatterEnd + 3).trim(); // Extract Markdown

            const metadata = parse(yaml); // Parse YAML to JSON
            const htmlContent = md.render(content); // Render Markdown to HTML
            return { success: true, data: { metadata , content: htmlContent }};
        } catch (error) {
            console.error('Error loading blog post:', error);
            return { success: false, error: error.message};
        }
    };  

    getAboutYAMLData = async (path) => {
        try {
            const response = fetchResourceFromUrl(`/public/about/about.YAML`);
            this.portfolioData = parse(await response.text()); // Parse YAML to JSON
            return { success: true, data: { portfolioData }};
        } catch (error) {
            console.error('Error loading blog post:', error);
            return { success: false, error: error.message};
        }
        
    };

    fetchResourceFromUrl = async (path) =>{
        const response = await fetch(path);
        if (!response.ok) {
            throw new ResourceNotFoundError(`The requested resource doesn't exists.`);
        }
    };
}
export class ResourceNotFoundError extends Error {}



