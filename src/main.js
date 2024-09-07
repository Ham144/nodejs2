import { logger } from "./app/logging.js";
import { web } from "./app/web.js";

const PORT = process.env.PORT || 8000



web.listen(PORT, () => {
    logger.info('app start')
})