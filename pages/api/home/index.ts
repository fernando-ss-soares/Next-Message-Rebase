// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  list: Array<object>;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const dataProducts = {
    list: [
      {
        id: 1,
        title: "Journey",
        description:
          "Paragraph of text beneath the heading to explain the heading",
      },
      {
        id: 2,
        title: "Documents",
        description:
          "Paragraph of text beneath the heading to explain the heading",
      },
      {
        id: 3,
        title: "Reports",
        description:
          "Paragraph of text beneath the heading to explain the heading",
      },
      {
        id: 4,
        title: "Settings",
        description:
          "Paragraph of text beneath the heading to explain the heading",
      },
    ],
  };

  res.status(200).json(dataProducts);
}
