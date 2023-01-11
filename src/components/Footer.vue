<script>
    import { logoLight } from '../constants';

    export default {
        name: "Footer",
        data() {
            return {
                img: logoLight,
            }
        }
    }
</script>

<template>
    <footer class="jobSpot__footer">
        <div class="jobSpot__footer-container container f-center">
            <div class="jobSpot__footer-container_content">
                <div class="jobSpot__footer-container_content-info">
                    <img :src="img" alt="logo" style="fill: #fff;" width="250" height="75">
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    <div class="jobSpot__footer-container_content-info_input f-center">
                        <input type="email" placeholder="Your email">
                        <font-awesome-icon icon="fa-solid fa-arrow-right" />
                    </div>
                </div>
                <div class="jobSpot__footer-container_content-nav">
                    <ul>
                        <li>
                            <h1>About Us</h1>
                        </li>
                        <li>Carrers</li>
                        <li>Our mission</li>
                        <li>How it started</li>
                        <li>Successes</li>
                    </ul>
                    <ul>
                        <li>
                            <h1>For Creative</h1>
                        </li>
                        <li>Explore positions</li>
                        <li>About suggestions</li>
                        <li>How it works?</li>
                        <li>Getting started</li>
                        <li>Which plan</li>
                    </ul>
                    <ul>
                        <li>
                            <h1>Resources</h1>
                        </li>
                        <li>Our Userbase</li>
                        <li>Why pick us?</li>
                        <li>How it works?</li>
                        <li>Getting Plan</li>
                        <li>Wgich plan</li>
                    </ul>
                </div>
            </div>
            <div class="jobSpot__footer-container_copyRight">
                <h1>&copy; Copyright 2021 by lobar.net. All rights reserved.</h1>
            </div>
        </div>
    </footer>
</template>

<style scoped>
    .jobSpot__footer {
        background-color: var(--black-clr);
    }

    .jobSpot__footer-container {
        display: flex;
        flex-direction: column;

        gap: 5rem;

        padding: 5rem 0;
    }

    .jobSpot__footer-container_content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        place-items: center;

        column-gap: 15rem;
    }

    .jobSpot__footer-container_content-info {
        display: flex;
        flex-direction: column;

        gap: 3rem;
    }

    .jobSpot__footer-container_content-info > p, .jobSpot__footer-container_content-nav > ul li, .jobSpot__footer-container_content-info_input > input {
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: #989898;
    }

    .jobSpot__footer-container_content-info_input {
        background-color: var(--white-clr);
        padding: 1rem;

        width: fit-content;
        border-radius: 1rem;

        display: flex;
    }

    .jobSpot__footer-container_content-info_input > svg {
        color: var(--white-clr);
        background-color: var(--darkOrange-clr);
        font-size: 1.6rem;
        padding: 1rem;
        border-radius: 1rem;
        cursor: pointer;
    }

    .jobSpot__footer-container_content-nav {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        place-items: center;

        column-gap: 5rem;
    }

    .jobSpot__footer-container_content-nav > ul {
        list-style: none;

        height: 100%;
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        cursor: pointer;

        gap: 2rem;
    }

    .jobSpot__footer-container_content-nav > ul h1 {
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        letter-spacing: -0.01em;
        color: var(--white-clr);
    }

    .jobSpot__footer-container_copyRight {
        width: 100%;
        text-align: center;
    }

    .jobSpot__footer-container_copyRight > h1 {
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
        color: #989898;
    }

    @media screen and (max-width: 80rem) {
        .jobSpot__footer-container_content {
            grid-template-columns: repeat(1, 1fr);

            column-gap: 0;
            row-gap: 15rem;
        }

        .jobSpot__footer-container_content-nav {
            grid-template-columns: repeat(1, 1fr);
            column-gap: 0;
            row-gap: 5rem;
        }
    }

</style>