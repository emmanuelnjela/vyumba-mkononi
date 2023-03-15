import jwt from "jsonwebtoken";

const verifyJWT = async (req, res, next) => {
  try {
    const { accessToken, refreshToken } = req.cookies;
    if (req.cookies == null)
      return res.status(401).json({ message: "No authorization found" });


    jwt.verify(accessToken, process.env.ACCESS_SECRET, (error, decode) => {
      if (error) {
        const { message } = error;
        const { id } = req.body;
        // const {refreshToken} = req.cookies || {}
        if (message.endsWith("expired")) {
            if(refreshToken === null) return res.status(404).json({error: "Refresh token not found"})
            jwt.verify(refreshToken, process.env.REFRESH_SECRET, (error, decoded) => {
                if(error) throw new Error("invalid refresh token")
                const newAccessToken = jwt.sign({sub: id }, process.env.ACCESS_SECRET, {
                  expiresIn: "5m",
                });
                res.cookie("accessToken", newAccessToken);
            })
        }
        else {
          return res.status(403).json({ error: message });
        }
      }
      next();
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default verifyJWT;
