import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import {
  faCheckSquare,
  faCoffee,
  faInfo,
  faInfoCircle,
  faToggleOff,
  faToggleOn,
} from "@fortawesome/free-solid-svg-icons";

import { faSquare } from "@fortawesome/free-regular-svg-icons";

function IconLibrary() {
  library.add(
    fab,
    faCheckSquare,
    faCoffee,
    faInfo,
    faInfoCircle,
    faToggleOff,
    faToggleOn,
    faSquare
  );
}

export default IconLibrary;
