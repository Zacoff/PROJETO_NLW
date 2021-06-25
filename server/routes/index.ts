import bodyParser from 'body-parser'
 
import { router as user } from './usersRoute'
import { router as tags } from './tagsRoute'
import { router as compliments} from './complimentsRoutes'
import { router as login } from './loginRoute'
import { router as sendEmail } from './sendEmailRoute'

class Router {
    static execute(app) {
        app.use(
          bodyParser.json(),
          user,
          tags,
          compliments,
          login,
          sendEmail
        )
      }
}

export { Router }
