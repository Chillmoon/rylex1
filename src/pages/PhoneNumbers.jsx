import React from "react";
import BaseLayout from "../components/BaseLayout/BaseLayout";
import CallConnectLinks from "../components/BaseLayout/CallConnectLinks";
import PhoneNumberBase from "../components/PhoneNumberBase/PhoneNumberBase";

export default function PhoneNumbers() {
  return (
    <BaseLayout
      links={<CallConnectLinks />}
      baseComponent={<PhoneNumberBase />}
    />
  );
}
