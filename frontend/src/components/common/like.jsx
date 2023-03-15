function Like({ liked, onLike }) {
  const classes = `${liked ? "fas" : "far"} fa-heart`;
  return <i className={classes} onClick={() => onLike()}></i>;
}

export default Like;
