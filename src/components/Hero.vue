<script>
    import { heroImg } from '../constants';

    export default {
        name: "Hero",
        data() {
            return {
                img: heroImg,
            }
        }
    }
</script>

<template>
    <header class="jobSpot__hero">
        <div class="container f-center jobSpot__hero-container">
            <div class="jobSpot__hero-content">
                <h1>Find the job that fits your life</h1>
                <p>Amet nulla ornare neque, in diam ultrices et phasellus mattis. Eget eget ut eget nib.</p>
                <div class="jobSpot__hero-content_info f-center">
                    <div class="jobSpot__hero-content_info-location">
                        <h4>Location</h4>
                        <p>Enter location</p>
                    </div>
                    <div class="jobSpot__hero-content_info-type">
                        <h4>Type</h4>
                        <p>Enter type of job</p>
                    </div>
                    <div class="jobSpot__hero-content_info-search f-center">
                        <font-awesome-icon icon="fa-solid fa-magnifying-glass" style="font-size: 1.8rem; color: #fff;" />
                        <h4>Search</h4>
                    </div>
                </div>
            </div>
            <div class="jobSpot__hero-img">
                <img v-bind:src="img" alt="image" loading="lazy">
            </div>
        </div>
    </header>
</template>

<style scoped>
    .jobSpot__hero {
        padding-top: 10rem;

        background-color: var(--lightBlue-clr);
        height: 100vh;
    }

    .jobSpot__hero-container {
        display: grid;
        grid-template-columns: .5fr 1fr;
        place-items: center;

        column-gap: 5rem;
    }

    @media screen and (max-width: 80rem) {
        .jobSpot__hero-container {
            grid-template-columns: 1fr;

            column-gap: 0;
            row-gap: 5rem;
        }
    }
    .jobSpot__hero-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        gap: 3rem;
    }

    .jobSpot__hero-content > h1 {
        font-weight: 600;
        font-size: var(--xLarge-font);
        line-height: 88px;
        color: var(--black-clr);
    }

    .jobSpot__hero-content > p {
        font-weight: 400;
        font-size: var(--small-font);
        line-height: 28px;
        color: #4B5257;
    }

    .jobSpot__hero-content_info {
        display: flex;
        gap: 3rem;

        background-color: var(--white-clr);

        padding: 2rem;
        border-radius: 1rem;
    }

    .jobSpot__hero-content_info h4 {
        font-weight: 600;
        font-size: 16px;
        line-height: 18px;
        color: #2D2D2D;
        opacity: 0.8;
    }

    .jobSpot__hero-content_info p {
        font-weight: 400;
        font-size: 15px;
        line-height: 14px;
        color: rgba(45, 45, 45, 0.3);
    }

    .jobSpot__hero-content_info-location {
        padding-right: 2rem;
        border-right: 2px solid #E6E6EE;
    }

    .jobSpot__hero-content_info-search {
        display: flex;
        gap: 1rem;

        background-color: var(--black-clr);
        border-radius: 1rem;

        padding: 1.5rem 1rem;
    }

    .jobSpot__hero-content_info-search h4 {
        color: var(--white-clr);
        font-weight: 500;
    }

    .jobSpot__hero-img {
        width: 100%;
    }

    .jobSpot__hero-img > img {
        width: 100%;
    }
</style>