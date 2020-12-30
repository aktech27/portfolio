const SocialIcon = (props) => {
  let faClass = ("fa fa-" + props.name).toLowerCase();
  return (
    <div className="footer-social-icon">
      <i className={faClass}></i>
      <div className="foo-placeholder">
        <span style={{ fontFamily: props.font }}>{props.name}</span>
      </div>
    </div>
  );
};

export default SocialIcon;
