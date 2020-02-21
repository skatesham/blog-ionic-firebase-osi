import * as uuid from 'uuid';

export class UuidGenerator {

    public static get(): string {
        const myId = uuid.v4();
        return myId;
    }

}