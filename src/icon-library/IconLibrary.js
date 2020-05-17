import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faInfo,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

function IconLibrary() {
  library.add(fab, faCheckSquare, faCoffee, faInfo, faInfoCircle);
}

export default IconLibrary;
