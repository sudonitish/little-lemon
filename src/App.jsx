import ReservationForm from "./Form"

export default function App() {
  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-12 bg-stone-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-stone-800 mb-2">Reserve Your Table</h1>
        <p className="text-stone-600 mb-8">Fill out the form below to book your dining experience with us.</p>
        <ReservationForm />
      </div>
    </main>
  )
}


