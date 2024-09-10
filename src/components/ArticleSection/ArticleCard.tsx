import { Article } from '@/types/article.interface';
import Image from 'next/image';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="article-card">
      <div className="image-container">
        <Image
          className="img"
          src={article.imageUrl}
          width={1000}
          height={1000}
          alt={article.title}
          priority
        />
      </div>
      <h1>{article.title}</h1>
    </div>
  );
}
