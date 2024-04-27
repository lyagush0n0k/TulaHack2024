interface IProps {
    items: String[];
}

export default function TableHead({items}: IProps) {
    return(
        <thead className='border-b font-medium dark:border-neutral-500'>
        <tr>
            {items.map((item, index) => (
                <th
                    className='px-4 py-4'
                    scope="col"
                    key={index}
                >
                    {item}
                </th>
            ))}
        </tr>
        </thead>
    );
}
