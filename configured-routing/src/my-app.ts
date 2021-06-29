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

  loadDay(date?: string) {
    date ? this.router.load(`p3/day/${date}`) : this.router.load("p3/day");
  }

  loadBatch(batchId?: number) {
    batchId
      ? this.router.load(`p3/batch/${batchId}`)
      : this.router.load("p3/batch");
  }
}
