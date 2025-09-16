import app from './server';
import 'dotenv/config';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});