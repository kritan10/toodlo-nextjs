'use client'

import { createContext, useState } from 'react'
import { TaskFilter } from '../interfaces'

const initTaskFilter: TaskFilter = TaskFilter.MyDay

export const FilterContext = createContext<TaskFilter>(initTaskFilter)
export const FilterSetterContext = createContext(null as unknown)

export default function FilterProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const [currentFilter, setCurrentFilter] =
        useState<TaskFilter>(initTaskFilter)
    return (
        <FilterContext.Provider value={currentFilter}>
            <FilterSetterContext.Provider value={setCurrentFilter}>
                {children}
            </FilterSetterContext.Provider>
        </FilterContext.Provider>
    )
}
