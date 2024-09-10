import ArticleLayout from '@/app/article/[id]/layout';
import { Article } from '@/types/article.interface';
import Image from 'next/image';
import Button from '../Reusables/Button';

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
      <Button name="Lire l'article" />
    </div>
  );
}
