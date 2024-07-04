'use client'

import Button from '../Reusables/Button';
import { useRouter } from 'next/navigation';
import './ProjectNotFound.scss';

export default function ProjectNotFound() {

    const router = useRouter();

    return (
        <div className="project-not-found">
            <p className='mention'>Aucun projet trouvé...</p>
            <Button className='back-button' name="Retour" onClick={() => router.push('/')} />
        </div>
    )
}