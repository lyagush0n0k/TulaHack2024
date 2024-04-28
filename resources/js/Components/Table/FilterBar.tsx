import React from "react";

export default function FilterBar({ columnHeaders, handleFilter }) {

    if (!columnHeaders) return null; // Проверяем, определены ли columnHeaders

    console.log("Column Headers:", columnHeaders); // Отладочный вывод


    const handleInputChange = (e, key) => {
        const { value } = e.target;
        handleFilter(key, value);

    };

    return (
        <div className="flex flex-wrap items-center mb-4">
            {columnHeaders.map((header) => (
                <div key={header.key} className="mr-4 mb-2">
                    <label htmlFor={header.key} className="mr-2">
                        {header.name}:
                    </label>
                    {header.filterType === "select" ? (
                        <select
                            id={header.key}
                            onChange={(e) => handleInputChange(e, header.key)}
                        >
                            <option value="">Все</option>
                            {header.options.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    ) : header.filterType === "datetime" ? (
                        <input
                            type="datetime-local"
                            id={header.key}
                            onChange={(e) => handleInputChange(e, header.key)}
                        />
                    ) : (
                        <input
                            type="text"
                            id={header.key}
                            onChange={(e) => handleInputChange(e, header.key)}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}
