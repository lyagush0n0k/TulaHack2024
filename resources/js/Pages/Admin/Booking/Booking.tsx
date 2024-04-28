import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import Table from "@/Components/Table/Table";
import TheadBooking from "@/Components/Table/TheadBooking";
import FilterBar from "@/Components/Table/FilterBar";
import { PaginatedCollection, User } from "@/types";

interface Props {
    auth: any;
    booking: PaginatedCollection<User>;
}

export default function Booking({ auth, booking }: Props) {
    const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
    const [filters, setFilters] = useState({});

    const handleSort = (key: string) => {
        let direction = "asc";
        if (sortConfig.key === key && sortConfig.direction === "asc") {
            direction = "desc";
        }
        setSortConfig({ key, direction });
    };

    const handleFilter = (key: string, value: string) => {

        console.log("Filter Key:", key); // Отладочный вывод
        console.log("Filter Value:", value); // Отладочный вывод
        setFilters({ ...filters, [key]: value });
    };

    const findNestedPropertyValue = (obj: any, keys: string[]) => {
        if (!obj || !keys.length) return undefined;
        const [firstKey, ...restKeys] = keys;
        return findNestedPropertyValue(obj[firstKey], restKeys);
    };

    const isMatchFilter = (item: User, key: string, value: string) => {
        if (!value) return true;
        const keys = key.split(".");
        const nestedValue = findNestedPropertyValue(item, keys);

        // Преобразование даты в правильный формат перед сравнением
        const formattedValue = new Date(nestedValue).toLocaleString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
        });

        return String(formattedValue) === value;
    };




    const getUniqueValues = (key: string) => {
        const uniqueValues = new Set();
        booking.forEach((item) => {
            if (key.includes(".")) {
                const keys = key.split(".");
                const nestedValue = keys.reduce((obj, k) => obj && obj[k], item);
                uniqueValues.add(nestedValue);
            } else {
                uniqueValues.add(item[key]);
            }
        });
        return Array.from(uniqueValues);
    };

    const filteredData = booking.filter((item) => {
        return Object.entries(filters).every(([key, value]) =>
            isMatchFilter(item, key, value)
        );
    });

    const sortedData = filteredData.sort((a, b) => {
        if (sortConfig.key !== null) {
            const keys = sortConfig.key.split(".");
            const aValue = keys.reduce((obj, key) => obj && obj[key], a);
            const bValue = keys.reduce((obj, key) => obj && obj[key], b);

            if (sortConfig.direction === "asc") {
                return aValue > bValue ? 1 : -1;
            } else {
                return aValue < bValue ? 1 : -1;
            }
        } else {
            return 0;
        }
    });

    const columnHeaders = [
        { key: "id", name: "ID", filterType: "text" },
        { key: "restaurant.name", name: "Ресторан", filterType: "select", options: getUniqueValues("restaurant.name").map(value => ({ value, label: value })) },
        { key: "table.number", name: "Стол", filterType: "select", options: getUniqueValues("table.number").map(value => ({ value, label: value })) },
        { key: "user.name", name: "Пользователь", filterType: "text" },
        { key: "guest_count", name: "Гости", filterType: "text" },
        { key: "starts_at", name: "Начало", filterType: "datetime" },
        { key: "ends_at", name: "Конец", filterType: "datetime" },
        { key: "status", name: "Статус", filterType: "select", options: getUniqueValues("status").map(value => ({ value, label: value })) }
    ];

    return (
        <AdminLayout user={auth.user}>
            <Head title="Пользователи" />
            <div className="py-12">
                <div className="max-w-9xl mx-auto sm:px-6 lg:px-8">
                    <FilterBar
                        columnHeaders={columnHeaders}
                        handleFilter={handleFilter}

                    />
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mt-4">
                        <div className="overflow-x-scroll">
                            <Table>
                                <TheadBooking
                                    handleSort={handleSort}
                                    sortConfig={sortConfig}
                                    columnHeaders={columnHeaders}
                                />
                                <tbody>
                                {sortedData.map((item: User, index: number) => (
                                    <tr
                                        key={index}
                                        className="border-b dark:border-neutral-500"
                                    >
                                        <td className="px-4 py-4 break-words">{item.id}</td>
                                        <td className="px-4 py-4 break-words">
                                            {item.restaurant.name}
                                        </td>
                                        <td className="px-4 py-4 break-words">
                                            {item.table.number}
                                        </td>
                                        <td className="px-4 py-4 break-words">
                                            {item.user.name}
                                        </td>
                                        <td className="px-4 py-4 break-words">
                                            {item.guest_count}
                                        </td>
                                        <td className="px-4 py-4 break-words">
                                            {new Date(item.starts_at).toLocaleString("ru-RU", {
                                                year: "numeric",
                                                month: "2-digit",
                                                day: "2-digit",
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}
                                        </td>
                                        <td className="px-4 py-4 break-words">
                                            {new Date(item.ends_at).toLocaleString("ru-RU", {
                                                year: "numeric",
                                                month: "2-digit",
                                                day: "2-digit",
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}
                                        </td>
                                        <td className="px-4 py-4 break-words">{item.status}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

