import { ICartState } from "..";

const base: ICartState = {
  items: [
    {
      id: "123",
      name: "Uvie okrycie kąpielowe królik 100x100 cm szare",
      slug: "uvie-okrycie-kapielowe-krolik-100x100-cm-szare",
      image: {
        id: "1",
        sourceUrl:
          "http://localhost:3000/_next/image?url=http%3A%2F%2Flocalhost%2Fwordpress%2Fwp-content%2Fuploads%2F2023%2F01%2Fokrycia-kapielowe-szary-80x80-1.jpg&w=1920&q=75",
        altText: "Zdjęcie okrycia kąpielowego Uvie",
      },
      count: 1,
      price: 21.37,
    },
    {
      id: "124",
      name: "Uvie okrycie kąpielowe królik 100x100 cm szare",
      slug: "uvie-okrycie-kapielowe-krolik-100x100-cm-szare",
      image: {
        id: "2",
        sourceUrl:
          "http://localhost:3000/_next/image?url=http%3A%2F%2Flocalhost%2Fwordpress%2Fwp-content%2Fuploads%2F2023%2F01%2Fokrycia-kapielowe-szary-80x80-1.jpg&w=1920&q=75",
        altText: "Zdjęcie okrycia kąpielowego Uvie",
      },
      count: 2,
      price: 21.37,
    },
    {
      id: "125",
      name: "Uvie okrycie kąpielowe królik 100x100 cm szare",
      slug: "uvie-okrycie-kapielowe-krolik-100x100-cm-szare",
      image: {
        id: "3",
        sourceUrl:
          "http://localhost:3000/_next/image?url=http%3A%2F%2Flocalhost%2Fwordpress%2Fwp-content%2Fuploads%2F2023%2F01%2Fokrycia-kapielowe-szary-80x80-1.jpg&w=1920&q=75",
        altText: "Zdjęcie okrycia kąpielowego Uvie",
      },
      count: 21,
      price: 21.37,
    },
  ],
};
export const mockCartItemsProps = {
  base,
};
