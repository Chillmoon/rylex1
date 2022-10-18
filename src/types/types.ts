import React, { MouseEventHandler } from "react";

export type PropsButton = {
  onClick?: MouseEventHandler;
  text?: string;
  icon?: React.FC;
  size?: "small" | "medium" | "large";
  type?: "submit" | "reset" | "button";
  color?: string;
  disabled?: boolean;
};

export type PropsInput = {
  placeholder?: string;
  icon?: React.FC;
  name: string;
  error?: string | undefined;
  touched?: boolean | undefined;
};

export type PropsLogin = {
  successCallback: () => void;
  userData: {
    username: string;
    email?: string;
    password: string;
  };
};

export type PropsAddTable = {
  username: string;
  type: string;
  email: string;
  address: {
    street: string;
    zipCode: string;
    city: string;
    country: string;
  };
  contactInfo: {
    name: string;
    phoneNumber: string;
    emailContact: string;
  };
};

export type PropsTable = {
  username: string;
  type: string;
  email: string;
  street: string;
  city: string;
  zipCode: string;
  country: string;
  name: string;
  phoneNumber: string;
  emailContact: string;
  id: string;
  userData: {
    street: string;
    city: string;
    zipCode: string;
    country: string;
    name: string;
    phoneNumber: string;
    emailContact: string;
    username: string;
    type: string;
    email: string;
  };
  tenantData: {
    street: string;
    city: string;
    zipCode: string;
    country: string;
    name: string;
    phoneNumber: string;
    emailContact: string;
    username: string;
    type: string;
    email: string;
  };
};
