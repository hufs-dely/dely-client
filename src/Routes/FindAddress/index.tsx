import { GoogleApiWrapper } from "google-maps-react";
// import { MAPS_KEY } from "../../keys";
import FindAddressContainer from "./FindAddressContainer";
export default GoogleApiWrapper({
  apiKey: process.env.MAPS_KEY
})(FindAddressContainer);
