import React from "react";
import BaseLayout from "../components/BaseLayout/BaseLayout";
import CallConnectLinks from "../components/BaseLayout/CallConnectLinks";

export default function CallConnect() {
  return <BaseLayout links={<CallConnectLinks />} />;
}
