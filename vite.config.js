import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/css/interact.scss',
                'resources/js/app.js',
                'resources/js/interact.js'
            ],
            refresh: true,
        }),
    ],
});
