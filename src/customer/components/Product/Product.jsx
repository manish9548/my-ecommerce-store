import { useSearchParams } from "react-router-dom"
import ProductCard from "./ProductCard"
import { mens_kurta } from "../../../Data/mens_kurta"

export default function Product() {

    const [searchParams, setSearchParams] = useSearchParams()

    const selectedColors = searchParams.getAll("color")
    const selectedBrands = searchParams.getAll("brand")
    const sortOption = searchParams.get("sort") || ""
    const currentPage = Number(searchParams.get("page")) || 1

    const productsPerPage = 8

    /* ================= FILTER HANDLERS ================= */

    const updateParams = (key, value, isMulti = false) => {
        const params = new URLSearchParams(searchParams)

        if (isMulti) {
            const existing = params.getAll(key)

            if (existing.includes(value)) {
                params.delete(key)
                existing
                    .filter(v => v !== value)
                    .forEach(v => params.append(key, v))
            } else {
                params.append(key, value)
            }
        } else {
            params.set(key, value)
        }

        params.set("page", 1)
        setSearchParams(params)
    }

    /* ================= FILTER LOGIC ================= */

    const filteredProducts = mens_kurta.filter(product => {

        if (selectedColors.length > 0 &&
            !selectedColors.includes(product.color)) {
            return false
        }

        if (selectedBrands.length > 0 &&
            !selectedBrands.includes(product.brand)) {
            return false
        }

        return true
    })

    /* ================= SORT ================= */

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortOption === "low-high") {
            return a.discountedPrice - b.discountedPrice
        }
        if (sortOption === "high-low") {
            return b.discountedPrice - a.discountedPrice
        }
        return 0
    })

    /* ================= PAGINATION ================= */

    const indexOfLast = currentPage * productsPerPage
    const indexOfFirst = indexOfLast - productsPerPage
    const currentProducts = sortedProducts.slice(indexOfFirst, indexOfLast)
    const totalPages = Math.ceil(sortedProducts.length / productsPerPage)

    /* ================= UNIQUE FILTER DATA ================= */

    const uniqueColors = [...new Set(mens_kurta.map(p => p.color))]
    const uniqueBrands = [...new Set(mens_kurta.map(p => p.brand))]

    return (
        <div className="bg-white">
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="flex justify-between border-b pt-24 pb-6">
                    <h1 className="text-3xl font-bold">Men's Kurta</h1>
                </div>

                <section className="pt-6 pb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

                        {/* FILTER SIDEBAR */}
                        <div className="lg:col-span-1 space-y-6">

                            {/* SORT */}
                            <div>
                                <h3 className="font-semibold mb-2">Sort By</h3>

                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        checked={sortOption === "low-high"}
                                        onChange={() =>
                                            updateParams("sort", "low-high")
                                        }
                                    />
                                    <span className="ml-2">Low to High</span>
                                </label>

                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        checked={sortOption === "high-low"}
                                        onChange={() =>
                                            updateParams("sort", "high-low")
                                        }
                                    />
                                    <span className="ml-2">High to Low</span>
                                </label>
                            </div>

                            {/* COLOR FILTER */}
                            <div>
                                <h3 className="font-semibold mb-2">Colors</h3>
                                <div className="space-y-2 max-h-40 overflow-y-auto">
                                    {uniqueColors.map(color => (
                                        <label key={color} className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={selectedColors.includes(color)}
                                                onChange={() =>
                                                    updateParams("color", color, true)
                                                }
                                            />
                                            <span className="ml-2">{color}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* BRAND FILTER */}
                            <div>
                                <h3 className="font-semibold mb-2">Brands</h3>
                                <div className="space-y-2 max-h-40 overflow-y-auto">
                                    {uniqueBrands.map(brand => (
                                        <label key={brand} className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={selectedBrands.includes(brand)}
                                                onChange={() =>
                                                    updateParams("brand", brand, true)
                                                }
                                            />
                                            <span className="ml-2">{brand}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* PRODUCT GRID */}
                        <div className="lg:col-span-4">

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {currentProducts.map((item, index) => (
                                    <ProductCard key={index} product={item} />
                                ))}
                            </div>

                            {/* PAGINATION */}
                            <div className="flex justify-center mt-10 space-x-2">
                                {[...Array(totalPages)].map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => {
                                            const params = new URLSearchParams(searchParams)
                                            params.set("page", i + 1)
                                            setSearchParams(params)
                                        }}
                                        className={`px-4 py-2 border rounded ${
                                            currentPage === i + 1
                                                ? "bg-black text-white"
                                                : "bg-white"
                                        }`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                            </div>

                        </div>

                    </div>
                </section>
            </main>
        </div>
    )
}