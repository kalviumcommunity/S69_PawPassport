const User = require("./schema");  // Import Mongoose model

// CREATE User
const create = async (req, res) => {
    try {
        const { name, email, country } = req.body;

        if (!name || !email || !country) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const UserExist = await User.findOne({ email });

        if (UserExist) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = new User({ name, email, country });
        await newUser.save();

        res.status(201).json({ message: "User data saved", user: newUser });

    } catch (err) {
        res.status(500).json({ message: "Internal server error", error: err.message });
    }
};

// READ Users
const read = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: "Internal server error", error: err.message });
    }
};

// UPDATE User
const update = async (req, res) => {
    try {
        const { email, name, country } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (name) user.name = name;
        if (country) user.country = country;

        await user.save();

        res.status(200).json({ message: "Updated successfully", user });
    } catch (err) {
        res.status(500).json({ message: "Internal server error", error: err.message });
    }
};

// DELETE User
const Delete = async (req, res) => {
    try {
        const { email } = req.body;

        const user = await User.findOneAndDelete({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "Delete successful" });
    } catch (err) {
        res.status(500).json({ message: "Internal server error", error: err.message });
    }
};

module.exports = { create, read, update, Delete };
