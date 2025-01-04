import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
    {
        email: "kuntal.pramanik@converza.com",
        fullName: "Kuntal Pramanik",
        password: "123456",
        profilePic: "https://randomuser.me/api/portraits/lego/3.jpg",
    },
    {
        email: "biswajit.roy@converza.com",
        fullName: "Biswajit Roy",
        password: "123456",
        profilePic: "https://randomuser.me/api/portraits/lego/4.jpg"
    },
    {
        email: "hrishabh.mukherjee@converza.com",
        fullName: "Hrishabh Mukherjee",
        password: "123456",
        profilePic: "https://randomuser.me/api/portraits/lego/5.jpg"
    },
    {
        email: "bhaskar.nandy@converza.com",
        fullName: "Bhaskar Nandy",
        password: "123456",
        profilePic: "https://randomuser.me/api/portraits/lego/6.jpg"
    }
];

const seedDatabase = async () => {
    try {
        await connectDB();

        await User.insertMany(seedUsers);
        console.log("Database seeded successfully");
    } catch (error) {
        console.error("Error seeding database:", error);
    }
};

// Call the function
seedDatabase();