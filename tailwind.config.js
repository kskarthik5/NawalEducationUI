/** @type {import('tailwindcss').Config} */
const defaultTheme=require('tailwindcss/defaultTheme')

module.exports = {
    mode: 'jit',
    content: [
        "./src/**/*.{html,ts}",
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        extend: {
            
        },
        screens: {
            'zs': '200px',
            ...defaultTheme.screens
        }
    },
    plugins: [
        require('flowbite/plugin')
    ],

}