import ReactDom from "react-dom";

export default function Modal(props) {
  const { showExcerciseDescription, handleCloseModal } = props;
  const { name, description } = showExcerciseDescription || {};

  // Generate image URLs based on exercise name
  const baseName =
    name
      ?.toLowerCase()
      .replace(/-/g, "") // Remove hyphens first
      .replace(/ /g, "_") || ""; // Then replace spaces with underscores

  // Create array with two image URLs
  const imageUrls = Array.from(
    { length: 2 },
    (_, i) => `/images/exercises/${baseName}_${i}.jpg`
  );

  return ReactDom.createPortal(
    <div className="modal-container">
      <button className="modal-underlay" onClick={handleCloseModal} />
      <div className="modal-content">
        <div>
          <h6>Name</h6>
          <h2 className="skill-name">{name.replaceAll("-", " ")}</h2>
        </div>
        <div>
          <h6>Demonstration</h6>
          <div className="image-grid">
            {imageUrls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`${name} demonstration ${index + 1}`}
                className="exercise-image"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            ))}
          </div>
          <div>
            <h6>Description</h6>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
