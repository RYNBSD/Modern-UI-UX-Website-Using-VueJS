<script>
    import { featuredJobsData } from '../constants';

    export default {
        name: "FeaturedJobs",
        data() {
            return {
                data: featuredJobsData,
            }
        }
    }
</script>

<template>
    <section class="jobSpot__jobs">
        <div class="jobSpot__jobs-container container f-center">
            <div class="jobSpot__jobs-container_title">
                <h1>Featured Jobs</h1>
                <p>Hand-picked jobs featured depending on popularity and benefits</p>
            </div>
            <div class="jobSpot__jobs-container_companies">
                <div class="jobSpot__jobs-container_companies-company f-center" v-for="dt in data">
                    <div class="jobSpot__jobs-container_companies-company_content f-center">
                        <div class="jobSpot__jobs-container_companies-company_content-title">
                            <h2>{{ dt.title }}</h2>
                        </div>
                        <div class="jobSpot__jobs-container_companies-company_content-info">
                            <div class="jobSpot__jobs-container_companies-company_content-info_location f-center">
                                <font-awesome-icon icon="fa-solid fa-location-dot" />
                                <small>{{ dt.location }}</small>
                            </div>
                            <div class="jobSpot__jobs-container_companies-company_content-info_time f-center">
                                <font-awesome-icon icon="fa-solid fa-clock" />
                                <small>{{ dt.duration }}</small>
                            </div>
                        </div>
                    </div>
                    <div class="jobSpot__jobs-container_companies-company_split"></div>
                    <div class="jobSpot__jobs-container_companies-company_form f-center">
                        <div class="jobSpot__jobs-container_companies-company_form-name">
                            <img :src="dt.img" alt="company" width="40" height="40">
                            <div class="jobSpot__jobs-container_companies-company_form-name_details">
                                <h3>{{ dt.name }}</h3>
                                <p>{{ dt.published }}</p>
                            </div>
                        </div>
                        <div class="jobSpot__jobs-container_companies-company_form-apply">
                            <button type="button">
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="jobSpot__jobs-container_more">
                <button type="button" class="f-center">
                    Find More Jobs
                    <font-awesome-icon icon="fa-solid fa-arrow-right" />
                </button>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .jobSpot__jobs {
        background-color: var(--lightOrange-clr);
        height: 100vh;
    }

    .jobSpot__jobs-container {
        display: flex;
        flex-direction: column;
        justify-content: space-around !important;

        height: 100%;

        gap: 5rem;
    }

    .jobSpot__jobs-container_title {
        text-align: center;
    }

    .jobSpot__jobs-container_title > h1 {
        font-weight: 600;
        font-size: var(--large-font);
        line-height: 48px;
        color: var(--black-clr);
    }

    .jobSpot__jobs-container_title > p {
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: #4C4C4C;
    }

    .jobSpot__jobs-container_companies {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        place-items: center;

        column-gap: 5rem;
        row-gap: 5rem;
    }

    @media screen and (max-width: 80rem) {
        .jobSpot__jobs {
            height: fit-content;
        }

        .jobSpot__jobs-container {
            padding: 2rem 0;
        }

        .jobSpot__jobs-container_companies {
            grid-template-columns: repeat(1, 1fr);
        }
    }

    .jobSpot__jobs-container_companies-company {
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: flex-start !important;

        background-color: transparent;
        color: var(--black-clr);

        border: 1px solid rgba(45, 45, 45, 0.3);
        padding: 2rem;

        gap: 3rem;

        transition: .5s all ease;
    }

    .jobSpot__jobs-container_companies-company:hover {
        background-color: var(--black-clr);
        color: var(--white-clr);
    }

    .jobSpot__jobs-container_companies-company_content {
        display: flex;
        flex-direction: column;
        align-items: flex-start !important;

        gap: 1.5rem;
    }

    .jobSpot__jobs-container_companies-company_content-title > h2 {
        font-weight: 500;
        font-size: 22px;
        line-height: 33px;
    }

    .jobSpot__jobs-container_companies-company_content-info {
        display: flex;
        gap: 2rem;
    }

    .jobSpot__jobs-container_companies-company_content-info_location, .jobSpot__jobs-container_companies-company_content-info_time {
        display: flex;
        gap: 1rem;
    }

    .jobSpot__jobs-container_companies-company_content-info_location > small, .jobSpot__jobs-container_companies-company_content-info_time > small {
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        color: rgba(45, 45, 45, 0.7);

        transition: .5s color ease;
    }

    .jobSpot__jobs-container_companies-company:hover .jobSpot__jobs-container_companies-company_content-info_location > small {
        color: rgba(255, 255, 255, 0.8);
    }

    .jobSpot__jobs-container_companies-company:hover .jobSpot__jobs-container_companies-company_content-info_time > small {
        color: rgba(255, 255, 255, 0.8);
    }

    .jobSpot__jobs-container_companies-company_split {
        width: 100%;

        margin-top: 3rem;

        background-color: var(--white-clr);
        height: .1rem;

        transition: .5s background-color ease;
    }

    .jobSpot__jobs-container_companies-company:hover .jobSpot__jobs-container_companies-company_split {
        background-color: var(--lightOrange-clr);
    }

    .jobSpot__jobs-container_companies-company_form {
        width: 100%;
        display: flex;

        justify-content: space-between !important;
    }

    .jobSpot__jobs-container_companies-company_form-name {
        display: flex;
        gap: 1rem;
    }

    .jobSpot__jobs-container_companies-company_form-name > img {
        object-fit: contain;
        border-radius: 50%;

        background-color: var(--white-clr);
    }

    .jobSpot__jobs-container_companies-company_form-name_details > h3 {
        font-weight: 500;
        font-size: 16px;
        line-height: 16px;
    }

    .jobSpot__jobs-container_companies-company_form-name_details > p {
        font-weight: 400;
        font-size: 10px;
        line-height: 10px;
        color: rgba(45, 45, 45, 0.6);

        transition: .5s color ease;
    }

    .jobSpot__jobs-container_companies-company:hover .jobSpot__jobs-container_companies-company_form-name_details > p {
        color: rgba(255, 255, 255, 0.8);
    }

    .jobSpot__jobs-container_companies-company_form-apply > button {
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;

        color: var(--black-clr);
        background-color: transparent;

        padding: .5rem 1rem;

        border: 1px solid #2D2D2D;

        transition: .5s background-color ease;
    }

    .jobSpot__jobs-container_companies-company:hover .jobSpot__jobs-container_companies-company_form-apply > button {
        background-color: var(--white-clr);
    }

    .jobSpot__jobs-container_more > button {
        display: flex;
        gap: 1rem;

        background-color: var(--black-clr);
        color: var(--white-clr);

        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #FEFEFE;

        padding: 1rem 2rem;

        border-radius: 1rem;
    }

    .jobSpot__jobs-container_more > button > svg {
        transform: translateX(0);

        font-size: 1.4rem;

        transition: .5s transform ease;
    }

    .jobSpot__jobs-container_more:hover svg {
        transform: translateX(1rem);
    }

</style>