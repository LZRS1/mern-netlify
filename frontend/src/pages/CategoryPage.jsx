import { useEffect } from "react";
import { useProductStore } from "../stores/useProductStore";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";

// Definir las imágenes por categoría
const categoryImages = {
	"DISCORD": "https://i.ibb.co/TW3zKfw/discord.png",
	"SOFTWARE": "https://img.icons8.com/arcade/1000/laptop-settings.png",
	"OBFUSCATOR": "https://img.icons8.com/external-flaticons-flat-circular-flat-icons/1000/external-encoder-live-streaming-flaticons-flat-circular-flat-icons.png",
	"L4ZARUS CORP TOOLS": "https://i.ibb.co/2jwpP1r/logo-1.png",
	"INSTAGRAM": "https://img.icons8.com/fluency/1000/instagram-new.png",
	"FACEBOOK": "https://img.icons8.com/fluency/1000/facebook-new.png",
	"X": "https://img.icons8.com/ios-filled/1000/twitterx--v1.png",
	"YOUTUBE": "https://img.icons8.com/color/1000/youtube-play.png",
	"TIKTOK": "https://img.icons8.com/3d-fluency/1000/tiktok.png",
};

const CategoryPage = () => {
	const { fetchProductsByCategory, products } = useProductStore();
	const { category } = useParams();

	useEffect(() => {
		fetchProductsByCategory(category);
	}, [fetchProductsByCategory, category]);

	// Obtener la URL de la imagen correspondiente a la categoría
	const categoryImage = categoryImages[category.toUpperCase()];

	return (
		<div className='min-h-screen'>
			<div className='relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				{/* Imagen de la categoría */}
				{categoryImage && (
					<img
						src={categoryImage}
						alt={category}
						className='w-12 h-12 mb-8 object-cover rounded-full mx-auto' // 50x50 px, con borde redondeado
					/>
				)}

				{/* Título de la categoría */}
				<motion.h1
					className='text-center text-4xl sm:text-5xl font-bold text-emerald-400 mb-8'
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					{category.charAt(0).toUpperCase() + category.slice(1)}
				</motion.h1>

				{/* Productos de la categoría */}
				<motion.div
					className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					{products?.length === 0 && (
						<h2 className='text-3xl font-semibold text-gray-300 text-center col-span-full'>
							No se encontraron productos
						</h2>
						
					)}

					{products?.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default CategoryPage;
