import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env from project root (parent of /server)
const envPath = join(__dirname, '..', '.env');
dotenv.config({ path: envPath });
