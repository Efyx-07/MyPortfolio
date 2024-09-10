'use client';

import { motion } from 'framer-motion';
import { cardVariants } from '@/framer-motion/cardVariants';
import { Article } from '@/types/article.interface';
import ArticleCard from '@/components/ArticleSection/ArticleCard';
import { useQuery } from '@tanstack/react-query';
import { fetchArticles } from '@/services';
import useReverseArticles from '@/hooks/useReverseArticles';
import '../../assets/sass/pages-common-style.scss';
import '../../assets/sass/sections-common-style.scss';
import './blog-page.scss';

export default function BlogPage() {
  const { data: articles = [] } = useQuery<Article[]>({
    queryKey: ['articles'],
    queryFn: fetchArticles,
  });

  const reversedArticles: Article[] = useReverseArticles(articles);

  return (
    <div className="page">
      <div className="content">
        <section>
          <div className="content">
            <div className="article-cards-container">
              {reversedArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  className="article-card"
                >
                  <ArticleCard key={article.id} article={article} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
