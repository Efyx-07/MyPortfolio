import { MouseEventHandler } from 'react';
import { Icon } from '@iconify/react';
import './ViewNavigator.scss';

interface ViewNavigatorProps {
  showPreviousView: MouseEventHandler;
  showNextView: MouseEventHandler;
  currentViewIndex: number;
  totalViews: number;
}

export default function ViewNavigator({
  showPreviousView,
  showNextView,
  currentViewIndex,
  totalViews,
}: ViewNavigatorProps) {
  return (
    <div className="views-navigator">
      <div className="viewNav-wrapper">
        <div className="viewNav-button" onClick={showPreviousView}>
          <Icon icon="ep:arrow-left-bold" />
          <p>Prev</p>
        </div>
        <div className="views-counter">
          <p>
            {currentViewIndex + 1} / {totalViews}
          </p>
        </div>
        <div className="viewNav-button" onClick={showNextView}>
          <p>Next</p>
          <Icon icon="ep:arrow-right-bold" />
        </div>
      </div>
    </div>
  );
}
