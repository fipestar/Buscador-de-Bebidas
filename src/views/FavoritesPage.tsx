import DrinkCard from "../components/DrinkCard"
import { useAppStore } from "../stores/useAppStore"

export default function FavoritesPage() {
  const favorites = useAppStore((state) => state.favorites)
  const hasFavorites = favorites.length > 0
  return (
    <>
        <h1 className="text-6xl font-extrabold">Favoritos</h1>

        {hasFavorites ? (
          <div className="mt-10 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
           {favorites.map(drink => (
            <DrinkCard 
              key={drink.idDrink}
              drink={drink}
            />
           ))}
          </div>
        ) : (
          <p className="my-10 text-center text-2xl">No tienes favoritos aún.</p>
        )}
    </>
  )
}
