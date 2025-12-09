import SectionTitle from "../SectionTitle/SectionTitle";

const Faq = () => {
    return (
        <div className='w-full max-w-6xl mx-auto px-4 md:px-8 py-16'>
            <section>
	<div className="container flex flex-col justify-center mx-auto">
		<div className='flex justify-center'>
        <SectionTitle subHeading="Answering your questions" heading="Frequently Asked Questions"/>
        </div>
		
		<div className="flex flex-col gap-4 mt-8">
			<details className="glass-effect rounded-2xl border border-white/20 overflow-hidden group">
				<summary className="py-5 px-6 outline-none cursor-pointer text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 list-none flex items-center justify-between">
					<span>How does the meal management platform work?</span>
					<span className="transform group-open:rotate-180 transition-transform duration-300">▼</span>
				</summary>
				<div className="px-6 pb-5 pt-2">
					<p className="text-white/80 leading-relaxed">Our platform allows university students to plan, track, and manage their daily meals efficiently. You can set meal preferences, track nutrition, and even share meal plans with friends or roommates to stay organized and healthy.</p>
				</div>
			</details>
			<details className="glass-effect rounded-2xl border border-white/20 overflow-hidden group">
				<summary className="py-5 px-6 outline-none cursor-pointer text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 list-none flex items-center justify-between">
					<span>Is the platform free to use?</span>
					<span className="transform group-open:rotate-180 transition-transform duration-300">▼</span>
				</summary>
				<div className="px-6 pb-5 pt-2">
					<p className="text-white/80 leading-relaxed">Our basic features are free for all students. However, we offer premium options with advanced meal tracking, nutrition insights, and exclusive recipe recommendations.</p>
				</div>
			</details>
			<details className="glass-effect rounded-2xl border border-white/20 overflow-hidden group">
				<summary className="py-5 px-6 outline-none cursor-pointer text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 list-none flex items-center justify-between">
					<span>Can I customize my meal preferences?</span>
					<span className="transform group-open:rotate-180 transition-transform duration-300">▼</span>
				</summary>
				<div className="px-6 pb-5 pt-2">
					<p className="text-white/80 leading-relaxed">Yes, you can fully customize your meal preferences, including dietary restrictions, portion sizes, and preferred cuisines. The platform tailors meal suggestions and plans to fit your unique needs.</p>
				</div>
			</details>
			
		</div>
	</div>
</section>
        </div>
    );
};

export default Faq;