import bcrypt from "bcrypt";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import { Crud } from "../utils/crudOperations.js";

const usersCrud = new Crud(User);

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
    user.isLoggenIn = true

    const formatedUser = (() => {
      const { _id, userName, password, email } = user;
      return { _id, userName, password, email };
    })();
    user.save();

    res.status(201).json({ user: formatedUser });
  } catch (err) {
    res.status(203).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { userName, password } = req.body;

    const user = await User.findOne({ userName });

    if (user == null) return res.status(404).json({ message: "Tarifa ulizoweka sio sahihi" });

    const passwordIsCorrect = await bcrypt.compare(password, user.password);

    if (passwordIsCorrect == false)
      return res.status(401).json({ message: "Tarifa ulioweka sio sahihi" });

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
        expiresIn: "5m",
      }
    );
    // res.cookie("accessToken", accessToken);
    // res.cookie("refreshToken", refreshToken);
    user.password = "";
    delete user.password;
    user.isLoggenIn = true

    res.status(202).json({ user, accessToken, refreshToken });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};
export const logout = async (req, res) => {
try {
    const { accessToken, refreshToken, currentUserId } = req.cookies;
  
    if (currentUserId === undefined)
      return res.status(404).json({ message: "the currentUserId not found" });

    if (accessToken === undefined)
      return res.status(404).json({ message: "the access token not found" });
  
    if (refreshToken == undefined)
      return res.status(401).json({ message: "The refresh token is missing" });
  
    // await usersCrud.foundDataInDB(currentUserId)
    await User.findOneAndUpdate({_id: currentUserId}, {$set: {isLoggenIn: false}})
  
  
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");
    res.clearCookie("currentUserId")
  
    res.json({ message: "successfully logout" });
} catch (error) {
  if(error.message?.toLocaleLowerCase() === "data not found!") {
    res.status(404).json({message: error.message})
    return
  }
  res.json({ message: error.message });
}
};
