const corsOptions = {
    origin: process.env.CLIENT_URL,
    methods: ["GET","POST","PUT","DELETE"],
    credentials: true,
};

// const AUCHAT_TOKEN = "auchat-token"

export {corsOptions};