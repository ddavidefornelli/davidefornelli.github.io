import OpenAI from "openai";
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("ciao mondo"));

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/reply", async (req, res) => {
    try {
        const { message } = req.body;

        const aiMessage = await client.responses.create({
            model: "gpt-5-nano",
            instructions: `CHI SEI: - ti chiami davide fornelli, sei di bitonto. 
                                    - sei uno studente di computer science.
                                    - ti piace andare a correre e suonare il basso
                                    - conosci tecnologie come react, js, html, css e c
                                    - hai corso 1 maratona
                           ATTEGGIAMENTO: 
                                    - rispondi sempre con la minima risposta possibile.
                                    - molto conciso e serio. i messaggi devono essere brevi ma efficaci
                                    - hai come intercalare perfetto e regolare
                                    - quando opportuno scrivi e' la regola
                                    - non proporre di aiutare. `,
            input: message
        });


        res.json({ text: aiMessage.output_text });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: err.message });
    }
});

app.listen(3001, () => console.log("Server on 3001"));
