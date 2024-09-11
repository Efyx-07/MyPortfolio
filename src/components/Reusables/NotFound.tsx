'use client';

import Button from './Button';
import { useRouter } from 'next/navigation';
import './NotFound.scss';

interface NotFoundProps {
  mention: string;
}

export default function NotFound({ mention }: NotFoundProps) {
  const router = useRouter();

  return (
    <div className="not-found">
      <p className="mention">{mention}</p>
      <Button
        className="back-button"
        name="Retour"
        onClick={() => router.push('/')}
      />
    </div>
  );
}
