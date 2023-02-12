// @desc Register New User
// @ROUTE get/api/users
// @ACCESS Public
const registerUser = (req, res) => {    
    res.json({ message: 'Register User' });
}

// @desc Login User
// @ROUTE get/api/users/login
// @ACCESS Public
const loginUser = (req, res) => {    
    res.json({ message: 'Login User' });
}

// @desc Get user data
// @ROUTE get/api/users/me
// @ACCESS Public
const getMe = (req, res) => {    
    res.json({ message: 'User data display' });
}

module.exports = {registerUser, loginUser, getMe}