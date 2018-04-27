import { Router } from 'express'

import definition from '../../package.json'
import v1 from './v1'

const router = Router()

router.get('/version', (req, res) => {
    res.json({ version: definition.version || 'unknown' })
})

router.use('/v1', v1)

export default router