import Aurelia from "aurelia";
import { RouterConfiguration } from "aurelia-direct-router";
import * as components from "./components/registry";
import { MyApp } from "./my-app";

Aurelia.register(
  RouterConfiguration.customize({ useUrlFragmentHash: true }),
  components
)
  .app(MyApp)
  .start();
