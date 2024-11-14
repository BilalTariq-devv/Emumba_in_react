import React from "react";
import {
  NavBar,
  WebinarBar,
  WatchWebinar,
  Header,
  Services,
} from "../../components";

function LandingPage() {
  return (
    <main>
      <WatchWebinar />
      <NavBar />
      <Header />
      <WebinarBar />
      <Services />
    </main>
  );
}

export default LandingPage;
