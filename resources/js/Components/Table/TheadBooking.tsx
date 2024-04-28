export default function TheadBooking({ handleSort, sortConfig, columnHeaders }) {
    const handleClick = (key) => {
        handleSort(key);
    };

    return (
        <thead className='border-b font-medium dark:border-neutral-500'>
        <tr>
            {columnHeaders.map(header => (
                <th key={header.key} className='px-4 py-4' scope="col" onClick={() => handleSort(header.key)}>
                    {header.name}
                    {sortConfig.key === header.key && (
                        sortConfig.direction === 'asc' ? '↑' : '↓'
                    )}
                </th>
            ))}
        </tr>
        </thead>
    );
};
