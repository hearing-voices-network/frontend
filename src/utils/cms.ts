import get from "lodash/get";

import cmsText from "./cms.json";

export const cms = (path: string) => get(cmsText, path, null);
