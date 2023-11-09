import React from "react";
import DefaultSelect from "./ui/select/DefaultSelect";
import DefaultInput from "./ui/input/DefaultInput";

export default function PostFilter({filter, setFilter}) {
    return (
        <div>
            <DefaultInput placeholder='Search' value={filter.query} onChange={e => setFilter({...filter, query: e.target.value})} />
            <DefaultSelect value={filter.sort} onChange={selected => setFilter({...filter, sort: selected})} defaulrOption='Sorting' options={[
                { value: 'title', name: 'By title' },
                { value: 'description', name: 'By description' }
            ]} />
        </div>
    )
}