import Aurelia, { StyleConfiguration } from 'aurelia';
import { MyApp } from './my-app';
import * as components from "./components/registry";

Aurelia
  .register(components)
  .app(MyApp)
  .start();
