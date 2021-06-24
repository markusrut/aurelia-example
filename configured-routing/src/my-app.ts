import { IRouter, routes } from "aurelia-direct-router";

@routes([
  {
    id: "day",
    path: ["", "/:channel/:date?", "/:channel/day/:date?"],
    instructions: [
      { component: "page-menu", viewport: "menu" },
      { component: "page-day", viewport: "main" },
    ],
    title: "Day",
  },
  {
    id: "batch",
    path: "/:channel/batch/:batchId?",
    instructions: [
      { component: "page-menu", viewport: "menu" },
      { component: "page-batch", viewport: "main" },
    ],
    title: "Batch",
  },
])
export class MyApp {
  constructor(@IRouter private readonly router: IRouter) {}

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
