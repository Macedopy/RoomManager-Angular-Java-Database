export class Room {
    id: number;
    name: string;
    date: string;
    startHour: string;
    endHour: string;
    active: boolean;

    constructor() {
    this.id = 0;
    this.name = '';
    this.date = '';
    this.startHour = '';
    this.endHour = '';
    this.active = false;
    }
}