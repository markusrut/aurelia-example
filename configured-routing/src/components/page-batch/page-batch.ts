export class PageBatch {
  channel: string;
  batchId: string;

  load(params) {
    this.channel = params.channel;
    this.batchId = params.batchId;
  }
}
