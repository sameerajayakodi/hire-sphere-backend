import { Webhook } from "svix";

export const clerkWebhooks = async (req, res) => {
  try {
    //Create a svix instance with clear webhook secret
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    //Verify the webhook signature
    await whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    //Getting Data from req body
    const { data, type } = req.body;
    //switch case for defferent events
    switch (type) {
      case "user.created": {
        const userData = {
          _id: data.id,
          email: data.email_addresses[0].email_address,
          name: data.first_name + " " + data.last_name,
          image: data.image_url,
          resume: "",
        };

        await User.create(userData);
        res.json({ message: "User Created Successfully" });
        break;
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
