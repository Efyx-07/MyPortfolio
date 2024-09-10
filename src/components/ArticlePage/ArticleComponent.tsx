import { Article } from '@/types/article.interface';
import Image from 'next/image';
import formatDate from '@/utils/formatDate';
import './ArticleComponent.scss';
import '../../assets/sass/sections-common-style.scss';

interface ArticleComponentProps {
  selectedArticle: Article;
}

export default function ArticleComponent({
  selectedArticle,
}: ArticleComponentProps) {
  const creationDate: Article['creationDate'] = selectedArticle.creationDate;

  return (
    <section className="article-component-section">
      <div className="content">
        <div className="article-component">
          <div className="image-container">
            <Image
              className="img"
              src={selectedArticle.imageUrl}
              width={1000}
              height={1000}
              alt={selectedArticle.title}
              priority
            />
          </div>
          <div className="text-container">
            <div className="article-head">
              <p>{formatDate(creationDate as Date)}</p>
            </div>
            <h1 className="article-title">{selectedArticle.title}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: selectedArticle.body,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
