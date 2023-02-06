import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "@/utils/utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const productResponse = await client.get(
    "http://localhost/wordpress/wp-json/wc/v3/products/attributes",
    {
      params: {
        ...req.query,
      },
    }
  );
  const data = await productResponse.data;
  res.status(200).json(data);
}
