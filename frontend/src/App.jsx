import Benefits from "./components/Benefits"
import AI from "./components/AI"
import Hero from "./components/Hero"
import { ThemeProvider } from "./contexts/ThemeContext"

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Hero/>
        <Benefits/>
        <AI/>
      </div>
    </ThemeProvider>
  )
}