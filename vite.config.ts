import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	base: 'https://online-cinema-client1.vercel.app/',
	plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src/"),
            "@components": path.resolve(__dirname, "./src/app/components/"),
            "@ui": path.resolve(__dirname, "./src/app/components/ui"),
            "@screens": path.resolve(__dirname, "./src/app/components/screens/"),
            "@hooks": path.resolve(__dirname, "./src/app/hooks/"),
            "@shared": path.resolve(__dirname, "./src/app/shared/"),
            "@config": path.resolve(__dirname, "./src/app/config/"),
            "@services": path.resolve(__dirname, "./src/app/services/"),
            "@utils": path.resolve(__dirname, "./src/app/utils/"),
            "@store": path.resolve(__dirname, "./src/app/store/"),
            "@assets": path.resolve(__dirname, "./src/app/assets/"),
        },
    },
	server: {
        port: 5173,
        open: 'http://localhost:5173/'

	}
})
