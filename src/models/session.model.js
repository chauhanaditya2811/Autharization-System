import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "users",
            required: [true, "user is required"]
        },
        refreshTokenHash: {
            type: String,
            required: [true, "refresh token hash is required"]
        },
        ip: {
            type: String,
            required: [true, "ip address is required"]
        },
        userAgent: {
            type: String,
            required: [true, "userAgent is required"]
        },
        revoked: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);

const sessionModel = mongoose.model("sessions", sessionSchema);

export default sessionModel;