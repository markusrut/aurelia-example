export class PageDay {
  channel: string;
  date: string;

  load(params) {
    this.channel = params.channel;
    this.date = params.date;
  }
}
