// DEPRECATED

import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.uphold.com/v0/",
});

// https://api.uphold.com/v0/assets?q=type:fiat
export const getFiatAssets = () =>
  api.get("/assets/");
