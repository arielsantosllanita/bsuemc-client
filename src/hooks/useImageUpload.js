import { Convert } from 'mongo-image-converter';
import { useState, useEffect } from 'react';

/**
 * Converts jpeg or png into string
 */
const useImageUpload = (image) => {
  const [imgUrl, setImgUrl] = useState(null);

  useEffect(() => {
    (async () => {
      if (image) {
        try {
          const convertedImage = await Convert(image);
          setImgUrl(convertedImage ? convertedImage : null);
        } catch (err) {
          setImgUrl(null);
        }
      }
    })()
  }, [image])

  return imgUrl
}

export default useImageUpload;
