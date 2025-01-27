import React from 'react';
import Banner from './Banner';
import Faq from './Faq';
import Pricing from './Pricing';
import MealCategory from './MealCategory';

const HomeLayout = () => {
    return (
        <div>
            <Banner/>
            <MealCategory/>
            <Pricing/>
            <Faq/>
        </div>
    );
};

export default HomeLayout;