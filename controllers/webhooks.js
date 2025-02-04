import { Webhook } from "svix";
import User from "../models/User.js";

export const clerkWebhooks = async (req, res) => {
  try {
    //Create a svix instance with clear webhook secret
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    //Verify the webhook signature
    const payload = req.rawBody; // Use raw body instead of JSON.stringify(req.body)
    await whook.verify(payload, {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    //Getting Data from req body
    const { data, type } = req.body;
    //switch case for defferent events
    switch (type) {
      case "user.created": {
        try {
          const userData = {
            _id: data.id,
            email: data.email_addresses[0].email_address,
            name: `${data.first_name} ${data.last_name}`,
            image: data.image_url,
            resume: "",
          };

          const newUser = await User.create(userData);
          console.log("User saved to DB:", newUser); // Debugging log
          return res.status(201).json({ message: "User Created Successfully" });
        } catch (err) {
          console.error("Error saving user to DB:", err);
          return res.status(500).json({ message: "Database Error" });
        }
      }

      case "user.updated": {
        const userData = {
          email: data.email_addresses[0].email_address,
          name: data.first_name + " " + data.last_name,

          image: data.image_url,
        };

        await User.findByIdAndUpdate(data.id, userData);
        res.json({ message: "User Updated Successfully" });
        break;
      }

      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        res.json({ message: "User Deleted Successfully" });
        break;
      }
      default:
        break;
    }
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: "Webhooks Error" });
    res.status(400).json({ message: "Invalid Request" });
  }
};
