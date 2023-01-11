<script>
    import { frameImg } from '../constants';

    export default {
        name: "Frame",
        data() {
            return {
                img: frameImg,
            }
        }
    }
</script>

<template>
    <section class="jobSpot__frame">
        <div class="jobSpot__frame-container container">
            <div class="jobSpot__frame-container_img">
                <img v-bind:src="img" alt="image" loading="lazy" style="width: 100%;" />
            </div>
            <div class="jobSpot__frame-container_content f-center">
                <font-awesome-icon icon="fa-solid fa-briefcase" />
                <h1>Trusted & Popular Job Portal</h1>
                <p>Find your dream job from thousands daily updated job vacancies. Find the best jobs online from UK job sites or apply directly on a business website. Search and find jobs today!</p>
                <div class="jobSpot__frame-container_content-btn f-center">
                    <button type="button" class="bg f-center">
                        Post a job
                        <font-awesome-icon icon="fa-solid fa-arrow-right" />
                    </button>
                    <button type="button" class="bordered f-center">
                        Post a job
                        <font-awesome-icon icon="fa-solid fa-arrow-right" />
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .jobSpot__frame {
        height: 100vh;
    }
    
    .jobSpot__frame-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        place-items: center;
        column-gap: 5rem;
    }

    @media screen and (max-width: 80rem) {
        .jobSpot__frame {
            height: fit-content;
        }

        .jobSpot__frame-container {
            padding: 2rem 0;
        }

        .jobSpot__frame-container {
            grid-template-columns: repeat(1, 1fr);
            column-gap: 0;
            row-gap: 5rem;
        }
    }

    .jobSpot__frame-container_content  {
        display: flex;
        flex-direction: column;
        align-items: flex-start !important;

        gap: 3rem;
    }

    .jobSpot__frame-container_content > svg {
        color: var(--white-clr);
        font-size: 3.5rem;
        background-color: var(--blue-clr);
        padding: 1rem;
        border-radius: 1rem;
    }

    .jobSpot__frame-container_content > h1 {
        font-weight: 600;
        font-size: var(--large-font);
        line-height: 58px;
        color: var(--black-clr);
    }

    .jobSpot__frame-container_content > p {
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: #4C4C4C;
    }

    .jobSpot__frame-container_content-btn {
        display: flex;
        align-items: flex-start !important;

        gap: 3rem;
    }

    .jobSpot__frame-container_content-btn * {
        display: flex;

        border-radius: 1rem;

        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        text-align: center;

        padding: 1rem 2rem;
    }

    .jobSpot__frame-container_content-btn .bg {
        background-color: var(--black-clr);
        color: var(--white-clr);
    }

    .jobSpot__frame-container_content-btn .bordered {
        background-color: var(--white-clr);
        color: var(--black-clr);

        border: .1rem solid var(--black-clr);
    }

</style>