import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	base: '', //ADDED LINK FROM HOSTING https://xxxxxxxxxxxxxx
	plugins: [react()],
    resolve: {
        alias: {
            src: "/src"
        }
    },
	server: {
		open: 'http://localhost:5173/'
	}
})
