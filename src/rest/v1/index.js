import { Router } from 'express'

const router = Router()

// REST resource
router.get('/resource/:id', (req, res) => {
    res.json({ resource: req.params.id })
})

export default router