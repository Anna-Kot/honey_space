import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props: any) => (
  <ContentLoader
    speed={2}
    width={288}
    height={460}
    viewBox='0 0 288 460'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}
  >
    <rect x='3' y='3' rx='5' ry='5' width='280' height='260' />
    <rect x='3' y='275' rx='5' ry='5' width='280' height='30' />
    <rect x='3' y='316' rx='5' ry='5' width='280' height='75' />
    <rect x='3' y='408' rx='14' ry='14' width='107' height='45' />
    <rect x='141' y='408' rx='25' ry='25' width='140' height='45' />
  </ContentLoader>
);

export default Skeleton;
