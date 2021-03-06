import { Router } from 'express';
import * as controller from './user.controller';
import * as auth from '../../auth/auth.service';

let router = new Router();

router.get('/me', auth.isAuthenticated(), controller.me);

export { router };
