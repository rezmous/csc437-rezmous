import { Collector, Shoe} from "server/models";

export interface Model {
  shoe?: Shoe;
  collector?: Collector;
}

export const init: Model = {};