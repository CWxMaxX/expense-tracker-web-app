import React, { useEffect, useState } from "react";
import CustomSelect from "../atoms/CustomSelect";

interface FilterSectionProps {
  onSortChange: (filter: "newest" | "oldest") => void;
  onFilterChangeChange: (filter: string) => void;
}
export const sortOptions = [
  { value: "newest", label: "Newest First" },
  { value: "oldest", label: "Oldest First" },
];

export const categoryOptions = [
  { value: "all", label: "All" },
  { value: "food", label: "Food" },
  { value: "transportation", label: "Transportation" },
  { value: "utilities", label: "Utilities" },
  { value: "entertainment", label: "Entertainment" },
  { value: "healthcare", label: "Healthcare" },
  { value: "education", label: "Education" },
  { value: "income", label: "Income" },
  { value: "other", label: "Other" },
];

const FilterSection: React.FC<FilterSectionProps> = ({
  onSortChange,
  onFilterChangeChange,
}) => {
  const [sortBy, setSortBy] = useState(sortOptions[0]);
  const [category, setCategory] = useState(categoryOptions[0]);

  useEffect(() => {
    onSortChange(sortBy.value as "newest" | "oldest");
  }, [sortBy]);
  useEffect(() => {
    onFilterChangeChange(category.value);
  }, [category]);

  return (
    <div className="w-full flex flex-row justify-between items-center">
      <div className="w-1/2 flex justify-start pr-2">
        <CustomSelect
          onChange={setCategory}
          options={categoryOptions}
          value={category}
        />
      </div>
      <div className="w-1/2 flex justify-end pl-2">
        <CustomSelect
          onChange={setSortBy}
          options={sortOptions}
          value={sortBy}
        />
      </div>
    </div>
  );
};

export default FilterSection;
