import React from "react";

export default function FilterBar({filterHeaders, handleFilter, booking}) {

    if (!filterHeaders) return null; // Проверяем, определены ли filterHeaders


    const handleInputChangeTime = (e, key) => {
        const {value} = e.target;
        handleFilter(key, value);

    };
    const calculateKeyFromFilter = (filterKey) => {
        return filterKey.replace('_to', '').replace('_from', '');
    };
    const calculateTimeBounds = (key) => {
        const moscowOffset = 3 * 60 * 60 * 1000;

        const times = booking.map(item => new Date(item[calculateKeyFromFilter(key)]));
        const earliestTime = new Date(Math.min(...times) + moscowOffset);
        if (key.includes('_from')) {
            const minTime = new Date(Math.min(...times) + moscowOffset);
            const formattedMinTime = minTime.toISOString().slice(0, 16);
            return formattedMinTime;
        }
        // Для "Начало до" нужно найти максимальное время
        else {
            const maxTime = new Date(Math.max(...times));
            const formattedMaxTime = maxTime.toISOString().slice(0, 16);
            return formattedMaxTime;
        }
    };


    const handleInputChange = (e, key) => {
        const {value} = e.target;
        handleFilter(key, value);
    };

    return (
        <div className="flex flex-wrap items-center mb-4">
            {filterHeaders.map((header) => (
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
                            defaultValue={calculateTimeBounds(header.key, true)}
                            min={calculateTimeBounds(header.key, true)}
                            max={calculateTimeBounds(header.key, false)}
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
