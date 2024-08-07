const FloatingIcon: React.FC = () => {
  return (
    <div className="floating-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 800 800"
        width="200"
        height="200">
        <defs>
          <radialGradient id="ccclaymoji-grad-dark" r="93%" cx="20%" cy="20%">
            <stop offset="70%" stopColor="#c084fc" stopOpacity="0"></stop>
            <stop offset="97%" stopColor="#8d55c8" stopOpacity="1"></stop>
          </radialGradient>
          <radialGradient id="ccclaymoji-grad-light" r="65%" cx="28%" cy="20%">
            <stop offset="0%" stopColor="#f5b5ff" stopOpacity="0.75"></stop>
            <stop offset="100%" stopColor="#c084fc" stopOpacity="0"></stop>
          </radialGradient>
          <filter
            id="ccclaymoji-blur"
            x="-100%"
            y="-100%"
            width="400%"
            height="400%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feGaussianBlur
              stdDeviation="30"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="SourceGraphic"
              edgeMode="none"
              result="blur"></feGaussianBlur>
          </filter>
          <filter
            id="inner-blur"
            x="-100%"
            y="-100%"
            width="400%"
            height="400%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feGaussianBlur
              stdDeviation="2"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="SourceGraphic"
              edgeMode="none"
              result="blur"></feGaussianBlur>
          </filter>
          <filter
            id="eye-shadow"
            x="-100%"
            y="-100%"
            width="400%"
            height="400%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feDropShadow
              stdDeviation="10"
              dx="10"
              dy="10"
              floodColor="#0000af"
              floodOpacity="0.2"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="dropShadow"></feDropShadow>
          </filter>
          <linearGradient
            gradientTransform="rotate(-25)"
            id="eye-light"
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%">
            <stop offset="20%" stopColor="#a973ff" stopOpacity="1"></stop>
            <stop
              offset="100%"
              stopColor="hsla(240, 89%, 47%, 1.00)"
              stopOpacity="0"></stop>
          </linearGradient>
          <linearGradient id="mouth-light" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#ff9eff" stopOpacity="1"></stop>
            <stop
              offset="100%"
              stopColor="hsla(301, 100%, 51%, 1.00)"
              stopOpacity="0"></stop>
          </linearGradient>
          <filter
            id="mouth-shadow"
            x="-100%"
            y="-100%"
            width="400%"
            height="400%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feDropShadow
              stdDeviation="10"
              dx="10"
              dy="10"
              floodColor="#c700c7"
              floodOpacity="0.2"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="dropShadow"></feDropShadow>
          </filter>
        </defs>
        <g strokeLinecap="round" transform="rotate(349, 400, 400)">
          <path
            d="M644.5 450.00001044671814C644.5 599.5931506084432 549.593140161725 720.8611964305456 400 720.8611964305456C250.40751886792452 720.8611964305456 155.5 599.5931506084432 155.5 450.00001044671814C155.5 300.40752931464266 250.40751886792452 179.13882446289062 400 179.13882446289062C549.593140161725 179.13882446289062 644.5 300.40752931464266 644.5 450.00001044671814Z "
            fill="#8d55c8"
            opacity="0.25"
            filter="url(#ccclaymoji-blur)"></path>
          <path
            d="M644.5 400.00000143458703C644.5 558.1169672465528 558.1169658119658 630.5683775029631 400 630.5683775029631C241.88373076923077 630.5683775029631 155.5 558.1169672465528 155.5 400.00000143458703C155.5 241.88373220381777 241.88373076923077 169.43162536621094 400 169.43162536621094C558.1169658119658 169.43162536621094 644.5 241.88373220381777 644.5 400.00000143458703Z "
            fill="#c084fc"></path>
          <path
            d="M644.5 400.00000143458703C644.5 558.1169672465528 558.1169658119658 630.5683775029631 400 630.5683775029631C241.88373076923077 630.5683775029631 155.5 558.1169672465528 155.5 400.00000143458703C155.5 241.88373220381777 241.88373076923077 169.43162536621094 400 169.43162536621094C558.1169658119658 169.43162536621094 644.5 241.88373220381777 644.5 400.00000143458703Z "
            fill="url(#ccclaymoji-grad-dark)"></path>
          <path
            d="M644.5 400.00000143458703C644.5 558.1169672465528 558.1169658119658 630.5683775029631 400 630.5683775029631C241.88373076923077 630.5683775029631 155.5 558.1169672465528 155.5 400.00000143458703C155.5 241.88373220381777 241.88373076923077 169.43162536621094 400 169.43162536621094C558.1169658119658 169.43162536621094 644.5 241.88373220381777 644.5 400.00000143458703Z "
            fill="url(#ccclaymoji-grad-light)"></path>
          <ellipse
            rx="23.5"
            ry="25"
            cx="350"
            cy="375"
            fill="hsla(240, 89%, 47%, 1.00)"
            filter="url(#eye-shadow)"></ellipse>
          <ellipse
            rx="23.5"
            ry="25"
            cx="350"
            cy="375"
            fill="url(#eye-light)"
            filter="url(#inner-blur)"></ellipse>
          <ellipse
            rx="23.5"
            ry="25"
            cx="450"
            cy="375"
            fill="hsla(240, 89%, 47%, 1.00)"
            filter="url(#eye-shadow)"></ellipse>
          <ellipse
            rx="23.5"
            ry="25"
            cx="450"
            cy="375"
            fill="url(#eye-light)"
            filter="url(#inner-blur)"></ellipse>
          <path
            d="M324.5 492Q355.5 572 459.5 492 "
            strokeWidth="21"
            stroke="hsla(301, 100%, 51%, 1.00)"
            fill="none"
            filter="url(#mouth-shadow)"
            transform="rotate(11, 400, 400)"></path>
          <path
            d="M324.5 492Q355.5 572 459.5 492 "
            strokeWidth="7"
            stroke="url(#mouth-light)"
            fill="none"
            filter="url(#inner-blur)"
            transform="rotate(11, 400, 400)"></path>
        </g>
      </svg>
    </div>
  );
};

export default FloatingIcon;
