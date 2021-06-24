export class PageMenu {
  channel: string;
  date: string;

  load(params) {
    this.channel = params.channel;
    this.date = params.date;
  }
}
