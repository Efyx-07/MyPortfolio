import { useRouter } from "next/navigation";
import './SiteName.scss';

export default function SiteName() {

    const router = useRouter();

    return(
        <p className="site-name" onClick={() => router.push('/')}><span>FX</span>Savary.dev</p>
    )
}