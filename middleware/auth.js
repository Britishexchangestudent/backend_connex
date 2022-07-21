// authorize header
exports.authUser = async (req, res, next) => {
  // was sending an OPTION method request, so had to add this.
  if (req.method === "OPTION") {
    return next();
  }
  try {
    let tmp = req.header("Authorization");

    const token = tmp;

    if (!token || token !== "mysecrettoken") {
      return res.status(403).json({ message: "Please present a valid token" });
    }

    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
