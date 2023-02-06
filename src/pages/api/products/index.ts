import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "@/utils/utils";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const productResponse = await client.get(
    "http://localhost/wordpress/wp-json/wc/v3/products",
    {
      params: {
        ...req.query,
      },
    }
  );
  const data = await productResponse.data;
  res.status(200).json(data);
}
