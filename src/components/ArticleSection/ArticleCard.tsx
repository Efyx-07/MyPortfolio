import './ArticleCard.scss';
import { Article } from '@/types/article.interface';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from '../Reusables/Button';
import { useState } from 'react';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const navToArticlePage = (): void => {
    setIsLoading(true);
    router.push(`/article/${article.id}`);
  };

  return (
    <>
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
      <div className="article-description">
        <div className="text-container">
          <p className="title">{article.title}</p>
          <div
            className="body-snippet"
            dangerouslySetInnerHTML={{
              __html: article.body.slice(0, 100) + ' ...',
            }}
          />
        </div>
        {isLoading ? (
          <Button name="Chargement..." className="loading-button" />
        ) : (
          <Button name="Lire la suite" onClick={navToArticlePage} />
        )}
      </div>
    </>
  );
}
