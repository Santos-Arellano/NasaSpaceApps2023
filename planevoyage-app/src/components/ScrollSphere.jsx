import { Html, Scroll, useIntersect } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { FiTwitter } from "react-icons/fi";

import Sphere from "./Sphere";
import Text from "./Text";
import { isMobile } from "react-device-detect";
import { Minimap } from "./Minimap";

export default function ScrollSphere({
  position,
  model,
  text,
  scale,
  para,
  boundingBox,
  rotation,
  map,
  rotationClockWise,
  distanceFromSun,
  lengthOfYear,
  numberOfMoon,
  img,
}) {
  const visible = useRef(false);
  const ref = useIntersect((isVisible) => (visible.current = isVisible));

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!visible.current) {
      setAnimate(true);
    }
  }, [visible]);

  return (
    <>
      <Scroll>
        <Sphere
          rotation={rotation}
          animate={animate}
          reference={ref}
          map={map}
          position={position}
          model={model}
          text={text}
          img={img}
          scale={scale}
          rotationClockWise={rotationClockWise}
        />
      </Scroll>

      <Scroll>
        <Text
          boundingBox={boundingBox}
          para={para}
          img={img}
          position={position}
          text={text}
          scale={scale}
          animate={animate}
          distanceFromSun={distanceFromSun}
          lengthOfYear={lengthOfYear}
          numberOfMoon={numberOfMoon}
        />
      </Scroll>

      <Minimap position={position} />

      <Html center position={[0, -2.2, 0]}>
        <div className='absolute'>
          <p className='html_p'>
            <p className='center'> Click in planet name to see more info </p>
          </p>
        </div>
      </Html>

      <Html center position={[0, -2.7, 0]}>
        <div className='absolute'>
          <p className='html_p'> </p>
        </div>
      </Html>
    </>
  );
}
