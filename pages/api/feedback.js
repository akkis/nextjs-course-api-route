import fs from "fs";
import path from "path";

function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    const email = req.body.email;
    const feedbackText = req.body.text;

    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      text: feedbackText,
    };

    // store in DB or something...
    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);

    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));

    res.status(201).json({
      message: "Success!",
      feedback: newFeedback,
    });
  } else {
    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);

    res.status(200).json({
      feedback: data,
    });
  }
}

export default handler;
