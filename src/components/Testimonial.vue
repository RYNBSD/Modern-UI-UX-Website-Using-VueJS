<script>
    import { testimonialImg } from '../constants';

    export default {
        name: "Testimonial",
        data() {
            return {
                img: testimonialImg,
            }
        }
    }
</script>

<template>
    <section class="jobSpot__testimonial">
        <div class="jobSpot__testimonial-container container">
            <div class="jobSpot__testimonial-container_img">
                <img :src="img" alt="image" loading="lazy" style="width: 100%;">
            </div>
            <div class="jobSpot__testimonial-container_content f-center">
                <small>Testimonial</small>
                <h1>What Our Clients Are Saying</h1>
                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the Letraset sheets containing passages.</p>
                <div class="jobSpot__testimonial-container_content-comment">
                    <div class="jobSpot__testimonial-container_content-comment_author">
                        <h3>Tufayel Khan</h3>
                        <p>UX Leader Menagement</p>
                    </div>
                    <div class="jobSpot__testimonial-container_content-comment_swap">
                        <button type="button" class="jobSpot__testimonial-container_content-comment_swap-left f-center">
                            <font-awesome-icon icon="fa-solid fa-chevron-left" />
                        </button>
                        <button type="button" class="jobSpot__testimonial-container_content-comment_swap-right f-center">
                            <font-awesome-icon icon="fa-solid fa-chevron-right" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .jobSpot__testimonial {
        height: 100vh;
    }

    .jobSpot__testimonial-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        place-items: center;
        column-gap: 5rem;
    }

    @media screen and (max-width: 80rem) {
        .jobSpot__testimonial-container {
            grid-template-columns: repeat(1, 1fr);
            padding: 3rem 0;
        }
    }

    .jobSpot__testimonial-container_content {
        display: flex;
        flex-direction: column;

        gap: 5rem;

        align-items: flex-start !important;
    }

    .jobSpot__testimonial-container_content > small {
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        color: var(--blue-clr);
    }

    .jobSpot__testimonial-container_content > h1 {
        font-weight: 600;
        font-size: var(--large-font);
        line-height: 58px;
        color: var(--black-clr);
    }

    .jobSpot__testimonial-container_content > p {
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: #4C4C4C;
    }

    .jobSpot__testimonial-container_content-comment {
        width: 100%;
        display: flex;
        justify-content: space-between !important;
    }

    .jobSpot__testimonial-container_content-comment_author > h3 {
        font-weight: 500;
        font-size: 22px;
        line-height: 22px;
        color: var(--black-clr);
    }

    .jobSpot__testimonial-container_content-comment_author > p {
        font-weight: 400;
        font-size: 14px;
        line-height: 14px;
        color: #4C4C4C;
    }

    .jobSpot__testimonial-container_content-comment_swap {
        display: flex;
        gap: 2rem;
    }
    
    .jobSpot__testimonial-container_content-comment_swap > button {
        display: flex;
        
        border-radius: 50%;
    }
    
    .jobSpot__testimonial-container_content-comment_swap svg {
        font-size: 1.4rem;
        padding: 1rem;
    }
    
    .jobSpot__testimonial-container_content-comment_swap-right, .jobSpot__testimonial-container_content-comment_swap-left, .jobSpot__testimonial-container_content-comment_swap-right svg, .jobSpot__testimonial-container_content-comment_swap-left svg {
        transition: .5s all ease;
    }

    .jobSpot__testimonial-container_content-comment_swap-left {
        border: 2px solid #2d2d2d81;
    }

    .jobSpot__testimonial-container_content-comment_swap-left:hover {
        border: 2px solid var(--black-clr);
        background-color: var(--black-clr);
    }
    
    .jobSpot__testimonial-container_content-comment_swap-left svg {
        color: #2D2D2D81;
    }

    .jobSpot__testimonial-container_content-comment_swap-left:hover svg {
        color: var(--white-clr);
    }
    
    .jobSpot__testimonial-container_content-comment_swap-right {
        border: 2px solid var(--black-clr);
    }
    
    .jobSpot__testimonial-container_content-comment_swap-right {
        background-color: var(--black-clr);
    }

    .jobSpot__testimonial-container_content-comment_swap-right:hover {
        background-color: transparent;
        border: 2px solid #2d2d2d81;
    }
    
    .jobSpot__testimonial-container_content-comment_swap-right svg {
        color: var(--white-clr);
    }

    .jobSpot__testimonial-container_content-comment_swap-right:hover svg {
        color: #2D2D2D81;
    }


</style>