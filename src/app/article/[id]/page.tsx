import { Article } from '@/types/article.interface';
import { fetchArticleById } from '@/services/blogArticles.service';

interface ArticlePageProps {
  params: { id: string };
}
export default async function ArticlePage({ params }: ArticlePageProps) {
  const selectedArticle: Article | null = await fetchArticleById(
    Number(params.id),
  );

  return (
    <>
      {selectedArticle ? (
        <div className="page">
          <div className="content">
            <h1>{selectedArticle.title}</h1>
          </div>
        </div>
      ) : (
        <p>Article not found</p>
      )}
    </>
  );
}
