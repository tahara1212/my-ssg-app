
import { client } from "@/lib/client";

/**
 * getArticles関数のProps
 */
export type GetArticlesProps = {
  /** 1ページあたりの取得制限 */
  limit: number;

  /** 取得するフィールド */
  fields?: string[] | string;
};

export const getArticles = async ({
  limit,
  fields,
}: GetArticlesProps): Promise<any> => {
  return client.get({
    endpoint: "articles",
    queries: { fields, limit, orders: "-publishedAt" },
  });
};
