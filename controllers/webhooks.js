import { Webhook } from "svix";

export const clerkWebhooks = async (req, res) => {
  try {
    //Create a svix instance with clear webhook secret
    const whook = new Webhook(process.env.CLEARK_WEBHOOK_SECRET);
    //Verify the webhook signature
    const verified = await whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    //Getting Data from req body
    const { data, type } = req.body;
    //switch case for defferent events
    switch (type) {
      case "user.created": {
        const useData = {
          _id: data.id,
          name: data.first_name + " " + data.last_name,
          email: data.email_addresses[0].email_address,
          image: data.image_url,
          resume: "",
        };

        await User.create(useData);
        res.json({ message: "User Created Successfully" });
        break;
      }

      case "event.updated":
        {
          const useData = {
            name: data.first_name + " " + data.last_name,
            email: data.email_addresses[0].email_address,
            image: data.image_url,
          };
        }
        await User.findByIdAndUpdate(data.id, useData);
        res.json({ message: "User Updated Successfully" });
        break;
      case "event.deleted": {
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
