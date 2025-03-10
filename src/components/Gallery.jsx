import { useState, useEffect } from "react";
import "../styles/Gallery.css";

const BATCH_SIZE = 5; // Počet fotiek na jedno načítanie

const Gallery = ({ photos = [] }) => {
  const [imageData, setImageData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (photos.length > 0) {
      const loadImages = async () => {
        setLoading(true);
        const startIndex = visibleCount - BATCH_SIZE;
        const endIndex = Math.min(visibleCount, photos.length);

        const newPhotos = photos.slice(startIndex, endIndex).filter(
          (src) => !imageData.some((img) => img.src === src)
        );

        const data = await Promise.all(
          newPhotos.map((src) =>
            new Promise((resolve) => {
              const img = new Image();
              img.src = src;
              img.onload = () => {
                resolve({
                  src,
                  orientation:
                    img.naturalWidth > img.naturalHeight
                      ? "landscape"
                      : "portrait",
                });
              };
              img.onerror = () => {
                resolve(null); // Preskočíme obrázok, ak sa nenačíta
              };
            })
          )
        );

        setImageData((prevData) => [...prevData, ...data.filter((img) => img !== null)]);
        setLoading(false);
      };

      loadImages();
    }
  }, [visibleCount, photos]);

  const loadMore = () => {
    if (visibleCount < photos.length) {
      setVisibleCount((prev) => prev + BATCH_SIZE);
    }
  };

  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  if (imageData.length === 0) return null;

  return (
    <>
      <div className="gallery">
        {imageData.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={`Image ${index + 1}`}
            onClick={() => openImage(img.src)}
          />
        ))}
      </div>

      {imageData.length < photos.length && (
        <button
          onClick={loadMore}
          className="load-more-btn"
          disabled={loading}
        >
          {loading ? "Načítavam..." : "Načítať ďalšie"}
        </button>
      )}

      {selectedImage && (
        <div className="lightbox" onClick={closeImage}>
          <img src={selectedImage} alt="Selected" />
          <span className="lightbox-close" onClick={closeImage}>&times;</span>
        </div>
      )}
    </>
  );
};

export default Gallery;