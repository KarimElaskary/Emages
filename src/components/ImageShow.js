function ImageShow({ image }) {
  const handleClick = () => {
    window.open(image.urls.full, '_blank');
  };

  return (
    <div className="image-card" onClick={handleClick}>
      <img src={image.urls.small} alt={image.alt_description} />
      <div className="image-overlay">
        <div className="author-info">
          <span className="author-name">by {image.user.name}</span>
        </div>
      </div>
    </div>
  );
}

export default ImageShow;