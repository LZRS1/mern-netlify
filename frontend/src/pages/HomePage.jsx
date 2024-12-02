import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

const categories = [
	{ href: "/DISCORD", name: "DISCORD", imageUrl: "https://i.ibb.co/TW3zKfw/discord.png" },
	{ href: "/SOFTWARE", name: "SOFTWARE", imageUrl: "https://img.icons8.com/arcade/1000/laptop-settings.png"},
	{ href: "/OBFUSCATOR", name: "OBFUSCATOR", imageUrl: "https://img.icons8.com/external-flaticons-flat-circular-flat-icons/1000/external-encoder-live-streaming-flaticons-flat-circular-flat-icons.png" },
	{ href: "/L4ZARUS CORP TOOLS", name: "L4ZARUS CORP TOOLS", imageUrl: "https://i.ibb.co/2jwpP1r/logo-1.png" },
	{ href: "/INSTAGRAM", name: "INSTAGRAM", imageUrl: "https://img.icons8.com/fluency/1000/instagram-new.png" },
	{ href: "/FACEBOOK", name: "FACEBOOK", imageUrl: "https://img.icons8.com/fluency/1000/facebook-new.png" },
	{ href: "/X", name: "X", imageUrl: "https://img.icons8.com/ios-filled/1000/twitterx--v1.png" },
	{ href: "/YOUTUBE", name: "YOUTUBE", imageUrl: "https://img.icons8.com/color/1000/youtube-play.png" },
	{ href: "/TIKTOK", name: "TIKTOK", imageUrl: "https://img.icons8.com/3d-fluency/1000/tiktok.png" },
];

const HomePage = () => {
	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);

	return (
		<div className='relative min-h-screen text-white overflow-hidden'>
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<h1 className='text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4'>
				Explora nuestras categorías
				</h1>
				<p className='text-center text-xl text-gray-300 mb-12'>
				Descubre los ultimos servicios publicados de L4ZARUS CORP TOOLS
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
				</div>

				{!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}
			</div>
		</div>
	);
};
export default HomePage;
