import { client, ProductApiResponse } from "@/utils/utils";
import Image from "next/image";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import React from "react";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { htmlRegex } from "@/utils/regex";
import { useRouter } from "next/router";
import { useEffect } from "react";
export const ProductPage = ({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  useEffect(() => {
    router.query.slug;

    router.push(`/produkty/produkt/${product!.slug}/${product!.id}`);
  }, []);

  return (
    <div>
      <div className="flex ">
        <div className="relative w-96 h-96 ">
          <Image
            src={product!.images[0].src}
            alt={product!.images[0].alt}
            fill
            className="object-contain"
          />
        </div>

        <article className="prose lg:prose-xl">
          <MDXRemote {...product!.serializedDescription}> </MDXRemote>
        </article>
      </div>
    </div>
  );
};
export default ProductPage;

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ productId: string }>) => {
  if (!params?.productId) {
    return {
      props: {},
      notFound: true,
    };
  }
  const res = await client.get(
    `${process.env.URL}/wp-json/wc/v3/products/${params.productId}`
  );
  const product: ProductApiResponse | null = await res.data;
  if (!product) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      product: {
        ...product,
        serializedDescription: await serialize(
          product.description.replaceAll(htmlRegex, "  ")
        ),
      },
    },
  };
};
export const getStaticPaths = async () => {
  return { paths: [], fallback: "blocking" };
};
