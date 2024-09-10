import { Article } from '@/types/article.interface';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

// Récupère tous les articles, retourne un tableau d'article en réponse
// ===========================================================================================
export async function fetchArticles(): Promise<Article[]> {
  try {
    const response = await fetch(`${backendUrl}/articles`);
    if (!response.ok) {
      throw new Error('Error while fetching articles');
    }
    const data: { articles: Article[] } = await response.json();
    const articles: Article[] = data.articles;
    return articles;
  } catch (error) {
    throw new Error('Error while fetching articles: ' + error);
  }
}

// Récupère un article par son ID, retourne l'article en réponse
// ===========================================================================================
export async function fetchArticleById(id: Article['id']): Promise<Article> {
  try {
    const response = await fetch(`${backendUrl}/articles/${id}`);
    if (!response.ok) {
      throw new Error(`Error while fetching article ${id}`);
    }
    const data: { article: Article } = await response.json();
    const article: Article = data.article;
    return article;
  } catch (error) {
    throw new Error('Error while fetching article: ' + error);
  }
}
