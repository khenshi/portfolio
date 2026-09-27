import type { Project } from "./types";

import { adduQpiSimulator } from "./addu-qpi-simulator";
import { dates } from "./dates";
import { munimuniResortManagementSystem } from "./munimuni-resort-management-system";
import { truthLayer } from "./truthlayer";
import { pointOfSaleSystem } from "./point-of-sale-system";
import { conceptStoreManagementSystem } from "./concept-store-management-system";

export const projects: Project[] = [
  adduQpiSimulator,
  dates,
  munimuniResortManagementSystem,
  truthLayer,
  pointOfSaleSystem,
  conceptStoreManagementSystem,
];
