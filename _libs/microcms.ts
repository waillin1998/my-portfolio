import { createClient } from "microcms-js-sdk";

const domain = process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN!;
const apiKey = process.env.NEXT_PUBLIC_MICROCMS_API_KEY!;

export const client = createClient({
  serviceDomain: domain,
  apiKey: apiKey,
});
