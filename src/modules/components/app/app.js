import { LightningElement, track } from 'lwc';
const aboutDataUrl = '/public/about/about.YAML';
import commonUtil from 'utils/commonUtil';

export default class app extends LightningElement {
    showPostsSection = false;
    showAboutSection = false;
    postTitle = undefined;
    portfolioData = undefined; 

    connectedCallback() {
        this.portfolioData = commonUtil.getAboutYAMLData(this.aboutDataUrl);
    }

    sanitizeUrl(url) {
        return url ? url.replace(/[^-A-Za-z0-9+&@#/%?=~_|!:,.;()]/g, ''): '';
    }
    
   
}
