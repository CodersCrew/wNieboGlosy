import { createElement } from 'react';

const transform = (data: string) => {
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;

  return createElement('span', {
    dangerouslySetInnerHTML: {
      __html: data.replace(
        regex,
        '<a style="text-decoration: underline; color: blue;" rel="noopener noreferrer" target="_blank" href="$2">$1</a>'
      )
    }
  });
};

export default transform;
