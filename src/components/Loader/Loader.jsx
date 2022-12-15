import { ThreeCircles } from 'react-loader-spinner';

import { LoaderWrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <ThreeCircles
        height="300"
        width="300"
        color="red"
        wrapperStyle={{}}
        visible={true}
        ariaLabel="three-circles-rotating"
      />
    </LoaderWrapper>
  );
};
