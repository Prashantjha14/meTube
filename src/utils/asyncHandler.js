const asyncHandler = (func) => async (req, res, next) => {
    try {
        await func(req, res, next);
    } catch (error) {
        console.error("Error:", error);
        res.status(error.code || 500).json({
            sucess: false,
            message: error.message,
        });
    }
};

export { asyncHandler };
