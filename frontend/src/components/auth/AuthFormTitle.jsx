function AuthFormTitle({ label }) {
  return (
    <h1 className="auth__form-title">
      KARIBU
      {label === "INGIA"
        ? " TENA, INGIA KATIKA AKAUNTI YAKO"
        : ", FUNGUA AKAUNTI HAPA"}
    </h1>
  );
}

export default AuthFormTitle;
