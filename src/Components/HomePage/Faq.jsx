import SectionTitle from "../SectionTitle/SectionTitle";

const Faq = () => {
    return (
        <div className=' mt-10 w-4/5 mx-auto'>
            <section>
	<div className="container flex flex-col justify-center  mx-auto">
		<div className='flex justify-center'>
        <SectionTitle subHeading="Answering your question's" heading="Frequently Asked Questions"/>
        </div>
		
		<div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
			<details open="">
				<summary className="py-2 outline-none cursor-pointer focus:underline">How does the meal management platform work?</summary>
				<div className="px-4 pb-4">
					<p>Our platform allows university students to plan, track, and manage their daily meals efficiently. You can set meal preferences, track nutrition, and even share meal plans with friends or roommates to stay organized and healthy.</p>
				</div>
			</details>
			<details open="">
				<summary className="py-2 outline-none cursor-pointer focus:underline">Is the platform free to use?</summary>
				<div className="px-4 pb-4">
					<p>Our basic features are free for all students. However, we offer premium options with advanced meal tracking, nutrition insights, and exclusive recipe recommendations.</p>
				</div>
			</details>
			<details open="">
				<summary className="py-2 outline-none cursor-pointer focus:underline">Can I customize my meal preferences?</summary>
				<div className="px-4 pb-4 space-y-2">
					<p>Yes, you can fully customize your meal preferences, including dietary restrictions, portion sizes, and preferred cuisines. The platform tailors meal suggestions and plans to fit your unique needs.</p>
				</div>
			</details>
			
		</div>
	</div>
</section>
        </div>
    );
};

export default Faq;