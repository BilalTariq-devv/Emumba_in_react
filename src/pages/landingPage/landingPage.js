import React from "react";
import {
  NavBar,
  WebinarBar,
  WatchWebinar,
  AgilityBanner,
  Services,
} from "../../components";

function LandingPage() {
  return (
    <main>
      <WatchWebinar />
      <NavBar />
      <AgilityBanner />
      <WebinarBar />
      <Services />
    </main>
  );
}

export default LandingPage;
