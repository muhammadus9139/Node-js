import express from "express";
import path from "path";
import dotenv from "dotenv";
import { MongoClient, ObjectId } from "mongodb";

dotenv.config();

const app = express();

// =======================
// Middleware
// =======================

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve("public")));

app.set("view engine", "ejs");

// =======================
// Database
// =======================

const dbname = "Node-project";  // "Node-proejct" ki jagah "Node-project"
const collectionname = "todo";

const client = new MongoClient(process.env.MONGO_URI);

let db;

// Connect MongoDB only once
async function connectDB() {
    try {
        await client.connect();
        db = client.db(dbname);
        console.log("✅ MongoDB Connected Successfully");
    } catch (err) {
        console.error("❌ MongoDB Connection Error");
        console.error(err);
        process.exit(1);
    }
}

// =======================
// Home
// =======================

app.get("/", async (req, res) => {
    try {
        const collection = db.collection(collectionname);
        const result = await collection.find().toArray();

        res.render("list", { result });
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
});

// =======================
// Add Page
// =======================

app.get("/add", (req, res) => {
    res.render("add");
});

// =======================
// Add Task
// =======================

app.post("/add", async (req, res) => {
    try {
        const collection = db.collection(collectionname);

        await collection.insertOne(req.body);

        res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
});

// =======================
// Update Page
// =======================

app.get("/update/:id", async (req, res) => {
    try {
        const collection = db.collection(collectionname);

        const result = await collection.findOne({
            _id: new ObjectId(req.params.id),
        });

        if (!result) {
            return res.status(404).send("Task Not Found");
        }

        res.render("update", { result });
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
});

// =======================
// Update Task
// =======================

app.post("/update/:id", async (req, res) => {
    try {
        const collection = db.collection(collectionname);

        await collection.updateOne(
            {
                _id: new ObjectId(req.params.id),
            },
            {
                $set: {
                    title: req.body.title,
                    description: req.body.description,
                },
            }
        );

        res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
});

// =======================
// Delete One
// =======================

app.get("/delete/:id", async (req, res) => {
    try {
        const collection = db.collection(collectionname);

        await collection.deleteOne({
            _id: new ObjectId(req.params.id),
        });

        res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
});

// =======================
// Delete Selected
// =======================

app.post("/delete-selected", async (req, res) => {
    try {
        const collection = db.collection(collectionname);

        let selectedTask = req.body.selectedTask;

        if (!selectedTask) {
            return res.redirect("/");
        }

        if (!Array.isArray(selectedTask)) {
            selectedTask = [selectedTask];
        }

        const ids = selectedTask.map((id) => new ObjectId(id));

        await collection.deleteMany({
            _id: {
                $in: ids,
            },
        });

        res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
});

// =======================
// Start Server
// =======================

const PORT = process.env.PORT || 3200;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Server Running on http://localhost:${PORT}`);
    });
});