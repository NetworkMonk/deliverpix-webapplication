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

import {
  faFacebook,
  faInstagram,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function IconLibrary() {
  library.add(
    fab,
    faCheckSquare,
    faCoffee,
    faInfo,
    faInfoCircle,
    faToggleOff,
    faToggleOn,
    faSquare,
    faFacebook,
    faInstagram,
    faTwitter,
    faGithub
  );
}

export default IconLibrary;
