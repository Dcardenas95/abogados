<template>
    <div class="container">
        <div class="navbar">
            <router-link to="/"><i class="bx bxs-home"></i></router-link>
            <router-link to="/clientes">Clientes</router-link>
            <router-link to="/casos">Casos</router-link>
            <router-link to="/abogados">Abogados</router-link>
            <router-link to="/asignacion-casos"
                >Asignación de casos</router-link
            >
        </div>

        <div class="content">
            <router-view />
        </div>
    </div>
</template>

<style lang="scss">
:root {
    --header-height: 3rem;

    /* Color */
    --first-color: #e2682b;
    --gray: rgba(129, 123, 123, 0.308);
    --secondary-color: #4aae54;
    --background-light: #fbf9f9;
    --text-color: #7b6f71;

    /* Font and typography */
    --font: "Poppins", sans-serif;
    --biggest-font-size: 2.5rem;
    --h1-font-size: 1.5rem;
    --h2-font-size: 1.25rem;
    --h3-font-size: 1.125rem;
    --normal-font-size: 0.938rem;
    --small-font-size: 0.813rem;
    --smaller-font-size: 0.75rem;

    /* Font Weight */
    --font-medium: 500;
    --font-semi-bold: 600;
    --font-bold: 700;

    /* Margenes */
    --mb-1: 0.5rem;
    --mb-2: 1rem;
    --mb-3: 1.5rem;
    --mb-4: 2rem;
    --mb-5: 2.5rem;
    --mb-6: 3rem;
}

*,
::before,
::after {
    box-sizing: border-box;
}

* {
    margin: 0;
    padding: 0;
    user-select: none;
    outline: none;
}

html {
    scroll-behavior: smooth;
}

body {
    margin: 0;
    font-family: var(--font);
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
    background-color: var(--background-light);
    color: var(--text-color);
    line-height: 1.2;
}

h1,
h2,
h3,
ul,
p {
    margin: 0;
}

h2,
h3 {
    font-weight: var(--font-semi-bold);
}

li {
    padding: 0;
    list-style: none;
}

a {
    text-decoration: none;
}

.container {
    max-width: 800px;
    margin-right: auto;
    margin-left: auto;
    position: relative;
    .navbar {
        margin-top: 4rem;
        height: 5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        a {
            background-color: #ffff;
            border-radius: 20px;
            background-color: var(--background-light);
            padding: 0.85rem;
            color: var(--text-color);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.25);
            i {
                font-size: 1.25rem;
                color: var(--text-color);
            }
        }
        .router-link-active {
            background-color: var(--first-color);
            color: var(--background-light);
            i {
                color: var(--background-light);
            }
        }
    }
    .content {
        padding: 1rem;
        .create {
            position: absolute;
            background-color: var(--first-color);
            padding: 0.95rem;
            border-radius: 100%;
            cursor: pointer;
            right: 0;
            box-shadow: 0 20px 25px -5px rgba(226, 104, 43, 0.25);
            i {
                font-size: 1.25rem;
                color: var(--background-light);
            }
        }
        .client-content {
            margin-top: 2rem;
            .fields {
                display: flex;
                justify-content: space-between;
                h3 {
                    color: var(--first-color);
                }
            }
        }
    }
}

.form-content {
    background-color: #fff;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    border-radius: 2rem;
    position: absolute;
    right: 30%;
    padding: 1rem;
    width: 280px;
    i {
        position: absolute;
        right: 5%;
        font-size: 2rem;
        cursor: pointer;
    }
    .form-item {
        margin: 1.2rem 0;
        h3 {
            margin: 0.25rem 0;
            font-size: var(--small-font-size);
            color: var(--first-color);
            margin-bottom: 0.75rem;
        }
        input {
            width: 100%;
        }
    }
    .button {
        border-radius: 0.4rem;
        cursor: pointer;
        color: var(--background-light);
        width: 100%;
        padding: 0.5rem;
        background: var(--first-color);
        text-align: center;
    }
}
</style>
