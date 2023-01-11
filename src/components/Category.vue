<script>
    import { categoryData } from '../constants';

    export default {
        name: "Category",
        data() {
            return {
                data: categoryData,
            }
        }
    }
</script>

<template>
    <section class="jobSpot__category">
        <div class="jobSpot__category-container container f-center">
            <div class="jobSpot__category-container_title">
                <h1>Choose Your Desire Category</h1>
            </div>
            <div class="jobSpot__category-container_elements">
                <div class="jobSpot__category-container_elements-element" v-for="dt in data">
                    <div class="jobSpot__category-container_elements-element_icon">
                        <font-awesome-icon :icon="dt.icon" style="font-size: 2.2rem;" />
                    </div>
                    <div class="jobSpot__category-container_elements-element_info">
                        <h3>{{ dt.title }}</h3>
                        <p>{{ dt.desc }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .jobSpot__category {
        margin: 10rem 0;
    }
    .jobSpot__category-container {
        display: flex;
        flex-direction: column;

        gap: 5rem;
    }

    .jobSpot__category-container_title > h1 {
        font-weight: 600;
        font-size: var(--large-font);
        line-height: 58px;
        text-align: center;
        color: var(--black-clr);
    }

    .jobSpot__category-container_elements {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        place-items: center;

        column-gap: 3rem;
        row-gap: 3rem;
    }

    @media screen and (max-width: 80rem) {
        .jobSpot__category-container_elements {
            grid-template-columns: repeat(1, 1fr);
        }
    }

    .jobSpot__category-container_elements-element {
        width: 100%;

        border: 1px solid rgba(76, 76, 76, 0.1);
        border-radius: 1.2rem;

        padding: 1rem;

        display: flex;
        gap: 2rem;

        transform: translateY(0);

        transition: .5s all ease;
    }

    .jobSpot__category-container_elements-element:hover {
        box-shadow: 10px 14px 20px rgba(45, 45, 45, 0.03);
        border: 0px solid rgba(0, 0, 0, 0.0);
        transform: translateY(-1rem);
    }

    .jobSpot__category-container_elements-element svg {
        transition: .5s all ease;
    }

    .jobSpot__category-container_elements-element:hover svg {
        color: var(--blue-clr);
    }

    .jobSpot__category-container_elements-element_info > h3 {
        font-weight: 500;
        font-size: var(--small-font);
        line-height: 28px;
        color: var(--black-clr);
    }

    .jobSpot__category-container_elements-element_info > p {
        font-weight: 400;
        font-size: var(--xSmall-font);
        line-height: 24px;
        color: #4C4C4C;
    }

</style>