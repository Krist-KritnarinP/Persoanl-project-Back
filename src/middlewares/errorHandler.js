import z from 'zod'

function errorHandler(err, req, res, next) {
    console.log('err', err)
    
    if (err instanceof z.ZodError) {
        console.log('z.flattenError(err)', z.flattenError(err))
        res.status(400).json({
            status: "Error",
            message: "validation error",
            error: z.flattenError(err).fieldErrors
        })
    } else {
        
        const status = err.status || 500
        
        res.status(status).json({
            status: "Error",
            message: err.message || "Internal Server Error"
        })
    }
}

export default errorHandler
