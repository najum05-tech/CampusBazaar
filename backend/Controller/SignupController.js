import Signup from '../Models/Signup.js';

export const SignupController = (req, res) => {
    // console.log("Signup request received in SignupController/pages/Signup");
    // res.send("Signup request received endpoint");

    const { fullName, email, password } = req.body;

    const newUser = new Signup({
        fullName: fullName,
        email: email,
        password: password
    });

    newUser.save()
        .then(() => {
            res.status(201).send("User registered successfully");
        })
        .catch((error) => {
            res.status(500).send("Error registering user:"+error)
        });
    };