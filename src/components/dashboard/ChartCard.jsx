import React, { memo } from 'react';
import Card from '../common/Card';

const ChartCard = memo(({ title, children, className = '' }) => {
  return (
    <Card title={title} className={className}>
      <div className="h-80">
        {children}
      </div>
    </Card>
  );
});

ChartCard.displayName = 'ChartCard';

export default ChartCard;