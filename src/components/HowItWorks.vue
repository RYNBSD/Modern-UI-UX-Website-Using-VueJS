<script>
    import { howItWorksData, intersect, intersectLeft } from '../constants';

    export default {
        name: "HowItWorks",
        data() {
            return {
                data: howItWorksData,
                imgRight: intersect,
                imgLeft: intersectLeft,
            }
        }
    }
</script>

<template>
    <section class="jobSpot__work">
        <div class="jobSpot__work-container f-center">
            <img :src="imgLeft" alt="image" loading="lazy" class="jobSpot__work-container_imgLeft" />
            <div class="jobSpot__work-container_content f-center">
                <div class="jobSpot__work-container_info f-center" v-for="(dt, index) in data">
                    <div class="jobSpot__work-container_info-desc f-center">
                        <div>
                            <font-awesome-icon :icon="dt.icon" style="font-size: 2.2rem;" />
                        </div>
                        <h2>{{ dt.title }}</h2>
                    </div>

                    <div class="jobSpot__work-container_info-split" v-if="index < 2"></div>
                </div>
            </div>
            <img :src="imgRight" alt="image" loading="lazy" class="jobSpot__work-container_imgRight" />
        </div>
    </section>
</template>

<style scoped>

    .jobSpot__work {
        margin: 10rem 0;
        border-radius: .5rem;
    }
    .jobSpot__work-container {
        position: relative;

        width: 80%;
        height: 20rem;
        margin: 0 auto;

        display: flex;

        background-color: var(--lightOrange-clr);
    }

    .jobSpot__work-container_imgLeft {
        position: absolute;
        top: 0;
        left: 0;
    }

    .jobSpot__work-container_imgRight {
        position: absolute;
        top: 0;
        right: 0;
    }

    .jobSpot__work-container_content {
        width: 80%;

        margin: 0 auto;

        display: grid;
        grid-template-columns: 1fr 1fr .6fr;
        place-items: center;
    }

    .jobSpot__work-container_info {
        display: flex;
        
        gap: 2rem;
    }

    .jobSpot__work-container_info-desc {
        display: flex;
        flex-direction: column;

        gap: 2rem;
    }
    
    .jobSpot__work-container_info-desc > div {
        border: .2rem dashed var(--black-clr);
        border-radius: 50%; 
    }
    
    .jobSpot__work-container_info-desc > div > svg {
        padding: 2rem;
    }
    
    .jobSpot__work-container_info-desc > h2 {
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        text-align: center;
        
        color: var(--black-clr);
    }
    
    .jobSpot__work-container_info-split {
        width: 10rem;
        height: .3rem;
        
        background-color: var(--black-clr);
        border-radius: 2rem;
    }
    
    @media screen and (max-width: 80rem)  {
        .jobSpot__work-container {
            height: fit-content;
        }

        .jobSpot__work-container_info {
            flex-direction: column;
        }

        .jobSpot__work-container_info-desc {
            width: 100%;
        }

        .jobSpot__work-container_content {
            grid-template-columns: 1fr;
            padding: 2rem 0;
        }

        .jobSpot__work-container_info-split {
            transform: rotate(90deg);

            margin: 6rem 0;
        }
    }
</style>