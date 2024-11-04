export default function Model({ id, header, body, footer,onClose }) {
  return (
    <div id={id || "Model"} className="model">
      <div className="container">
        <div className="header">
          <span onClick={onClose} className="close-model-icon">&times;</span>
          <h2>{header ? header : "Vidyardi Institutions pvt ltd"}</h2>
        </div>
        <div className="body">
          <h2>{body ? body : <h1>This is body Text</h1>}</h2>
        </div>
        <div className="footer">
          <h2>{footer ? footer : <h5>vidyardi@2016</h5>}</h2>
        </div>
      </div>
    </div>
  );
}
