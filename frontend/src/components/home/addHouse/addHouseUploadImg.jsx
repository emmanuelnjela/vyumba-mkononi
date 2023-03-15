import image from "../../../imgs/image.svg";

// change this to use uploaded image preview
function AddHouseUploadImg() {
  return (
    <div className="add-house__upload-img">
      <h5 className="mb-xsm text--center">Weka picha za nyumba(chumba) hapa</h5>
      <div className="add-house__img-preview">
        <img src={image} alt="" className="add-house__img-preview-img" />
        {/* <p>Hakikisha hapa picha uliyoweka</p> */}
      </div>
      <div className="btn-counter">
        <button className="btn-counter__item">1</button>
        <button className="btn-counter__item">2</button>
        <button className="btn-counter__item">3</button>
        <button className="btn-counter__item">4</button>
      </div>
      <div className="add-house__upload-input">
        <input type="file" name="" id="" />
        <button className="add-house__btn btn btn--primary">
          weka picha <i className="fas fa-upload icon--md"></i>
        </button>
      </div>
    </div>
  );
}

export default AddHouseUploadImg