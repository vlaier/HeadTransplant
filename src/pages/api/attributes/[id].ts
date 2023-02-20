import type { NextApiRequest, NextApiResponse } from 'next';
import { client, url } from '@/utils/utils';

export interface AttributeType {
  id: number;
  terms?: AttributeType[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const attributeResponse = await client.get(
    `${url}/wp-json/wc/v3/products/attributes/${id}`
  );
  const attributeData = await attributeResponse.data;
  const filtersResponse = await client.get(
    `${url}/wp-json/wc/v3/products/attributes/${id}/terms`
  );
  const filtersData = await filtersResponse.data;
  const attributeWithTermsData: AttributeType = {
    ...attributeData,
    terms: filtersData,
  };

  res.status(200).json(attributeWithTermsData);
}
