import React from 'react';

const PageTitle = ({ title }) => {


  React.useEffect(() => {
    document.title = title;
  }, [title]);


};

export default PageTitle;
