import Separator from "./Separator";
import './SectionTitle.scss';

interface SectionTitleProps {
    title: string;
}

export default function SectionTitle({title}: SectionTitleProps) {
    return (
        <div className="sectionTitle-container">
            <h2>{title}</h2>
            <Separator />
        </div>
    )
}