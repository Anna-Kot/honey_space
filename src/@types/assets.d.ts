declare module '*.svg' {
  import * as React from 'react';
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
  export { ReactComponent };
  const src: string; // Fallback for importing the SVG as a string
  export default src;
}
declare module '*png' {
  const content: any;
  export default content;
}
declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
