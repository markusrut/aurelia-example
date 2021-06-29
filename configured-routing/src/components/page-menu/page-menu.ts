import { IRouter } from "aurelia-direct-router";

export class PageMenu {
  channel: string;
  date: string;

  constructor(@IRouter private readonly router: IRouter) {}

  load(params) {
    this.channel = params.channel;
    this.date = params.date;
  }

  loadDay() {
    this.router.load("p3-din-gata/day/2021-06-28");
  }

  loadBatch() {
    this.router.load("p3-din-gata/batch");
  }

  loadBatchWithId() {
    this.router.load("p3-din-gata/batch/12");
  }
}
