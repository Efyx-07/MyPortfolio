import { Article } from '@/types/article.interface';
import { fetchArticleById } from '@/services/blogArticles.service';
import ArticleComponent from '@/components/ArticlePage/ArticleComponent';
import NotFound from '@/components/Reusables/NotFound';
import '../../../assets/sass/pages-common-style.scss';

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
            <ArticleComponent selectedArticle={selectedArticle} />
          </div>
        </div>
      ) : (
        <NotFound mention="Aucun article trouvé..." />
      )}
    </>
  );
}
