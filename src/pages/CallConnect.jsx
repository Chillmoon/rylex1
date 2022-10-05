import React from "react";
import BaseLayout from "../components/BaseLayout/BaseLayout";
import CallConnectLinks from "../components/BaseLayout/CallConnectLinks";
import CallConnectBase from "../components/CallConnectBase/CallConnectBase";

export default function CallConnect() {
  return (
    <BaseLayout
      links={<CallConnectLinks />}
      baseComponent={<CallConnectBase />}
    />
  );
}
