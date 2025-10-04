// index.js
const app = require("./app");
const PORT = 4000;

// ✅ Définir la route avant de démarrer le serveur
app.get("/", (req, res) => {
  res.send("Hello Docker by hermine silue  + CI/CD!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

