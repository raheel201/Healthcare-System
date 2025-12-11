import React, { memo } from 'react';

const Card = memo(({ 
  children, 
  className = '', 
  title,
  subtitle,
  ...props 
}) => {
  return (
    <div className={`card p-6 ${className}`} {...props}>
      {title && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          {subtitle && (
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;