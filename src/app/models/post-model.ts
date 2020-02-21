import { UuidGenerator } from '../core/tools/generate-uuid';
import { PostDTO } from './post-interface';
import { DatePipe } from '@angular/common';

export class Post {

    private id: string;
    private now: string;
    title: string;
    content: string;

    constructor(title: string = "", content: string = "") {
        this.id = UuidGenerator.get();
        this.title = title;
        this.content = content;
        this.now = this.generateDateNow();

    }

    private generateDateNow(): string {
        let pipe : DatePipe = new DatePipe('en-US'); // Use your own locale
        let now = Date.now();
        let result = pipe.transform(now, 'short');
        return result;
    }

    public setTitle(title: string) {
        this.title = title;
    }

    public setContent(content: string) {
        this.content = content;
    }

    public getId(): string {
        return this.id;
    }

    public getDTO(): PostDTO {
        let dto: PostDTO = {
            id: this.id,
            now: this.now,
            title: this.title,
            content: this.content
        }
        return dto;
    }
}