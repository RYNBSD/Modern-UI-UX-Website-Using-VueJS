<script>
    import { whyChooseUsData, whyChooseUsImg } from '../constants';

    export default {
        name: "WhyChooseUs",
        data() {
            return {
                data: whyChooseUsData,
                img: whyChooseUsImg,
            };
        }
    }
</script>

<template>
    <section class="jobSpot__us">
        <div class="jobSpot__us-container container">
            <div class="jobSpot__us-container_content f-center">
                <h1>Why We are Most Popular</h1>
                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida</p>
                <div class="jobSpot__us-container_content-features">
                    <div class="jobSpot__us-container_content-features_feature f-center" v-for="dt in data">
                        <font-awesome-icon :icon="dt.icon" style="font-size: 2.6rem;" />
                        <h3>{{ dt.title }}</h3>
                    </div>
                </div>
            </div>
            <div class="jobSpot__us-container_img">
                <img :src="img" alt="image" loading="lazy" style="width: 100%;">
            </div>
        </div>
    </section>
</template>

<style scoped>
    .jobSpot__us {
        height: 100vh;
    }

    .jobSpot__us-container {
        height: 100%;

        display: grid;
        grid-template-columns: repeat(2, 1fr);
        place-items: center;

        column-gap: 5rem;
    }

    @media screen and (max-width: 80rem) {
        .jobSpot__us-container {
            grid-template-columns: repeat(1, 1fr);
            padding: 2rem 0;
        }
    }

    .jobSpot__us-container_content {
        display: flex;
        flex-direction: column;
        align-items: flex-start !important;

        gap: 5rem;
    }

    .jobSpot__us-container_content > h1 {
        font-weight: 600;
        font-size: var(--large-font);
        line-height: 58px;
        color: var(--black-clr);
    }

    .jobSpot__us-container_content > p {
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: #4C4C4C;
    }

    .jobSpot__us-container_content-features {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        place-items: center;

        column-gap: 3rem;
        row-gap: 3rem;
    }

    .jobSpot__us-container_content-features_feature {
        width: 100%;

        display: flex;
        justify-content: flex-start;

        border: 1px solid #E5D7CC;
        border-radius: 1rem;
        padding: 1rem;
        transform: translateY(0);

        gap: 1rem;

        transition: .5s all ease;
    }

    .jobSpot__us-container_content-features_feature:hover {
        border: 0 solid #E5D7CC;
        box-shadow: 5px 8px 19px rgba(207, 207, 207, 0.28);
        transform: translateY(-1rem);
    }

    .jobSpot__us-container_content-features_feature > svg {
        background-color: var(--lightOrange-clr);
        border-radius: 1rem;

        padding: 1rem;
    }

    .jobSpot__us-container_content-features_feature > svg, .jobSpot__us-container_content-features_feature > h3 {
        color: #4C4C4C;
        transition: .5s color ease;
    }

    .jobSpot__us-container_content-features_feature:hover svg, .jobSpot__us-container_content-features_feature:hover h3 {
        color: var(--black-clr);
    }

    .jobSpot__us-container_content-features_feature > h3 {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.02em;
    }

</style>