<script>
    import { logoImg } from '../constants';

    export default {
        name: "Navbar",
        data() {
            return {
                logo: logoImg,
            }
        }
    }
</script>

<template>
    <nav class="jobSpot__nav">
        <ul class="jobSpot__nav-mainList container f-center">
            <li class="jobSpot__nav-mainList_item">
                <img :src="logo" alt="logo"  class="jobSpot__nav-mainList_item-img" loading="lazy">
            </li>
            <li class="jobSpot__nav-mainList_item">
                <ul class="jobSpot__nav-mainList_item-secondList">
                    <li class="jobSpot__nav-mainList_item-secondList_item">
                        <a href=""  class="jobSpot__nav-mainList_item-secondList_item-link">Home</a>
                    </li>
                    <li class="jobSpot__nav-mainList_item-secondList_item">
                        <a href=""  class="jobSpot__nav-mainList_item-secondList_item-link">About us</a>
                    </li>
                    <li class="jobSpot__nav-mainList_item-secondList_item f-center">
                        <a href=""  class="jobSpot__nav-mainList_item-secondList_item-link">Find Jobs</a>
                        <font-awesome-icon icon="fa-solid fa-chevron-down" />
                    </li>
                    <li class="jobSpot__nav-mainList_item-secondList_item">
                        <a href=""  class="jobSpot__nav-mainList_item-secondList_item-link">Candidates</a>
                    </li>
                    <li class="jobSpot__nav-mainList_item-secondList_item">
                        <a href=""  class="jobSpot__nav-mainList_item-secondList_item-link">Advice</a>
                    </li>
                </ul>
            </li>
            <li class="jobSpot__nav-mainList_item f-center">
                <div class="jobSpot__nav-mainList_item-signUp">
                    <p>Sign up</p>
                </div>
                <div class="jobSpot__nav-mainList_item-resume f-center">
                    <p>Upload Resume</p>
                    <font-awesome-icon icon="fa-solid fa-arrow-up-from-bracket" style="font-size: 1.8rem;" />
                </div>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
    .jobSpot__nav {
        position: absolute;

        top: 0;
        left: 0;
        z-index: 999;

        padding-top: 2rem;
    }

    .jobSpot__nav ul {
        list-style: none;
    }

    .jobSpot__nav-mainList_item {
        display: flex;

        gap: 3rem;
    }

    .jobSpot__nav-mainList, .jobSpot__nav-mainList_item-secondList {
        display: flex;
        justify-content: space-between !important;
        align-items: center;
    } 

    .jobSpot__nav-mainList_item-secondList {
        gap: 5rem;
    }

    .jobSpot__nav-mainList_item-secondList_item {
        display: flex;

        gap: 1rem;
    }

    .jobSpot__nav-mainList_item-secondList_item > svg {
        transform: translateY(0);
        transition: .5s transform ease;
    }

    .jobSpot__nav-mainList_item-secondList_item:hover > svg {
        transform: translateY(.5rem);
    }
    
    .jobSpot__nav-mainList_item-secondList_item-link {
        position: relative;

        font-size: var(--small-font);
        font-weight: 400;
        color: var(--black-clr);
        
        transition: .5s color ease;
    }

    .jobSpot__nav-mainList_item-secondList_item-link::before {
        content: "";
        position: absolute;

        top: 100%;
        left: 50%;
        transform: translate(-50%, -50%);

        opacity: 0;

        background-color: var(--blue-clr);
        width: 0%;
        height: .1rem;

        transition: .5s all ease;
    }

    .jobSpot__nav-mainList_item-secondList_item:hover a {
        color: var(--blue-clr);
    }

    .jobSpot__nav-mainList_item-secondList_item:hover .jobSpot__nav-mainList_item-secondList_item-link::before {
        opacity: 1;
        width: 50%;
    }

    .jobSpot__nav-mainList_item-signUp > p, .jobSpot__nav-mainList_item-resume > p {
        font-size: var(--small-font);
        font-weight: 400;
    }

    .jobSpot__nav-mainList_item-resume {
        display: flex;
        gap: 1rem;

        background-color: var(--blue-clr);
        border-radius: 1rem;

        color: var(--white-clr);
        padding: 1rem 2rem;
    }

</style>