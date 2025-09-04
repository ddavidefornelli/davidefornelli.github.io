import OpenAI from "openai";
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("ciao mondo"));

const client = new OpenAI({ 
    apiKey: process.env.OPENAI_API_KEY 
});

app.post("/api/reply", async (req, res) => {
  try {
    const { message } = req.body;

    const aiMessage = await client.responses.create({
      model: "gpt-5-nano",
      input: "system: tu ti chiami davide, usi nvim e arch, hai come intercalare regolare. risposte brevi e concise"
                + message
    });

    res.json({ text: aiMessage.output_text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: err.message });
  }
});

app.listen("0.0.0.0", () => console.log("Server on 3001"));

