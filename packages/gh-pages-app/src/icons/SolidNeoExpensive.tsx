import { FC, SVGProps } from 'react';

export const SvgSolidNeoExpensive: FC<SVGProps<SVGSVGElement>> = (
  props
): JSX.Element => {
  return (
    <>
      <svg
        width={props.width}
        height={props.height}
        viewBox={`0 0 ${props.width} ${props.height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M208.001 110.354L252.24 66.1333C257.911 60.4638 257.911 51.1864 252.24 45.517L210.991 4.28478C205.319 -1.38463 196.038 -1.38463 190.367 4.28478L146.127 48.5063C144.787 49.8463 143.962 51.7018 144.065 53.6603V105.2C144.065 109.324 147.262 112.52 151.386 112.52H202.948C204.803 112.52 206.557 111.798 208.001 110.354ZM110.86 48.5063L66.6205 4.28478C60.9487 -1.38463 51.6678 -1.38463 45.9961 4.28478L4.74729 45.517C-0.924387 51.1864 -0.924394 60.4638 4.74729 66.1333L48.9865 110.354C50.3272 111.695 52.1833 112.52 54.1427 112.416H105.704C109.828 112.416 113.026 109.221 113.026 105.097V53.5572C113.026 51.7018 112.303 49.9494 110.86 48.5063ZM48.9866 145.608L4.74729 189.829C-0.924387 195.499 -0.924387 204.776 4.74729 210.445L45.9961 251.678C51.6678 257.347 60.9487 257.347 66.6205 251.678L110.86 207.457C112.201 206.116 113.026 204.261 112.922 202.303V150.762C112.922 146.639 109.725 143.443 105.6 143.443L54.0395 143.444C52.1833 143.444 50.4303 144.165 48.9866 145.608ZM202.741 143.444L151.18 143.443C147.056 143.443 143.858 146.639 143.858 150.762V202.303C143.858 204.158 144.581 206.116 145.921 207.457L190.264 251.781C195.935 257.45 205.216 257.45 210.888 251.781L252.137 210.549C257.808 204.88 257.808 195.602 252.137 189.933L207.897 145.711C206.557 144.165 204.803 143.443 202.741 143.444Z"
          fill={props.fill}
        />
      </svg>
    </>
  );
};
