import { useAppStore } from "../stores/useAppStore"
import DrinkCard from "../components/DrinkCard"


export default function IndexPage() {
  const drinksResponse = useAppStore((state) => state.drinks)
  const hasDrinks = drinksResponse.drinks.length > 0

  return (
    <>
      <h1 className="text-6xl font-extrabold">Recetas</h1> 

      {hasDrinks ? (
        <div className="mt-10 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {drinksResponse.drinks.map((drink) => (
          <DrinkCard
            key={drink.idDrink}
            drink={drink}
          />
        ))}
        </div>
      ) : (
        <p className="my-10 text-center text-2xl">
          No hay resultados aún, utiliza el formulario para buscar recetas
        </p>
      )}
    </>
  )
}

