import { Article } from '@/types/article.interface';

export default function useReverseArticles(articles: readonly Article[]) {
  return [...articles].reverse();
}
