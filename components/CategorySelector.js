export default function CategorySelector({ categories, setSelectedCategory, completedCategories, selectedCategory }) {
    const availableCategories = categories.filter(
        category => !completedCategories.includes(category)
    );

    return (
        <div className="category-selector">
            <select
                className="select select-bordered"
                value={selectedCategory || ""}
                onChange={e => setSelectedCategory(e.target.value)}
            >
                <option disabled value="">
                    Choose a category
                </option>
                {availableCategories.map((category, i) => (
                    <option key={i} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
}
