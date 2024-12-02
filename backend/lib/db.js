import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`Base De Datos MongoDB conectada: ${conn.connection.host}`);
	} catch (error) {
		console.log("Error al conectarse a MONGODB", error.message);
		process.exit(1);
	}
};
