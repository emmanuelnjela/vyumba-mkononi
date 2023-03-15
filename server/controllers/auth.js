import bcrypt from "bcrypt";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { userName, email } = req.body;
    const foundUsername = await User.findOne({ userName });
    const foundEmail = await User.findOne({ email });

    if (foundUsername || foundEmail) {
      return res
        .status(409)
        .json({ message: "Jina la mtumiaji au email teali imeshatumiwa na mtumiaji mwengine!" });
    }

    const user = await User(req.body);
    const salt = await bcrypt.genSalt(5);
    const hashedPassword = await bcrypt.hash(user.password, salt);

    user.password = hashedPassword;

    const formatedUser = (() => {
      const { _id, userName, password, owner } = user;
      return { _id, userName, password, owner };
    })();
    // user.save();

    res.status(201).json({ user: formatedUser });
  } catch (err) {
    res.status(203).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { userName, password } = req.body;

    const user = await User.findOne({ userName });
    console.log(user);

    if (user == null) return res.status(404).json({ message: "not found" });

    const passwordIsCorrect = await bcrypt.compare(password, user.password);

    if (passwordIsCorrect == false)
      return res.status(401).json({ message: "password ulioweka sio sahihi" });

    const accessToken = jwt.sign(
      { sub: user.userName },
      process.env.ACCESS_SECRET,
      {
        algorithm: "HS256",
        expiresIn: "1m",
      }
    );
    const refreshToken = jwt.sign(
      { sub: user.userName },
      process.env.REFRESH_SECRET,
      {
        algorithm: "HS256",
        expiresIn: "2m",
      }
    );
    // res.cookie("accessToken", accessToken);
    // res.cookie("refreshToken", refreshToken);
    user.password = "";
    delete user.password;

    res.status(202).json({ user, accessToken, refreshToken });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};
export const logout = (req, res) => {
  const { accessToken, refreshToken } = req.cookies;

  if (accessToken === undefined)
    return res.status(404).json({ message: "the access token not found" });

  if (refreshToken == undefined)
    return res.status(401).json({ message: "The refresh token is missing" });

  console.log(req.app.get("tokenBlacklist"));

  res.clearCookie("accessToken");
  res.clearCookie("refreshToken");

  res.json({ message: "successfully logout" });
};
