import { GoogleApiWrapper } from "google-maps-react";
// import { MAPS_KEY } from "../../keys";
import HomeContainer from "./HomeContainer";
export default GoogleApiWrapper({
  apiKey: process.env.MAPS_KEY
})(HomeContainer);
