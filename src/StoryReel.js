import React from 'react';
import './StoryReel.css';
import Story from "./Story";

function StoryReel() {
    return (
        <div className="storyReel">
            {/* Story */}

                <Story
                    image="https://www.wanderlustingk.com/wp-content/uploads/2017/11/belgium-208_orig.jpg"
                    profileSrc="https://df0a04043ae3b0be60ce-0769ebb99367e103e6cc409064fb3339.ssl.cf2.rackcdn.com/0ca859f6-8fa4-482e-b70c-abfdbc49cf54__L.jpg"
                    title="Susanne"
                />



                <Story
                    image="https://images.trvl-media.com/media/content/shared/images/travelguides/destination/2114/London-City-Hall-167154.jpg"
                    profileSrc="https://www.prodirectrunning.com/productimages/V3_1_Main/177573.jpg"
                    title="Henk"
                />



                <Story
                    image="https://www.planetware.com/photos-large/D/germany-garmisch-partenkirchen-grainau.jpg"
                    profileSrc="https://cdna.lystit.com/photos/a22c-2014/01/30/adidas-red-supernova-climacool-short-sleeve-running-tee-product-1-14122833-0-098439070-normal.jpeg"
                    title="Peter"
                />



                <Story
                    image="https://i.pinimg.com/736x/9f/56/7d/9f567deb0d9a63c3f81aa43a0a99141d.jpg"
                    profileSrc="https://www.bike24.com/i/p/5/7/334075_02_d.jpg"
                    title="Angelique"
                />



                <Story
                    image="https://www.ohmyfoodness.nl/wp-content/uploads/2018/12/Hattem-1.jpg"
                    profileSrc="https://www.prodirectrunning.com/ProductImages/Main/V3_1_Main_0356025.jpg"
                    title="Ryaaz"
                />

        </div>
    )
}

export default StoryReel;
