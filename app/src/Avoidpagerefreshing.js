import React from 'react';

const Avoidpagerefreshing = () => {
  const handleBeforeUnload = (event) => {
    const message = "Are you sure you want to close this page?";
    event.returnValue = message; // Standard for most browsers
    return message; // For some older browsers
  };

  React.useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div>
      <p>This is your content.</p>
    </div>
  );
};

export default Avoidpagerefreshing;
