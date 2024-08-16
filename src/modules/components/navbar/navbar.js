import { LightningElement, api } from "lwc";
export default class Post extends LightningElement {
    @api title;
    @api name;
    @api socialLinks;
    @api profileImage;
}