export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confiremPassword, gender } = res.body;
  } catch (err) {}
};

export const login = (req, res) => {
  console.log("login user");
};

export const logout = (req, res) => {
  console.log("login user");
};
